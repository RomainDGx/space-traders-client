import axios from 'axios';
import { ShipCargo, TradeSymbol } from '../../schemas';

type TransferCargoResponse = {
    data: {
        cargo: ShipCargo;
    };
}

/**
 * Transfer cargo between ships.
 * The receiving ship must be in the same waypoint as the transferring ship, and it must able to hold the additional cargo after the transfer is complete. Both ships also must be in the same state, either both are docked or both are orbiting.
 * The response body's cargo shows the cargo of the transferring ship after the transfer is complete.
 * @param shipSymbol The transferring ship's symbol.
 * @param tradeSymbol The good's symbol.
 * @param units Amount of units to transfer.
 * @param transferShipSymbol The symbol of the ship to transfer to.
 * @returns Transfer successful.
 */
export async function transferCargoAsync(shipSymbol: string, tradeSymbol: TradeSymbol, units: number, transferShipSymbol: string): Promise<TransferCargoResponse['data']> {
    const response = await axios.post<TransferCargoResponse>(`/my/ships/${shipSymbol}/transfer`, { tradeSymbol, units, shipSymbol: transferShipSymbol });
    return response.data.data;
}
