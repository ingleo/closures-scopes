const person = () => {
  var saveName = "name";

  return {
    getName: () => {
      return saveName;
    },
    setName: (name) => {
      saveName = name;
    },
  };
};


const newPerson = person();
console.log(newPerson.getName());
newPerson.setName('Leonardo');
console.log(newPerson.getName());