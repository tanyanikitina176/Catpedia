import style from './style.module.css'
import { DeleteIcon } from '@/assets/icon/delete-icon'
import type { Cat } from './type'
import { useNavigate } from 'react-router-dom'
import useStore from '@/store/store'
import { LikeIcon } from '@/assets/icon/like'

interface CatCardProps {
	cat: Cat
}

export const CatCard = ({ cat }: CatCardProps) => {
	const { likeCatIds } = useStore()
	const isLiked = likeCatIds.includes(cat.id)
	const navigate = useNavigate()
	const handleLikeClick = (e: React.MouseEvent) => {
		e.stopPropagation()
		useStore.getState().likeCatCard(cat.id)
	}

	const handleDeleteClick = (e: React.MouseEvent) => {
		e.stopPropagation()
		useStore.getState().deleteCat(cat)
	}

	const handleCardClick = () => {
		navigate(`${cat.id}`)
	}

	return (
		<div className={style.card_container} onClick={handleCardClick}>
			<img src={cat.url} className={style.image} alt='Изображение кошки' />
			<DeleteIcon
				className={`${style.delete_icon} ${style.icon_wrapper}`}
				onClick={handleDeleteClick}
			/>
			<div className={style.card_icon__container}>
				<h2>{cat.breed?.name || 'Unknown breed'}</h2>
				<LikeIcon
					className={`style.icon_wrapper ${isLiked ? style.icon_active : ''}`}
					onClick={handleLikeClick}
				/>
			</div>
		</div>
	)
}
