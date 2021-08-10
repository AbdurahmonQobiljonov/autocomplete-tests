const data = ["java", "javascript", "python"];
function createAutoComplete(data){
  return function add(par){
    let root = [];
     data.forEach((e) => {
      // console.log();
      if (par === e.startsWith()){
        root.push(e);
      }
      return root;
    });
  }
};
const autoComplate = createAutoComplete(data);
autoComplate('ja');
// console.log(root);

module.exports = {autoComplate}

