import { useSearchParams } from 'react-router-dom'

export const useFilter = () => {
	const [searchParams, setSearchParams] = useSearchParams()

	const filter = searchParams.get('filter') || 'all'
	const handleFilterChange = (newFilter: string | null) => {
		if (newFilter === 'all' || !newFilter) {
			setSearchParams({})
		} else {
			setSearchParams({ filter: newFilter })
		}
	}
	return {
		filter,
		handleFilterChange,
	}
}
