const myObject = {
    property: 'Value!',
    otherProperty: 77,
    "obnoxious property": function() {
      // do stuff!
    }
  };
  const blooo = 'property';
  const anotherOne = 'property';

myObject.blooo; // this gives us 'undefined' because it's looking for a property named 'variable' in our object

myObject[blooo]; // this is equivalent to myObject['property'] and returns 'Value!'

function zeeExperimentOne(color){
    const dude = function zeeExperimentTwo(color){
        console.log(dude(color));
    }
    

}

console.log(zeeExperimentOne('red'))


  console.log(myObject.property);
  console.log(myObject[blooo]);
  console.log(`this is another ${anotherOne} and another ${myObject[blooo]}`);
