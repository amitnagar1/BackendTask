# BackendTask
A REST API providingURL shortening functionality.

Step 1: Clone the repository.

Step 2: cd repositoryname

Step 3:  npm install

Step 4 npm test

// It will run all basic route test defined in API.

Step 5 npm start 

// npm start will start the localhost server and spawn at port 8888.

Performing CRUD operations.

1. To See all link data/ post present 
   GO to localhost:8888/alllinks
   
2 To make a post request:
  Make a post request to localhost:8888//v1/links
  provide with a originalUrl object {originalUrl: "www.sampleurl.com"}
  
3 To Update a existing URL:
  Make a PUT request with hashedUrl object(Identifier) e.g { hashedUrl: "existinghashedurl"}
  
4 To make a delete request:
   Make a DELETE request with hashedUrl object(Identifier) e.g { hashedUrl: "existinghashedurl"}
