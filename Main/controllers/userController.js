const { User, Thought } = require('../models');

module.exports = {
  // Get all courses
  getUsers(req, res) {
    User.find()
      .then((users) => res.json(users))
      .catch((err) => res.status(500).json(err));
  },
  // Get a course
  getSingleUser(req, res) {
    User.findOne({ userName: req.params.userName })
      .select('-__v')
      .then((user) =>
        !user
          ? res.status(404).json({ message: 'No user with that username' })
          : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
  },
  // Create a course
  createUser(req, res) {
    User.create(req.body)
      .then((user) => res.json(user))
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
  },
  // Delete a course
  deleteUser(req, res) {
    User.findOneAndDelete({ userName: req.params.userName })
      .then((user) =>
        !user
          ? res.status(404).json({ message: 'No user with that username' })
          : User.findOneAndUpdate(
            { userName: req.params.userName },
            { $pull: { userName: req.params.userName } },
            { new: true }
          )
      )
      .then(() => res.json({ message: 'user deleted!' }))
      .catch((err) => res.status(500).json(err));
  },
  // Update a course
  updateUser(req, res) {
    User.findOneAndUpdate(
      { userName: req.params.userName },
      { $set: req.body },
      { new: true }
    )
      .then((user) =>
        !user
          ? res.status(404).json({ message: 'No user with this username!' })
          : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
  }
}