const buses = ["bus1", "bus2", "bus2", "bus3", "bus1", "bus2"];

const busesObj = () => {
  let counts = {};
  for (let i = 0; i < buses.length; i++) {
    counts[buses[i]] = 1 + (counts[buses[i]] || 0);
  }

  let arrayCount = [];

  for (let bus in counts) {
    let tempObj = {};
    tempObj['name'] = bus;
    tempObj['count'] = counts[bus];
    arrayCount.push(tempObj);
  }

  arrayCount.sort(function (a, b) {
    if (a.count < b.count) {
      return 1;
    }
    if (a.count > b.count) {
      return -1;
    }
    return 0;
  });

  arrayCount.length = 2;
  return arrayCount;
};

console.log(busesObj());
