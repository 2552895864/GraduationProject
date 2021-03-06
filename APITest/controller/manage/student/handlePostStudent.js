const { create } = require("../../../model/model.js")("student");
const uuid = require("../../../utils/uuid.js");

module.exports = (stu_code, stu_pwd, stu_name, stu_img = "") => {
  if (stu_img !== "") {
    return (async (stu_code, stu_pwd, stu_name, stu_img) => {
      const stu_id = uuid();
      const { affectedRows } = await create({
        stu_id,
        stu_code,
        stu_pwd,
        stu_name,
        stu_img,
        stu_phoneno: "",
        stu_school: "",
        stu_avatar: "",
        remind_time: "5",
        stu_face_isreg: 0
      });
      return {
        success: true,
        message: affectedRows > 0 ? "创建成功！" : "创建失败！"
      };
    })(stu_code, stu_pwd, stu_name, stu_img.filename);
  } else {
    return (async (stu_code, stu_pwd, stu_name) => {
      const stu_id = uuid();
      const { affectedRows } = await create({
        stu_id,
        stu_code,
        stu_pwd,
        stu_name,
        stu_img: "",
        stu_phoneno: "",
        stu_school: "",
        stu_avatar: "",
        remind_time: "5",
        stu_face_isreg: 1
      });
      return {
        success: true,
        message: affectedRows > 0 ? "创建成功！" : "创建失败！"
      };
    })(stu_code, stu_pwd, stu_name);
  }
};
