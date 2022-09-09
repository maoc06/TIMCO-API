import express from 'express';

import makeCallback from '../express-callback';
import { skillController } from '../controllers';

function getSkillRoutes({ verifyToken }) {
  const router = express.Router();

  router.get('/', makeCallback(skillController.getAllSkills));

  router.get('/:skillId', makeCallback(skillController.getSkill));

  router.post('/', verifyToken, makeCallback(skillController.postSkill));

  router.put('/', verifyToken, makeCallback(skillController.putSkill));

  return router;
}

export default getSkillRoutes;
