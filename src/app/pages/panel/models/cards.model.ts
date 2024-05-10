import { filter } from "rxjs"

export interface Cards{
	id: string,
	source: string,
	title: string,
	price: number,
	sex: string
}

export type CardsCreate = Omit<Cards, 'id'>

export enum Path{
	cards = 'https://65ddf590dccfcd562f55f33e.mockapi.io/api/v1/market',
	basket = 'https://65ddf590dccfcd562f55f33e.mockapi.io/api/v1/basket',
	test = 'https://65ddf590dccfcd562f55f33e.mockapi.io/api/v1/ProductsTest',
	clothes = 'https://65ddf590dccfcd562f55f33e.mockapi.io/api/v1/clothes'
}

// export enum FilterProducts { all, men, women }

export enum FilterProducts {
	all = 'All',
	men = 'Men',
	women = 'Women'
}

export const cardFilters = [
	'All',
	'Men',
	'Women'
]

export const cardFilters2 = [
	FilterProducts.all,
	FilterProducts.men,
	FilterProducts.women
]