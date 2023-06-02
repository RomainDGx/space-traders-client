import { ShipCargoItem } from './ShipCargoItem';

export type ShipCargo = {
    capacity: number;
    units: number;
    inventory: Array<ShipCargoItem>;
}
