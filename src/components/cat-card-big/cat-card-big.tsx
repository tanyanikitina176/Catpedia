import style from './style.module.css'
import { CatInfo } from '../cat-info/cat-info'
import { Button } from '@mantine/core'
import type { Cat } from '../cat-card/type'
import { IconArrowLeft } from '@tabler/icons-react'

interface CatCardBigProps {
	catData: Cat
	onBackClick: () => void
}

export const CatCardBig = ({ catData, onBackClick }: CatCardBigProps) => {
	return (
		<>
			<img src={catData.url} className={style.card_image} />
			<h3 className={style.card_title}>{catData.breed.name}</h3>
			<div className={style.card_description}>
				<h4 className={style.card_subtitle}>Characteristics of a cat</h4>
				<CatInfo catInfoBreed={catData.breed} />
			</div>
			<div className={style.button}>
				<Button
					className={style.button}
					leftSection={<IconArrowLeft />}
					onClick={onBackClick}
				>
					Back
				</Button>
			</div>
		</>
	)
}
