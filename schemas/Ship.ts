import { ShipCargo } from './ShipCargo';
import { ShipCrew } from './ShipCrew';
import { ShipEngine } from './ShipEngine';
import { ShipFrame } from './ShipFrame';
import { ShipFuel } from './ShipFuel';
import { ShipModule } from './ShipModule';
import { ShipMount } from './ShipMount';
import { ShipNav } from './ShipNav';
import { ShipReactor } from './ShipReactor';
import { ShipRegistration } from './ShipRegistration';

export type Ship = {
    symbol: string;
    registration: ShipRegistration;
    nav: ShipNav;
    crew: ShipCrew;
    frame: ShipFrame;
    shipReactor: ShipReactor;
    engine: ShipEngine;
    module: Array<ShipModule>;
    mounts: Array<ShipMount>;
    cargo: ShipCargo;
    fuel: ShipFuel;
}
