import { configureStore } from '@reduxjs/toolkit'
import { createWrapper } from 'next-redux-wrapper';
import slicer from './slicer';

const store = configureStore({
    reducer: {
        user: slicer
    }
})

export default store;

export const wrapper = createWrapper(()=>store);
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
