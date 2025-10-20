import { CardLayout } from '@/components/card-layout/card-layout'
import { CatCardBig } from '@/components/cat-card-big/cat-card-big'
import style from './style.module.css'
import useStore from '@/store/store'
import { useNavigate, useParams } from 'react-router-dom'
import { useCallback, useEffect } from 'react'
import { Loader } from '@mantine/core'

export const CatPage = () => {
	const { id } = useParams()
	const { currentCat, getCatById, loading, setCurrentCat } = useStore()

	useEffect(() => {
		if (id) {
			getCatById(id)
		}
	}, [id])

	const navigate = useNavigate()
	const handleClickBack = useCallback(() => {
		setCurrentCat(null)
		navigate(-1)
	}, [])

	return (
		<div className={style.page_wrapper}>
			<div className={style.cat_container}>
				<CardLayout>
					{loading && (
						<Loader
							color='var(--mantine-color-black-9)'
							size={100}
							style={{ justifySelf: 'center' }}
						/>
					)}
					{currentCat && (
						<CatCardBig catData={currentCat} onBackClick={handleClickBack} />
					)}
				</CardLayout>
			</div>
		</div>
	)
}
