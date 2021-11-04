const express = require("express");
const { fake } = require("faker");
const faker = require("faker");
const app = express();
app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );

class User{
    constructor(){
        this.id = faker.datatype.number()
        this.firstName = faker.name.firstName()
        this.lastName = faker.name.lastName()
        this.phoneNumber = faker.phone.phoneNumber()
        this.email = faker.internet.email()
        this.password = faker.datatype.number()
    }
}

class Company{
    constructor(){
        this.id = faker.datatype.number()
        this.name = faker.company.companyName()
        this.address = {
            street:faker.address.streetAddress(),
            city:faker.address.state(),
            state:faker.address.state(),
            zipCode:faker.address.zipCode(),
            country:faker.address.country()
        }
    }
}




//Get
app.get("/api/users/new", (req, res) => {
    const user = new User;
    res.json( user );
    res.json( { status: "ok" } );
  });


  //Get
app.get("/api/companies/new", (req, res) => {
    const company = new Company;
    res.json( company );
    res.json( { status: "ok" } );
  });



  const server = app.listen(8000, () =>
  console.log(`Server is locked and loaded on port ${server.address().port}!`)
);