import * as jobSeekerfxn from '../controllers/jobseeker.js';
import * as hirerRoute from './Hirers.js';
import * as JobsRoutes from './Jobs.js';
import * as anyuser from '../controllers/anyUser.js';

import express from 'express';
import { decodeFxn } from '../config/jwt.js';

export const router = express.Router();

// for normal job seeker 
router.post('/', jobSeekerfxn.createJobSeeker);
router.get('/:id', decodeFxn,jobSeekerfxn.ApplyTojob)
router.get('/user/search/job/profile', decodeFxn,jobSeekerfxn.userProfile)
router.post('/user/edit/profile', decodeFxn, jobSeekerfxn.editProfile)

router.post('/signin', anyuser.singin)

// for hirer controller
router.use('/', hirerRoute.router);

// for Job routes
router.use('/jobs', JobsRoutes.router);
