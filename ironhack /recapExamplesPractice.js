let newArr = ["cosa", 40 , true, "pepito"];

function theTypeOfEach() {
    newArr.forEach(x => {
        console.log(`the type of ${x} is ${typeof x}`);
    });
}
theTypeOfEach();

console.log("________________________________________");

let user = {
    username: "ironhacker",
    password: "123iron345"
  }

  function getCredentials(someOb) {
      console.log(`Username is: ${someOb.username} and \nthe password is: ${someOb.password}`);
  }
  getCredentials(user);

  console.log("________________________________________");


  let property = {
    owner: {
      firstName: "John",
      lastName: "Doe",
      age: 44
    },
    isForSale: true,
    sqrm: 120,
    address: {
      street: "Happy St",
      number: 123,
      city: "Miami",
      state: "FL",
      country: "US"
    },
    amenities: ["pool", "tennis court", "private parking", "yard"]
  }
  function checkPoperty(someProperty) {
      if(someProperty.isForSale === true){
          console.log(`The owner, ${someProperty.owner.firstName} ${someProperty.owner.lastName} put the home for sale! the property has ${someProperty.amenities.length} amenities.`);
      } else if(someProperty.isForSale === false){
          console.log(`The home in ${someProperty.address.street}${someProperty.address.number} us not for sale.`);
      }
  }
  // descomentar para quitar de venta la casa 
  // property.isForSale = false;
  checkPoperty(property);