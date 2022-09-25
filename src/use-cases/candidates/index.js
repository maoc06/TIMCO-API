import models from '../../data-access';
const { Candidate, Project, Student } = models;

import makeListCandidatesByProject from './list-candidates-by-project';

const listCandidatesByProject = makeListCandidatesByProject({
  candidatesDb: Candidate, projectModel: Project, studentModel: Student,
});

export default {
    listCandidatesByProject
};
