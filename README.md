# Covid19 Cases App

This is a simple AngularJS application that fetches COVID-19 data from the Indian Ministry of Health and Family Welfare website and displays it on a web page.

The HTML code contains a div with an ng-app directive, which initializes the AngularJS application. The ng-controller directive is used to bind the HTML to the controller, myctrl.

The myctrl controller is defined in the index.js file. It fetches data from the URL using an HTTP request and updates the data displayed in the HTML. The controller defines a few variables and methods that are used in the HTML code.

The HTML code displays some information about COVID-19 and also has three cards that display the total confirmed cases, recovered cases, and deaths in India. There is also a search box that allows the user to search for COVID-19 data for a specific state in India. When the user enters a state name, the state data is fetched from the API and displayed in a new row of cards.

## The following external libraries are included in the file:

Bootstrap CSS and JS (version 5)

AngularJS (version 1.8.2)
