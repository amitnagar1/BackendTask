# BackendTask
A REST API providingURL shortening functionality.

Step 1: Clone the repository.

Step 2: cd BackendTask (repository)

Step 3:  npm install

Step 4: npm test

// It will run all basic route test defined in API.

Step 5: npm start 

// npm start will start the localhost server and spawn at port 8888.

/* Getting your docker image*/
1. Pull docker image:
      $ docker pull amitnagar/backendtask

2. Running your docker container:
      $ docker container run -d -p 8081:8888 backendtask
/ ------------------------------------------- /      

Performing CRUD operations.

1. To See all link data/post present 
   GO to localhost:8888/alllinks
   
2 To make a post request:
  Make a post request to localhost:8888/v1/links
  provide with a originalUrl object {originalUrl: "www.sampleurl.com"}
  
3 To Update a existing URL:
  Make a PUT request to localhost:8888/v1/updatelink/hashedUrl with hashedUrl object(Identifier) e.g { hashedUrl: "existinghashedurl"}
  
4 To make a delete request:
   Make a DELETE request to localhost:8888/v1/deletelink/:hashedUrl with hashedUrl object(Identifier) e.g { hashedUrl: "existinghashedurl"}
