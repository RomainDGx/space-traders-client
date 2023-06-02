import { FactionTrait } from './FactionTrait';

export type Faction = {
    symbol: string;
    name: string;
    description: string;
    headquarters: string;
    traits: Array<FactionTrait>;
    isRecruiting: boolean;
}
