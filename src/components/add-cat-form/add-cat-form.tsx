import { useState } from 'react'
import type { Cat } from '../cat-card/type'
import { ImageUpload } from '../product-image-upload/product-image-upload'
import { useAddCatForm } from './use-add-cat-form'
import { Button, Group, Stack, Textarea, TextInput } from '@mantine/core'
import { useNavigate } from 'react-router-dom'
import useStore from '@/store/store'
import defaultImage from '@/assets/image/cat.png'

interface AddCatFormProps {
	formData?: Cat
}

export const AddCatForm = ({ formData }: AddCatFormProps) => {
	const { addCat } = useStore()
	const [selectedImage, setSelectedImage] = useState<File | null>(null)
	const navigate = useNavigate()
	const formCatData = useAddCatForm(formData)
	const handleSumbit = (data: Cat) => {
		const catData = {
			...data,
			url: selectedImage ? URL.createObjectURL(selectedImage) : defaultImage,
		}
		addCat(catData)
		formCatData.reset()
		navigate(-1)
	}
	return (
		<>
			<ImageUpload onImageChange={setSelectedImage} />
			<form onSubmit={formCatData.onSubmit(handleSumbit)}>
				<Stack gap='md'>
					<TextInput
						label='Название породы'
						placeholder='Введите название'
						key={formCatData.key('breed.name')}
						required
						{...formCatData.getInputProps('breed.name')}
					/>

					<Group grow>
						<TextInput
							required
							label='Вес (кг)'
							placeholder='3-5'
							key={formCatData.key('breed.weight')}
							{...formCatData.getInputProps('breed.weight.metric')}
						/>
						<TextInput
							required
							style={{ maxWidth: 'max-content' }}
							label='Продолжительность жизни'
							placeholder='12-15'
							key={formCatData.key('breed.life_span')}
							{...formCatData.getInputProps('breed.life_span')}
						/>
					</Group>
					<Textarea
						required
						label='Описание'
						key={formCatData.key('breed.0.description')}
						{...formCatData.getInputProps('breed.description')}
					/>

					<Group justify='flex-end' mt='md'>
						<Button
							type='submit'
							size='md'
							disabled={formCatData.isValid() ? false : true}
						>
							Сохранить данные
						</Button>
					</Group>
				</Stack>
			</form>
		</>
	)
}
