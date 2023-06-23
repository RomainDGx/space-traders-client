import axios from 'axios';
import { Agent, MarketTransaction, ShipCargo, ShipMount } from '../../schemas';

type RemoveMountResponse = {
    data: {
        agent: Agent;
        mounts: ShipMount[];
        cargo: ShipCargo;
        transaction: MarketTransaction;
    };
}

/**
 * Remove a mount from a ship.
 * The ship must be docked in a waypoint that has the Shipyard trait, and must have the desired mount that it wish to remove installed.
 * A removal fee will be deduced from the agent by the Shipyard.
 * @param shipSymbol The ship's symbol.
 * @param symbol The symbol of the mount to remove.
 * @returns Successfully removed the mount.
 */
export async function removeMountAsync(shipSymbol: string, symbol: string): Promise<RemoveMountResponse['data']> {
    const response = await axios.post<RemoveMountResponse>(`/my/ships/${shipSymbol}/mounts/remove`, { symbol });
    return response.data.data;
}
