import { CardLayout } from '@/components/card-layout/card-layout'
import style from './style.module.css'
import { AddCatForm } from '@/components/add-cat-form/add-cat-form'

export const AddCatPage = () => {
	return (
		<div className={style.add_cat__wrapper}>
			<div className={style.add_cat__container}>
				<CardLayout>
					<AddCatForm />
				</CardLayout>
			</div>
		</div>
	)
}
