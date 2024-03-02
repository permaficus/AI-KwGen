import OpenAI from 'openai'
import { CHATGPT_API_KEYS } from '../constant/config';

export const chatGpt = new OpenAI({
    apiKey: CHATGPT_API_KEYS
});