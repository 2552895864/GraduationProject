const { create } = require("../../../model/model.js")("student2course");
const uuid = require("../../../utils/uuid.js");

module.exports = (course_id, stu_id) => {
  return (async (course_id, stu_id) => {
    const s2c_id = uuid();
    const { affectedRows } = await create({ s2c_id, course_id, stu_id });
    return {
      success: true,
      message: affectedRows > 0 ? "新增成功！" : "新增失败！"
    };
  })(course_id, stu_id);
};
