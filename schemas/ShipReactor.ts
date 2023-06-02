import { ShipRequirements } from './ShipRequirements';

export type ShipReactor = {
    symbol: 'REACTOR_SOLAR_I' | 'REACTOR_FUSION_I' |
            'REACTOR_FISSION_I' | 'REACTOR_CHEMICAL_I' |
            'REACTOR_ANTIMATTER_I';
    name: string;
    description: string;
    condition: number;
    powerOutput: number;
    requirements: ShipRequirements;
}
