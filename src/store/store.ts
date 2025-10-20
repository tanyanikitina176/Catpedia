import { fetchCats } from '@/api/api-clients'
import type { Cat, CatDto } from '@/components/cat-card/type'
import { create } from 'zustand'

interface CatsStore {
	cats: Cat[]
	loading: boolean
	error: string | null
	likeCatIds: string[]
	addCat: (newCat: Cat) => void
	deleteCat: (catData: Cat) => void
	likeCatCard: (likeId: string) => void
	getCats: (pageNumber: number) => Promise<void>
	pageNumber: number
}

const useStore = create<CatsStore>((set, get) => ({
	cats: [],
	loading: false,
	error: null,
	likeCatIds: [],
	pageNumber: 0,
	addCat(newCat) {
		const cats = [...get().cats, newCat]
		set({ cats })
	},
	deleteCat(catData) {
		const updateCats = get().cats.filter((cat) => cat !== catData)
		set({ cats: updateCats })
	},
	likeCatCard(likeId) {
		const likeArray = get().likeCatIds
		const isLiked = likeArray.includes(likeId)
		if (isLiked) {
			const updateLikeCatIds = likeArray.filter((id) => id !== likeId)
			set({ likeCatIds: updateLikeCatIds })
		} else {
			const updateLikeCatIds = [...get().likeCatIds, likeId]
			set({ likeCatIds: updateLikeCatIds })
		}
	},
	getCats: async (pageNumber) => {
		try {
			set({ loading: true, error: null })
			const result = await fetchCats(String(pageNumber))
			if (result.status === 'success' && 'data' in result) {
				const prevCats = get().cats
				const newCats = mapCats(result.data)
				const cats = [...prevCats, ...newCats]
				set({ cats, loading: false, pageNumber: pageNumber + 1, error: null })
			} else if ('message' in result) {
				set({
					error: result.message,
					loading: false,
				})
			}
		} catch (e) {
			set({
				error: e instanceof Error ? e.message : 'Unknown error',
				loading: false,
			})
		}
	},
}))

function mapCats(cats: CatDto[]): Cat[] {
	return cats.map((cat) => {
		return { ...cat, breed: cat.breeds[0] }
	})
}

export default useStore
