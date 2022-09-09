import express from 'express';
import validate from 'express-validation';

import * as userController from '../controllers/user/user.controller';
import * as vechileTrackController from '../controllers/vechile/vechileTrack.controller';
import * as userValidator from '../controllers/user/user.validator';
import * as vechileValidator from '../controllers/vechile/vechile.validator';

const router = express.Router();

//= ===============================
// API routes
//= ===============================
router.get('/me', userController.profile);
router.get('/vechile', vechileTrackController.index);
router.post('/vechile', validate(vechileValidator.create),vechileTrackController.create);
router.patch('/vechile', validate(vechileValidator.update),vechileTrackController.update);
router.get('/vechile/positions/:vechileNo', validate(vechileValidator.update),vechileTrackController.getVechilePostions);

router.post(
  '/changePassword',
  validate(userValidator.changePassword),
  userController.changePassword,
);

module.exports = router;
