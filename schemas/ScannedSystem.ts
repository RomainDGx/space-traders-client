import { SystemType } from './SystemType';

export type ScannedSystem = {
    symbol: string;
    sectorSymbol: string;
    type: SystemType;
    x: number;
    y: number;
    distance: number;
}
