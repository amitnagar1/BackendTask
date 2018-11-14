
const express = require('express');
const body_parser = require ('body-parser');
const cors = require ('cors');
const uuid = require ('uuid');
const app = express();
//const port = 8888;
app.use(express.json());
app.use(cors()); //For Cross-Origin request !!

var urlstore = []; // Memory storage for Posts/ Link Data

//Initialize memory with sample entry
let sampleurl = {
    id:  1,
    originalUrl: "www.testurl.com",
    hashedUrl: "testhashedurl"
}

urlstore.push(sampleurl);


// API for  performing CRUD operation on URL

// Starting Point
app.get('/',(req,res) => {
    res.send('This is a sample page...');
})


// Access all link data/ Posts present in memory.
// Used to diaplay all the post to UI
app.get('/alllinks',(req,res) => {
    res.send(urlstore);
})


// Post a request for new post by providing OriginalURL
// Hash and id will be automatically generated.
app.post('/v1/links(*)',(req,res) => {
    
    let hashedvalue = Math.random().toString(36).substring(7); //hashed value generation
    let urldata= {
        id: uuid(), // generates unique id
        originalUrl: req.body.originalUrl,
        hashedUrl: hashedvalue
    }
    urlstore.unshift(urldata); // Adding post to memory
    res.send(urldata);
})


/*
To access  hashed url from browser.
corresponding original Url is searched and redirected
*/
app.get('/v1/:hashedUrl', (req, res) => {
   
    let shorturl = req.params.hashedUrl;
    
// the provided hashedUrl will be matched in database.
    let url = urlstore.find(u => u.hashedUrl === shorturl)
/* checks if the user exixts or not */

    if (!url) {
        return res.status(404).send('The given url does not exist...');
    }else{
        let {originalUrl} = url;
       
       var re = new RegExp("^(http|https)://","i");
       var strToCheck = originalUrl;

        if(re.test(strToCheck)){
           res.redirect(301, originalUrl);
        }else{
           res.redirect(301, `http://${originalUrl}`)
        }
        
    };
});


    
// To Update a an entry based on hashedUrl
app.put('/v1/updatelink/:hashedUrl',(req,res)=>{
    let url = urlstore.find(u => u.hashedUrl === req.params.hashedUrl)
    if (!url) {
        return res.status(404).send('The given url does not exist...');
    }else {
        url.originalUrl = req.body.originalUrl;
        
        res.send(url);}
     });

// Delete operation based on hashedUrl
app.delete('/v1/deletelink/:hashedUrl',(req,res)=>{

    let url = urlstore.find(u => u.hashedUrl === req.params.hashedUrl);
    if (!url) {
        return res.status(404).send('The given url does not exist...')
    }else { 
            const index=urlstore.indexOf(url);
            urlstore.splice(index,1);
            res.send(url);
    }
});
            

module.exports = app;
        

