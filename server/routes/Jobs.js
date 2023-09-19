import { CreateJobs, getAllJobs, DeleteJob } from '../controllers/Jobs.js';
import { decodeFxn } from '../config/jwt.js';
import express from 'express'

export const router = express.Router();


router.get('/get-jobs',decodeFxn, getAllJobs);
    // console.log(user);
router.post('/create-Job', decodeFxn, CreateJobs);

router.delete('/delete/job/:id', decodeFxn, DeleteJob);