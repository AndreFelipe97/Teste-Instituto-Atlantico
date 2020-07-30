import { Router } from 'express';

// Multer
import multer from 'multer';
import multerConfig from './config/multer';

// Middlewares
import authMiddleware from './app/middlewares/auth';

// Controllers
import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import FileController from './app/controllers/FileController';
import FirmwareController from './app/controllers/FirmwareController';

const routes = new Router();
const upload = multer(multerConfig);

routes.post('/sessions', SessionController.store);
routes.post('/users', UserController.store);
routes.post('/files', authMiddleware, upload.single('file'), FileController.store);
routes.post('/firmwares', authMiddleware, FirmwareController.store);
routes.get('/firmwares', authMiddleware, FirmwareController.listing);

export default routes;
