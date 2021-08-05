const complexObj = {
  name: "leonardo",
  getName: function () {
    return this.name;
  },
  otherObj: {
      name: "le1ni",
      getName: function () {
          return this.name;
      }
  },
  remainderObj: {
      name: "omen",
      getName: () => {
          return this.name;
      }
  },
  paramObj: {
      name: "sova",
      getName: function(name) {
          return name;
      }
  }
};

console.log(complexObj.getName());
console.log(complexObj.otherObj.getName());
console.log(complexObj.remainderObj.getName());
console.log(complexObj.paramObj.getName("phoenix"));