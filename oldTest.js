$('#searchBtn').on('click', function (event) {
  event.preventDefault()
  var token = 'LTV5SOWTS6QBZF72VGDA'
  var zip = $('#zipCodeInput').val()
  console.log(zip)
  var mileage = $('#mileageInput').val()
  var queryURL =
    'https://www.eventbriteapi.com/v3/events/search/?location.address=' +
    zip +
    '&location.within=' +
    mileage +
    'mi&categories=111&token=' +
    token

  $.ajax({
    url: queryURL,
    method: 'GET'
  })
    // We store all of the retrieved data inside of an object called "response"
    .then(function (response) {
      // Log the resulting object
      let results = response.events

      for (var i = 0; i < results.length; i++) {
        var name = results[i].name.text
        var description = results[i].description.text
        var start = results[i].start.local
        var end = results[i].end.local
        var url = results[i].url

        let infoCard = $("<div class ='card'>")
        let eventName = $("<div class='card-header'>").text(name)
        let infoCardBody = $("<div class='card-body'>")
        let eventDescription = $("<p class='card-text'>").text(
          'Description: ' + description
        )
        let eventStart = $("<p class='card-text'>").text('Start: ' + start)
        let eventEnd = $("<p class='card-text'>").text('End: ' + end)
        let eventLink = $('<a>').text('Tickets and Additional Details')

        eventLink.attr('href', url)

        infoCard.append(eventName, infoCardBody)
        infoCardBody.append(eventDescription, eventStart, eventEnd, eventLink)

        $('#event-info').prepend(infoCard)
      }
    })
})
