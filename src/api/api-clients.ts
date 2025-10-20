import type { CatDto } from '@/components/cat-card/type'

const baseUrl = import.meta.env.VITE_BASE_URL
const KEY =
	'live_x5KhBtZK0EpCn972D7w6dX1o4xGT2b7yOb14MroPtqhfzfky6s31hWoU9kaPW1ng'

export async function fetchCats(
	page: string
): Promise<
	| { status: string; error: unknown; message: string }
	| { status: string; data: CatDto[] }
> {
	try {
		const response = await fetch(
			`${baseUrl}/images/search?size=med&format=json&has_breeds=true&page=${page}&limit=9&order=ASC`,
			{
				method: 'GET',
				headers: {
					'Content-Type': 'application/json',
					'x-api-key': KEY,
				},
			}
		)
		const data = await response.json()
		if (!response.ok) {
			return {
				status: 'error',
				error: data,
				message: data?.message || 'Unexpected error',
			}
		}
		return {
			status: 'success',
			data,
		}
	} catch (error: unknown) {
		return {
			status: 'error',
			error,
			message: error instanceof Error ? error.message : 'Unexpected error',
		}
	}
}
