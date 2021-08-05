const someArray = [12,"leonardo", {name: "leini"}, 3, 7, "omen"];

const sumOnlyNumbers = (someArray) => {
    let finalSum = 0;
    someArray.forEach(element => {
        if (!isNaN(element)) {
            finalSum += element;
        }
    });
    console.log(finalSum);
}

const sumOnlyNumbers2 = () => {
    let finalSum = 0;
    someArray.forEach(element => {
        if (typeof element === 'number') {
            finalSum += element;
        }
    });
    console.log(finalSum);
}

sumOnlyNumbers(someArray);
sumOnlyNumbers2(someArray);