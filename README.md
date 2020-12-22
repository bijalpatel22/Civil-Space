# Basic React App

This project fetches news from NewsAPI using React.js. 

## API Fetching

The apis folder contains one file which stores the base URL of the API to be fetched and the key for the API.

## Rendering data

In the components folder there is an App file which has the basic structure of the webpage. SearchBar file has a search bar and consists of the search term being stored and passed to the parent component that is the App component. The NewsList has a prop of all the data fetched by the App component and renders each item using NewsItem component. To beautify the webpage semantic.ui, some inline style and one css file has been used. 

## On going work

The use of hooks to implement this project. 

There is no error in console except one for the props key. Need to figure out if NewsAPI provides a key.

Checking if the search term is empty and validating that input.

Use NewsAPI’s sorting options to sort the article list by popularity.

Adding Previous and Next links to paginate through articles

Adding specific numeric pagination links to jump to a specific page

Display the article’s published date & time in a human readable format (Jan 1, 2018 12:00 PM)


