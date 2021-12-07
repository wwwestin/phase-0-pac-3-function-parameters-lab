function introduction (name) {
    return "Hi, my name is " + name + ".";
};

console.log(introduction("Aki"));

/*function logTwoValues(value1, value2) {
    console.log(`The two values are ${value1} and ${value2}.`);
  }

  console.log(logTwoValues(1,2));
  */


function introductionWithLanguage (name, language){
    return "Hi, my name is " + name + " and I am learning to program in " + language + ".";
};

console.log(introductionWithLanguage("Aki", "Ember.js"));


function introductionWithLanguageOptional (name, language) {

    return "Hi, my name is " + name + " and I am learning to program in " + language + ".";
};

console.log(introductionWithLanguage("Aki", language = "Javascript"));


function introductionWithLanguageOptional (name, language) {

    return "Hi, my name is " + name + " and I am learning to program in " + language + ".";
};

console.log(introductionWithLanguage("Gracie", langauge = "Javascript"));




