function export1(a){
  return a + 2;
}
module.exports = function (aFromMain){
  return export1(aFromMain);
};