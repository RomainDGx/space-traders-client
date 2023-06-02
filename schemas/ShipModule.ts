import { ShipRequirements } from './ShipRequirements';

export type ShipModule = {
    symbol: 'MODULE_MINERAL_PROCESSOR_I' | 'MODULE_CARGO_HOLD_I' |
            'MODULE_CREW_QUARTERS_I' | 'MODULE_ENVOY_QUARTERS_I' |
            'MODULE_PASSENGER_CABIN_I' | 'MODULE_MICRO_REFINERY_I' |
            'MODULE_ORE_REFINERY_I' | 'MODULE_FUEL_REFINERY_I' |
            'MODULE_SCIENCE_LAB_I' | 'MODULE_JUMP_DRIVE_I' |
            'MODULE_JUMP_DRIVE_II' | 'MODULE_JUMP_DRIVE_III' |
            'MODULE_WARP_DRIVE_I' | 'MODULE_WARP_DRIVE_II' |
            'MODULE_WARP_DRIVE_III' | 'MODULE_SHIELD_GENERATOR_I' |
            'MODULE_SHIELD_GENERATOR_II';
    capacity: number;
    range: number;
    name: string;
    description: string;
    requirements: ShipRequirements;
}