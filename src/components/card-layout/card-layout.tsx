import { type ReactNode } from 'react'
import style from './style.module.css'

interface CardLayoutProps {
	children: ReactNode
}

export const CardLayout = ({ children }: CardLayoutProps) => {
	return <div className={style.card_container}>{children}</div>
}
