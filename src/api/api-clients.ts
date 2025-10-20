import type { CatDto } from '@/components/cat-card/type'

const baseUrl = import.meta.env.VITE_BASE_URL
const apiKey = import.meta.env.VITE_API_KEY

const HEADERS = {
	'Content-Type': 'application/json',
	'x-api-key': apiKey,
}

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
				headers: HEADERS,
			}
		)
		const data = await response.json()
		return response?.ok ? { status: 'success', data } : getResponseError(data)
	} catch (error: unknown) {
		return getUnexpectedError(error)
	}
}

export async function fetchCatById(
	id: string
): Promise<
	| { status: string; error: unknown; message: string }
	| { status: string; data: CatDto }
> {
	try {
		const response = await fetch(`${baseUrl}/images/${id}`, {
			method: 'GET',
			headers: HEADERS,
		})
		const data = await response.json()
		return response?.ok ? { status: 'success', data } : getResponseError(data)
	} catch (error: unknown) {
		return getUnexpectedError(error)
	}
}

function getResponseError(data: any) {
	return {
		status: 'error',
		error: data,
		message: data?.message || 'Unexpected error',
	}
}

function getUnexpectedError(error: unknown) {
	return {
		status: 'error',
		error,
		message: error instanceof Error ? error.message : 'Unexpected error',
	}
}
