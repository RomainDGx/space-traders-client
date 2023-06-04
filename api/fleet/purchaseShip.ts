import axios from 'axios';
import { Agent, Ship, ShipType, ShipyardTransaction } from '../../schemas';

type PurchaseShipResponse = {
    data: {
        agent: Agent;
        ship: Ship;
        transaction: ShipyardTransaction;
    }
}

export async function purchaseShipAsync(shipType: ShipType, waypointSymbol: string): Promise<PurchaseShipResponse['data']> {
    const response = await axios.post<PurchaseShipResponse>('/my/ships', { shipType, waypointSymbol });
    return response.data.data;
}
