import { createHirer, editProfile, allJobsbyHr } from '../controllers/Hirers.js';
import { decodeFxn } from '../config/jwt.js';
import express from 'express';

export const router = express.Router();

router.post('/create-hirer', decodeFxn,createHirer);
router.post('/hire/edit/profile', decodeFxn,editProfile);
router.get('/all/jobs/byhr', decodeFxn, allJobsbyHr)
