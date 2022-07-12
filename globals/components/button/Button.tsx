import type { NextPage } from 'next'
import React, { ChangeEventHandler } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from './Button.module.scss'

interface Props {
    title?: string,
    onClick?: (event: React.MouseEvent) => void,
    size?: string
}

const Button: React.FC<Props> = ({ title = '', onClick, size = 'md' }) => {
    return (
        <button className={size === 'sm' ? styles.sm_button : styles.button} onClick={onClick}>{title}</button>
    )
}

export default Button
