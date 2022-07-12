import type { NextPage } from 'next'
import { ChangeEventHandler } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from './Input.module.scss'

interface Props {
    placeholder?: string,
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void,
    value?: string,
    type?: string
}

const Input: React.FC<Props> = ({ placeholder = '', onChange, value = '', type = 'text' }) => {
    return (
        <input className={styles.input} onChange={onChange} placeholder={placeholder} value={value} type={type} />
    )
}

export default Input
