export interface Price{
	data: {
		amount: string,
		base: string,
		currency: string,
	}
}

export enum Currencies{
	BTCUSD = 'BTC-USD',
	RUBUSD = 'USD-RUB',
}