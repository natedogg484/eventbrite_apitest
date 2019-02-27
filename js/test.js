const axios = require('axios')

const token = 'LTV5SOWTS6QBZF72VGDA'
let zip = 19355
let mileage = 10
let queryUrl =
  'https://www.eventbriteapi.com/v3/events/search/?location.address=' +
  zip +
  '&location.within=' +
  mileage +
  'mi&categories=111&token=' +
  token

axios.get(queryUrl).then(function (response) {
  let relevantData = response.data
  let results = relevantData.events
 
 
})
