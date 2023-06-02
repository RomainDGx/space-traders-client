import { ConnectedSystem } from './ConnectedSystem';

export type JumpGate = {
    jumpRange: number;
    factionSymbol: string;
    connectedSystems: Array<ConnectedSystem>;
}
