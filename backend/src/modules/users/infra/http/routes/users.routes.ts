import { Router } from 'express';

// import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';
import UsersController from '../controllers/UsersControllers';

const usersRouter = Router();

const usersController = new UsersController();

usersRouter.post('/', usersController.create);

export default usersRouter;
