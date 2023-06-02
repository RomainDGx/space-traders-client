import { MarketTradeGood } from './MarketTradeGood';
import { MarketTransaction } from './MarketTransaction';
import { TradeGood } from './TradeGood';

export type Market = {
    symbol: string;
    exports: Array<TradeGood>;
    imports: Array<TradeGood>;
    exchange: Array<TradeGood>;
    transactions: Array<MarketTransaction>;
    tradeGoods: Array<MarketTradeGood>;
}
