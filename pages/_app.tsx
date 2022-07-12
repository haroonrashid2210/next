import '../styles/globals.css'
import type { AppProps } from 'next/app'

import Layout from '../layout'
import LoginPage from './auth/login'
import { useEffect, useState } from 'react'
import AuthenticationService from '../services/Authentication.service'
import { postRequest } from '../api'
import ENDPOINTS from '../api/endpoints'
import { reset, setToken } from '../redux/slicer'
import { useDispatch, Provider, useSelector } from 'react-redux'
import store, { wrapper } from "../redux/store";
import { useAppSelector } from '../redux/hooks'
import { useRouter } from 'next/router'

function MyApp({ Component, pageProps }: AppProps) {

    const [loggedIn, setLoggedIn] = useState(false);
    const loggedInRedux = useAppSelector(state => state.user.token);   

    const dispatch = useDispatch()
    const router = useRouter()

    useEffect(() => {
        if (AuthenticationService.getToken()) setLoggedIn(true)
        if (router.pathname === '/auth/login' && (AuthenticationService.getToken() || loggedInRedux)) {
            router.replace('/')
        }
    }, [])

    useEffect(() => {
        const interval = setInterval(() => {
            getCurrentUser();
        }, 9 * 60 * 1000); // Runs every 9 minutes to refresh the token

        return () => clearInterval(interval);
    }, [])

    async function getCurrentUser() {
        try {
            const { access_token } = await postRequest(ENDPOINTS.auth.refreshToken);
            if (access_token) {
                AuthenticationService.updateToken(access_token);
                dispatch(setToken(access_token))
            } else {
                dispatch(reset())
                AuthenticationService.logout();
            }
        } catch (error) {
            console.error(error);
        }
    }

    if (!loggedIn && !loggedInRedux) {
        return (
            <Provider store={store}>
                <LoginPage />
            </Provider>
        )
    }

    return (
        <Provider store={store}>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </Provider>
    )
}

export default wrapper.withRedux(MyApp);
