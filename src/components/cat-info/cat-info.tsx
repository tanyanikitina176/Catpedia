import { Group, Text } from '@mantine/core'
import { IconHeartbeat, IconWeight } from '@tabler/icons-react'
import type { Breed } from '../cat-card/type'
import style from './style.module.css'

interface CatInfoProps {
	catInfoBreed: Breed
}

export const CatInfo = ({ catInfoBreed }: CatInfoProps) => {
	return (
		<div className={style.list_wrapper}>
			<Group>
				<IconWeight size={23} color='var(--mantine-color-blue-6)' />
				<div>
					<Text size='md' fw={500}>
						Weight (kilo)
					</Text>
					<Text size='md' c='dimmed'>
						{catInfoBreed.weight.metric}
					</Text>
				</div>
				<IconHeartbeat size={23} color='var(--mantine-color-red-6)' />
				<div>
					<Text size='md' fw={500}>
						Lifespan
					</Text>
					<Text size='md' c='dimmed'>
						{catInfoBreed.life_span}
					</Text>
				</div>
			</Group>

			{catInfoBreed.description && (
				<Group>
					<div>
						<Text size='md' fw={500}>
							Description
						</Text>
						<Text size='md' c='dimmed'>
							{catInfoBreed.description}
						</Text>
					</div>
				</Group>
			)}
		</div>
	)
}
