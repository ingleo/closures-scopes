/* Given this array of objects, is needed to obtain just the books that have a specific topic */

// getFilteredBooksBy(list)('--a topic--');

/* If the needed topic is Jquery the output would be:
[
   {
       title:  'The Road Ahead',
       libraryID: 1254,
       topics:['jquery','backboneJS','react']
   },
   {
       title: 'Transpilers what you should know',
       libraryID: 3245,
       topics:['transpilers','Typescript','jQuery']
   },
   {
       title: 'VanillaJs better than jQuery',
       libraryID: 3245,
       topics:['vanillajs','JQUERY','es6']
   }
 ]

*/
var GeekLibrary = [
  {
    title: "The Road Ahead",
    libraryID: 1254,
    topics: ["jquery", "backboneJS", "react"],
  },
  {
    title: "mastering html5 and angular",
    libraryID: 4264,
    topics: ["angular", "htmll5", "es6"],
  },
  {
    title: "Transpilers what you should know",
    libraryID: 3245,
    topics: ["transpilers", "Typescript", "jQuery"],
  },
  {
    title: "Test",
    libraryID: 123,
    topics: null,
  },
  {
    title: "Rich Internet Apps",
    libraryID: 3245,
    topics: ["As3", "ria", "flex"],
  },
  {
    title: "VanillaJs better than jQuery",
    libraryID: 3245,
    topics: ["vanillajs", "JQUERY", "es6"],
  },
];

const getFilteredBooksBy = (list, criteria) => {
  const newArray = addTopicsUpper(list);
  const filteredArray = newArray.filter((element) =>
    element.topicsUpper?.includes(criteria.toUpperCase())
  );

  filteredArray.map((element) => {
    return delete element.topicsUpper;
  });

  console.log(filteredArray);
};

const addTopicsUpper = (list) => {
  const transformedList = [];
  for (element of list) {
    element.topicsUpper = changeToUpper(element.topics);
    transformedList.push(element);
  }
  return transformedList;
};

const changeToUpper = (arr) => {
  return arr?.map((element) => {
    return element?.toUpperCase();
  });
};

getFilteredBooksBy(GeekLibrary, "Jquery");
