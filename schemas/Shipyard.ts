import { ShipType } from './ShipType';
import { ShipyardShip } from './ShipyardShip';
import { ShipyardTransaction } from './ShipyardTransaction';

export type Shipyard = {
    symbol: string;
    shipTypes: Array<{ type: ShipType; }>;
    transactions: Array<ShipyardTransaction>;
    ships: Array<ShipyardShip>;
}
