import { ShipEngine } from './ShipEngine';
import { ShipFrame } from './ShipFrame';
import { ShipModule } from './ShipModule';
import { ShipMount } from './ShipMount';
import { ShipReactor } from './ShipReactor';
import { ShipType } from './ShipType';

export type ShipyardShip = {
    type: ShipType;
    name: string;
    description: string;
    purchasePrice: number;
    frame: ShipFrame;
    reactor: ShipReactor;
    engine: ShipEngine;
    modules: Array<ShipModule>;
    mounts: Array<ShipMount>;
}
