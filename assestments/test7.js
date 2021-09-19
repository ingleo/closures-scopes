const promiseSample = (valBool) => {
  return new Promise((resolve, reject) => {
    if (valBool) {
      resolve({ response: "ok" });
    }
    reject(new Error("ha ocurrido error"));
  });
};

promiseSample(false)
  .then((response) => console.log(response))
  .catch((err) => console.log(err.message));

const asyncawaitfunc = async (valBool) => {
  try {
    const result = await promiseSample(valBool);
  } catch (err) {
    console.log(err.message);
  }
};

asyncawaitfunc(true);

const functioncallback = (num, cb) => {
  cb(null, num + 2);
};

functioncallback(1, function (err, data) {
  if (err) {
    console.log("error");
  } else {
    console.log("todo ok " + data);
  }
});
