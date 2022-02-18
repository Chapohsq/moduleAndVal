fetch("./conf.json")
.then( res => res.json())
.then(execute)






const MyMath= require("./MyMath.js")

const helper= require("./caseHelper.js")


console.log(MyMath.sum(2,4));

console.log(helper.splitCamelCase("laCasaRosa"));