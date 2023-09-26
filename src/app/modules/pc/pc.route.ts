import express from 'express';
import { PCController } from './pc.controller';

import validateRequestZod from '../../middlewares/validateRequestZod';
import { PCValidation } from './pc.validation';

const router = express.Router();

router.get('/', PCController.getAllPc);
router.post(
  '/',
  validateRequestZod(PCValidation.createPcZodSchema),
  PCController.createPc
);
router.get('/category',PCController.getByCategoryPC)
router.get('/:id', PCController.getSinglePc);
router.delete('/:id', PCController.deletePC);
export const PCRouter = router;


