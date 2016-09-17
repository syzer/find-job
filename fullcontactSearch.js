/**
 * Using fullcontact to mine the data about the person based on email
 */
console.log(fullcontactSearch("syzer3@gmail.com"));

function fullcontactSearch(email) {

  var fullcontact = require('fullcontact').createClient('');
  fullcontact.person.email(email, function (err, data) {
    //console.log(data);
    return data;
  });
}

//curl -H "X-FullContact-APIKey: ef9002ff700b7a" https://api.fullcontact.com/v2/person.json?email=syzer3%40gmail.com

//ef9002ff700b7a
