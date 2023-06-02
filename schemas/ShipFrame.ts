import { ShipRequirements } from './ShipRequirements';

export type ShipFrame = {
    symbol: string;
    name: string;
    description: string;
    condition: number;
    moduleSlots: number;
    mountingPoints: number;
    fuelCapacity: number;
    requirements: ShipRequirements;
}
