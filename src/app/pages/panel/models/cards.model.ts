export interface Cards{
	id: string,
	source: string,
	title: string,
	price: number,
}

export type CardsCreate = Omit<Cards, 'id'>

export enum Path{
	cards = 'https://65ddf590dccfcd562f55f33e.mockapi.io/api/v1/market',
	basket = 'https://65ddf590dccfcd562f55f33e.mockapi.io/api/v1/basket'
}