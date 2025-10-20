import { isNotEmpty, useForm } from '@mantine/form'
import type { Cat } from '../cat-card/type'
import { nanoid } from 'nanoid'

export const useAddCatForm = (initialValues?: Cat) => {
	const formCatData = useForm({
		mode: 'uncontrolled',
		initialValues: initialValues ?? {
			id: nanoid(7),
			url: '',
			breed: {
				id: nanoid(7),
				name: '',
				weight: { metric: '' },
				life_span: '',
				description: '',
			},
		},
		validate: {
			breed: {
				name: (value) => {
					if (!value || value.trim() === '') {
						return 'Название породы должно быть заполнено'
					}
					if (value.length < 2) {
						return 'Название должно содержать минимум 2 символа'
					}
					return null
				},
				weight: {
					metric: isNotEmpty('Вес должен быть указан'),
				},
				life_span: isNotEmpty('Продолжительность жизни должна быть указана'),
				description: isNotEmpty('Описание должно быть указано'),
			},
		},
		validateInputOnChange: true,
	})
	return formCatData
}
