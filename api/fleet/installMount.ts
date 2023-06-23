import axios from 'axios';
import { Agent, MarketTransaction, ShipCargo, ShipMount } from '../../schemas';

type InstallMountResponse = {
    data: {
        agent: Agent;
        mounts: ShipMount[];
        cargo: ShipCargo;
        transaction: MarketTransaction;
    };
}

/**
 * Install a mount on a ship.
 * In order to install a mount, the ship must be docked and located in a waypoint that has a Shipyard trait. The ship also must have the mount to install in its cargo hold.
 * An installation fee will be deduced by the Shipyard for installing the mount on the ship.
 * @param shipSymbol The ship's symbol.
 * @param symbol The symbol of the mount to install.
 * @returns Successfully installed the mount.
 */
export async function installMountAsync(shipSymbol: string, symbol: string): Promise<InstallMountResponse['data']> {
    const response = await axios.post<InstallMountResponse>(`/my/ships/${shipSymbol}/mounts/install`, { symbol });
    return response.data.data;
}
