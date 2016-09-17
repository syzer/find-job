/**
 * Using fullcontact to mine the data about the person based on email
 */
const _ = require('lodash')
const fullcontact = require('fullcontact').createClient('ef9002ff700b7a')

//curl -H "X-FullContact-APIKey: ef9002ff700b7a" https://api.fullcontact.com/v2/person.json?email=syzer3%40gmail.com
function fullcontactSearch(email = "syzer3@gmail.com") {

  let defaultFootprint = {
    scores: 0,
    topics: ['Computers', 'HTML']
  }
  return new Promise((res, rej) => {
    fullcontact.person.email(email, (err, d) => {
      if (err) {
        console.warn(err)
        return res(d.defaultFootprint)
      }

      if (!d.digitalFootprint) {
        console.warn(`${email} no footprint`)
        return res(defaultFootprint)
      }

      res({
          scores: d.digitalFootprint.scores[0],
          topics: _.sortedUniq(d.digitalFootprint.topics.map(t => t.value))

      })
    })
  })
}

// => Promise
export default fullcontactSearch
