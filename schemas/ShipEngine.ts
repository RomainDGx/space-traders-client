import { ShipCondition } from './ShipCondition';
import { ShipRequirements } from './ShipRequirements';

export type ShipEngine = {
    symbol: 'ENGINE_IMPULSE_DRIVE_I' | 'ENGINE_ION_DRIVE_I' |
            'ENGINE_ION_DRIVE_I' | 'IENGINE_HYPER_DRIVE_I';
    name: string;
    description: string;
    condition: ShipCondition;
    speed: number;
    requirements: ShipRequirements;
}
