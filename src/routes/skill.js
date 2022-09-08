import express from 'express';

import makeCallback from '../express-callback';
import { skillController } from '../controllers';

function getSkillRoutes() {
  const router = express.Router();

  router.get('/', makeCallback(skillController.getAllSkills));

  router.get('/:skillId', makeCallback(skillController.getSkill));

  router.post('/', makeCallback(skillController.postSkill));

  router.put('/', makeCallback(skillController.putSkill));

  return router;
}

export default getSkillRoutes;
