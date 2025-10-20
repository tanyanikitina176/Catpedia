import { CardLayout } from '@/components/card-layout/card-layout'
import { CatCardBig } from '@/components/cat-card-big/cat-card-big'
import style from './style.module.css'
import useStore from '@/store/store'
import { useParams } from 'react-router-dom'
export const CatPage = () => {
	const { id } = useParams()
	const { cats } = useStore()
	const cat = cats.find((cat) => cat.id === id)

	return (
		<div className={style.page_wrapper}>
			<div className={style.cat_container}>
				<CardLayout>
					{cat && <CatCardBig catData={cat}></CatCardBig>}
				</CardLayout>
			</div>
		</div>
	)
}
