import { Router } from 'express';
// import { MockRepository } from '../repositories/mock.repository';
import { UserUseCase } from '../../application/userUseCase';
import { UserController } from '../controller/user.controller';
import { MongoRepository } from '../repositories/mongo.repository';

const router = Router();

/**
 * Init Repository
 */
const userRepo = new MongoRepository();
// const userRepo = new MockRepository();

/**
 * Init use cases
 */
const userUseCase = new UserUseCase(userRepo);

/**
 * Init Use Controller
 */
const userCtrl = new UserController(userUseCase);

router.post('/user', userCtrl.insertCtrl);
router.get('/user', userCtrl.getCtrl);
router.get('/user/all', userCtrl.getAllCtrl);

export { router as userRouter };
