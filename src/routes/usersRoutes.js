import {Router} from 'express';
const router = Router();

import {loginController} from '../controller/usersController';


router.get('/login', loginController);


module.exports = router;