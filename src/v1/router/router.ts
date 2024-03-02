import { Router } from 'express';
import { generateKeywords } from '../worker/keyword.gen';

export const router = Router()

router.post('/generate', generateKeywords)