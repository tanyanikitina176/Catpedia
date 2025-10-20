import { Avatar, FileInput } from '@mantine/core'
import { IconPhoto, IconUpload } from '@tabler/icons-react'
import { useState } from 'react'
import style from './style.module.css'
interface ImageUploadProps {
	onImageChange: (file: File | null) => void
}

export const ImageUpload = ({ onImageChange }: ImageUploadProps) => {
	const [preview, setPreview] = useState<string | null>(null)

	const handleFileChange = (file: File | null) => {
		onImageChange(file)

		if (file) {
			const reader = new FileReader()
			reader.onload = (e) => setPreview(e.target?.result as string)
			reader.readAsDataURL(file)
		} else {
			setPreview(null)
		}
	}

	return (
		<div className={style.image_upload__wrapper}>
			<Avatar src={preview} radius='sm' size={250} alt='Изображение кота'>
				<IconPhoto size={120} />
			</Avatar>
			<FileInput
				accept='image/*'
				placeholder='Добавить фото'
				onChange={handleFileChange}
				clearable
				size='sm'
				leftSection={<IconUpload size={16} />}
				style={{ maxWidth: '150px' }}
			/>
		</div>
	)
}
