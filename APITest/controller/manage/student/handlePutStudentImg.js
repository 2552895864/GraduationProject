const { update } = require("../../../model/model.js")("student");
module.exports = (stu_id, stu_img) => {
  if (stu_img) {
    return (async (stu_id, stu_img) => {
      const { affectedRows } = await update(
        {
          stu_img
        },
        {
          stu_id
        }
      );
      return {
        success: affectedRows > 0 ? true : false,
        message: affectedRows > 0 ? "上传成功！" : "上传失败！"
      };
    })(stu_id, stu_img.filename);
  } else {
    throw { success: false, message: "图片上传失败！" };
  }
};
