const router = require('express').Router();
const {
  getStudents,
  getSingleStudent,
  createStudent,
  deleteStudent,
  addAssignment,
  removeAssignment,
} = require('../../controllers/thoughtController');

// /api/students
router.route('/').get(getStudents).post(createStudent);

// /api/students/:studentId
router.route('/:thoughtId').get(getSingleStudent).delete(deleteStudent);

// /api/students/:studentId/assignments
router.route('/:thoughtId/reactions').post(addAssignment);

// /api/students/:studentId/assignments/:assignmentId
router.route('/:thoughtId/reactions/:reactionsId').delete(removeAssignment);

module.exports = router;
