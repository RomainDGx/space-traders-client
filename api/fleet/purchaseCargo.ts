import axios from 'axios';
import { Agent, MarketTransaction, ShipCargo, TradeSymbol } from '../../schemas';

type PurchaseCargoResponse = {
    data: {
        agent: Agent;
        cargo: ShipCargo;
        transaction: MarketTransaction;
    };
}

/**
 * Purchase cargo from a market.
 * The ship must be docked in a waypoint that has Marketplace trait, and the market must be selling a good to be able to purchase it.
 * The maximum amount of units of a good that can be purchased in each transaction are denoted by the tradeVolume value of the good, which can be viewed by using the Get Market action.
 * Purchased goods are added to the ship's cargo hold.
 * @param shipSymbol The ship's symbol.
 * @param symbol The good's symbol.
 * @param units Amounts of units to purchase.
 * @returns Purchased goods successfully.
 */
export async function purchaseCargoAsync(shipSymbol: string, symbol: TradeSymbol, units: number): Promise<PurchaseCargoResponse['data']> {
    const response = await axios.post<PurchaseCargoResponse>(`/my/ships/${shipSymbol}/purchase`, { symbol, units });
    return response.data.data;
}
