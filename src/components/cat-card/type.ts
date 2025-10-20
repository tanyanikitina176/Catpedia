export interface CatDto {
	id: string
	url: string
	breeds: Breed[]
}

export interface Cat {
	id: string
	url: string
	breed: Breed
}

export type Breed = {
	id: string
	name: string
	weight: {
		metric: string
	}
	description: string
	life_span: string
}
