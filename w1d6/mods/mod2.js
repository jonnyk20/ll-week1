function export1(b){
  return b + 6;
}
module.exports = function (bFromMain){
  return export1(bFromMain);
};