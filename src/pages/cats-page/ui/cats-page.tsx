import { Link } from 'react-router-dom'
import style from './style.module.css'
import { CatCard } from '@/components/cat-card/cat-card'
import { IconPlus, IconRefresh } from '@tabler/icons-react'
import { Button, Loader } from '@mantine/core'
import useStore from '@/store/store'
import { useEffect, useMemo } from 'react'
import { Filter } from '@/components/filters/filter'
import { useFilter } from '@/hooks/handle-filter-change'
import { useIntersection } from '@mantine/hooks'

export const CatsPage = () => {
	const { loading, cats, likeCatIds, pageNumber, getCats, error } = useStore()
	const { filter, handleFilterChange } = useFilter()
	const { ref, entry } = useIntersection({
		threshold: 1,
	})

	const isFavouritesFilter = filter === 'favourites'
	const shouldLoadMore = entry?.isIntersecting && !isFavouritesFilter

	useEffect(() => {
		if (shouldLoadMore) {
			getCats(pageNumber)
		}
	}, [shouldLoadMore])

	const handleRetry = () => {
		getCats(pageNumber)
	}

	const filteredCats = useMemo(() => {
		if (!cats) return []

		if (isFavouritesFilter) {
			const favouritesCats = cats.filter((cat) => likeCatIds.includes(cat.id))
			return favouritesCats
		}
		return cats
	}, [cats, filter, likeCatIds])
	return (
		<>
			<div className={style.cats_container}>
				<header className={style.cats_header__wrapper}>
					<div className={style.cats_header__container}>
						<h1>Cats</h1>
						<Link to={'/create-product'}>
							<Button className={style.button_add}>
								<IconPlus />
							</Button>
						</Link>
					</div>
					<Filter value={filter} setValue={handleFilterChange} />
				</header>
				<div className={style.cats_list__wrapper}>
					<div className={style.cats_list__container}>
						{error && !isFavouritesFilter && !cats && (
							<div className={style.error_block}>
								<div>{error}</div>
								<Button
									leftSection={<IconRefresh />}
									ml={45}
									onClick={handleRetry}
								>
									Попробовать снова
								</Button>
							</div>
						)}
						{filteredCats &&
							filteredCats.map((cat) => <CatCard cat={cat} key={cat.id} />)}
						{!isFavouritesFilter && <div ref={ref}></div>}
						{loading && !isFavouritesFilter && (
							<Loader
								color='var(--mantine-color-black-0)'
								size={100}
								style={{ justifySelf: 'center', gridColumn: '1/-1' }}
							/>
						)}
					</div>
				</div>
			</div>
		</>
	)
}
