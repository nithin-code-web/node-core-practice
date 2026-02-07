const User = require("../models/user");

exports.registerUser = async (req, res) => {
  try {
     await User.create(req.body);
    res
        .status(201)
        .json({ message: "User registered successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error registering user", error: error.message });
  }
};
