import { DateTime } from 'luxon';

export type ShipyardTransaction = {
    waypointSymbol: string;
    shipSymbol: string;
    price: number;
    agentSymbol: string;
    timestamp: DateTime;
}
