import { LikeIcon } from '@/assets/icon/like'
import { Tabs } from '@mantine/core'
import style from './style.module.css'
import { IconCat } from '@tabler/icons-react'

interface FilterProps {
	value: string
	setValue: (value: string | null) => void
}

export const Filter = ({ value, setValue }: FilterProps) => {
	return (
		<Tabs
			value={value}
			variant='outline'
			color='var(--mantine-color-black-3)'
			onChange={setValue}
		>
			<Tabs.List>
				<Tabs.Tab
					value='all'
					leftSection={<IconCat />}
					className={style.tab_item}
				>
					Все
				</Tabs.Tab>
				<Tabs.Tab
					value='favourites'
					leftSection={<LikeIcon className={style.icon} />}
					className={style.tab_item}
				>
					Избранное
				</Tabs.Tab>
			</Tabs.List>
		</Tabs>
	)
}
