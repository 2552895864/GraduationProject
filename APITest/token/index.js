const expressJwt = require("express-jwt");
const { secretKey } = require("./constant.js");

const jwtAuth = expressJwt({ secret: secretKey }).unless({
  path: ["/manage/login", "/student/login", "/upload", "/student/updatePwd"],
});

module.exports = jwtAuth;
