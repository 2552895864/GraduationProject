module.exports = (table, current, pageSize, condition = {}) => {
  let conditionSQL = `${Object.keys(condition).reduce(
    (acc, key) => acc + `${key}='${condition[key]}' AND `,
    ""
  )}`;
  conditionSQL = conditionSQL.substring(0, conditionSQL.length - 4);
  if (current === -1 || current === "-1") {
    return `select * from ${table} ${
      Object.keys(condition).length ? "where" : ""
    } ${conditionSQL};`;
  }
  return `select * from ${table} ${
    Object.keys(condition).length ? "where" : ""
  } ${conditionSQL}limit ${(current - 1) * pageSize},${pageSize};`;
};
