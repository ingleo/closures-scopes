let arraySample = ["buenas buenas", 123, {name: "carlos"}, 12, 53, "hola"];
let arrayNumber = [32, 3,12 ,6,6,21,90];

const firstFuncFind = () => {
	const result = arraySample.find(element => typeof element === 'number');
  console.log(result);
}

const secondFunc = (accumulator, current) => accumulator + current;

const resultReducer = arrayNumber.reduce(secondFunc,100);


const thirdFunction = (objsArray) => {
  let sumFinal = 0;
	objsArray.forEach(element => {
  	if(!isNaN(element)){
    	sumFinal += element;
    }
  });
  console.log(sumFinal);
}

const fourthFunc = (objsArray) => {
	const multiplier = objsArray.map(element => {
  	return element * 2;
  });
  console.log(multiplier);
}

/**
secondFunc();
console.log(resultReducer);
thirdFunction(arraySample);
fourthFunc(arrayNumber);
*/

const moneyBox= () => {
	let coins = 0;
  
  const countCoins = (newvalue) => {
  		coins += newvalue;
      console.log(coins);
  }
  
  return countCoins;
  
}

/**
const newMoneyBox = moneyBox();
newMoneyBox(10);
newMoneyBox(5);
newMoneyBox(20);
*/


const counter = (i) => {
	let number = i;
  
  const displayCount = () => {
  	number += i;
    console.log(number);
  }
  
  return displayCount;
}


const newCounter = counter(3);

newCounter();
newCounter();
newCounter();
newCounter();
newCounter();
