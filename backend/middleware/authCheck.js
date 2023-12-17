const jwt = require('jsonwebtoken');
const { queryWithValue } = require('../query/queryWithValue');

const authCheck = async(req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];

    if (!token) return res.status(400).json({ message: "please login first" });

    const decodeToken = jwt.verify(token, process.env.SECRET);

    if (!decodeToken)
      return res.status(400).json({ message: "please login first" });

    const q = "SELECT * from users where email = ? limit 1";

    const user = await queryWithValue(q,[decodeToken]);
    
    req.useremail = user[0].email;
    return next();

  } catch (error) {
    console.log(error);
  }
};

module.exports = authCheck;
