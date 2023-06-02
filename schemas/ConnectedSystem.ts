import { SystemType } from './SystemType';

export type ConnectedSystem = {
    symbol: string;
    sectorSymbol: string;
    type: SystemType;
    factionSymbol: string;
    x: number;
    y: number;
    distance: number;
}
