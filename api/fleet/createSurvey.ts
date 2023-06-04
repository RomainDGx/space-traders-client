import axios from 'axios';
import { Cooldown, Survey } from '../../schemas';

type CreateSurveyResponse = {
    data: {
        cooldown: Cooldown;
        surveys: Array<Survey>;
    };
}

export async function createSurveyAsync(shipSymbol: string): Promise<CreateSurveyResponse['data']> {
    const response = await axios.post<CreateSurveyResponse>(`/my/ships/${shipSymbol}/survey`);
    return response.data.data;
}
