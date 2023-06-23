import axios from 'axios';
import { Contract } from '../../schemas';

type NegociateContractResponse = {
    data: {
        contract: Contract;
    };
}

/**
 * Negotiate a new contract with the HQ.
 * In order to negotiate a new contract, an agent must not have ongoing or offered contracts over the allowed maximum amount. Currently the maximum contracts an agent can have at a time is 1.
 * Once a contract is negotiated, it is added to the list of contracts offered to the agent, which the agent can then accept.
 * The ship must be present at a faction's HQ waypoint to negotiate a contract with that faction.
 * @param shipSymbol The ship's symbol.
 * @returns Successfully negotiated a new contract.
 */
export async function negociateContractAsync(shipSymbol: string): Promise<NegociateContractResponse['data']> {
    const response = await axios.post<NegociateContractResponse>(`/my/ships/${shipSymbol}/negociate/contract`);
    return response.data.data;
}
