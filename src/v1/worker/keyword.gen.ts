import { Request, Response } from 'express'
import { chatGpt } from "../../libs/openai.utils";

export const generateKeywords = async (req: Request, res: Response) => {
    const stream: any = await chatGpt.chat.completions.create({
        model: 'gpt-3.5-turbo',
        // stream: true,
        messages: [
            { role: 'system', content: 'generate keywords for SEO'},
            { role: 'user', content: req.body }
        ],
        temperature: 1,
        max_tokens: 256,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
    })
    const response: any = stream.choices[0].message.content.split('\n')
    res.status(200).json({
        status: 'OK',
        code: 200,
        data: response.map((e: any) => e.replace(/^[0-9.-]+/g, '').trim())
    })
    res.end();
}