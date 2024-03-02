import { Request, Response } from 'express'
import { chatGpt } from "../../libs/openai.utils";
import { v4 as ObjectId } from 'uuid';

export const generateKeywords = async (req: Request, res: Response) => {
    try {        
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
        let response: any = stream.choices[0].message.content.split('\n')
        let newResponse: any = []
        if (response.length === 1) {
            response = response[0].split(', ')
        }
        response.map((e: any) => {
            newResponse = [
                ...newResponse,
                {
                    id: ObjectId(),
                    keyword: e.replace(/^[0-9.-]+/g, '').trim()
                }
            ]
        })
        res.status(200).json({
            status: 'OK',
            code: 200,
            data: newResponse
        })
        res.end();
    } catch (error: any) {
        console.log(error)
        res.status(500).json({
            status: 'ERR_BAD_SERVICE',
            code: 500,
            details: error.message
        })
    }
}