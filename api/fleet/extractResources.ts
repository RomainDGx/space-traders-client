import axios from 'axios';
import { Cooldown, Extraction, ShipCargo, Survey } from '../../schemas';

type ExtractResourcesResponse = {
    data: {
        cooldown: Cooldown;
        extraction: Extraction;
        cargo: ShipCargo;
    };
}

export async function extractResourcesAsync(shipSymbol: string, survey: Survey): Promise<ExtractResourcesResponse['data']> {
    const response = await axios.post<ExtractResourcesResponse>(`/my/ships/${shipSymbol}/extract`, { survey });
    return response.data.data;
}
