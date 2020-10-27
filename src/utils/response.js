const runSample = require("../utils/detectIntent");

const resultQuery = async function (req, res) {
  const {text} = req.body
  const resulText = await runSample(text);
//   console.log(resulText );

  return res.json(resulText);
};
module.exports = resultQuery;
