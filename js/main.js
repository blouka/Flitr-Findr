// use jQuery to select the html elements we're going to manipulate
var homeGoButton = $('#home button')
var homeDropdown = $('#home select')
var homeSection = $('#home')
var resultsSection = $('#results')
var resultsBackButton = $('#results .back')
var resultsToggleButton = $('#results .toggle')
var resultsOL = $('#results OL')
var resultsMap = $('#map')
var detailsInfo = $('#details #info')
var detailsBackButton = $('#details .back')
var detailsSection = $('#details')



// tell the button to do something when we click it
homeGoButton.click( function(){
    
    // capture the user chosen option
    var selectedOption = homeDropdown.val();
    console.log("you picked " + selectedOption)
    
    // filter+sort people by user selection
    var resultsList = filterAndSortList(peopleList, selectedOption);
    console.log(resultsList);
    
    
    
    showList(resultsList, resultsOL);

    
    function showDetails (data, interfaceElement) 
{
  var detailsHTML = makeDetailsHTML(data)
  interfaceElement.html(detailsHTML)
}
    
    $('#results li').click( function() {
        // grab the id from the clicked item
        var resultId = $(this).attr('id')
        // use the id to get the right data
        var resultData = resultsList[resultId]
        console.log(resultData)
        // call the function showDetails()
        showDetails(resultData, detailsInfo)
        // show the details!
        resultsSection.hide()
        detailsSection.show()
    })

    
    
    homeSection.hide()
    resultsSection.show()
})    


resultsBackButton.click( function(){
    resultsSection.hide()
    homeSection.show()
    
})

detailsBackButton.click( function(){
    detailsSection.hide()
    resultsSection.show()
    
})

// button to switch between list ad map
resultsToggleButton.click( function() {
    
    console.log('clicked resultsToggleButton')
    
    // find out which element is currently visable
    // is the list visable
    var listDisplay = resultsOL.css('display') 
    if (listDisplay == 'block') isListVisable = true
    else isListVisable = false
    
    console.log(isListVisable)
    
    console.log(listDisplay)
    // if the list is visable
    if (isListVisable)
    {
       // we want to show the map and hide the list
        resultsMap.show()
        map.resize()
        resultsOL.hide()
        resultsToggleButton.html('List')
        // change the button text to say "list"
        
    }
    else
    {
      // we want to show the list and hide the map
        resultsOL.show()
        resultsMap.hide()
        resultsToggleButton.html('Map')
        // change the button text to say "Map"
        
        
    }
    
   
})