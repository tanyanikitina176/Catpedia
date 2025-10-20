import { Anchor, Flex, List, Loader, Text } from '@mantine/core'
import style from './style.module.css'
import { Suspense } from 'react'
import { IconCat } from '@tabler/icons-react'

export const NotFoundPage = () => {
	return (
		<div className={style.container_page}>
			<Suspense fallback={<Loader color='blue' />}>
				<Flex
					mih={'50vh'}
					direction='column'
					wrap='nowrap'
					className={style.notFound}
					justify='space-between'
				>
					<Flex direction='column' gap='52px'>
						<Flex
							className={style.notFound_header}
							justify='flex-start'
							align='center'
							direction='row'
							wrap='nowrap'
						>
							<IconCat size={50} />
							<span className={style.notFound_title}>404</span>
						</Flex>
						<Flex
							className={style.notFound_message}
							direction='column'
							wrap='nowrap'
							c='#06121E'
							gap='10px'
						>
							<Text fw={700} c='#06121E' size='17px'>
								Страница не найдена
							</Text>
							<List withPadding className={style.notFound_message_list}>
								<List.Item className={style.notFound_message_item}>
									<Text size='17px' fw={500}>
										или неправильный адрес,
									</Text>
								</List.Item>
								<List.Item className={style.notFound_message_item}>
									<Text size='17px' fw={500}>
										или страница удалена.
									</Text>
								</List.Item>
							</List>
						</Flex>
					</Flex>
					<Anchor
						href='products'
						underline='always'
						className={style.notFound_back_link}
						size='17px'
						fw={500}
					>
						На главный экран →
					</Anchor>
				</Flex>
			</Suspense>
		</div>
	)
}
