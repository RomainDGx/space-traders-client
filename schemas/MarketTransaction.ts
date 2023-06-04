import { DateTime } from 'luxon';

export type MarketTransaction = {
    waypointSymbol: string;
    shipSymbol: string;
    tradeSymbol: string;
    type: 'PURCHASE' | 'SELL';
    units: number
    pricePerUnit: number;
    totalPrice: number;
    timestamp: DateTime;
}
