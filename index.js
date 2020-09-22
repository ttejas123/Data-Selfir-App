const express = require('express');
const Datastore = require('nedb');
const path = require('path');
const pathToData = path.resolve(__dirname, "db/database")
const database = new Datastore({ filename: pathToData});
database.loadDatabase();
const app = express();
app.listen(4000, () => console.log("listening port 4000"));
app.use(express.static('public'));
app.use(express.json({limit:'1mb'}));


app.get('/api', (req,res)=>{
	database.find({},(err, data) => {
        if(err){
        	res.end();
        	return;
        }
    	res.json(data);
	});
});

app.post('/api',(req,res) =>{
	const timestamp = Date.now();
	console.log('I got Request!');
	const data = req.body;  //data variable is now taking all values of body
	data.timestamp = timestamp;  //we are attaching timestamp to data via this type "data.timestamp"
	//database.insert(data);this data is sent to the database whcich we create
    database.insert(data, (err, docs)=>{
    	if(err){
    		return err;
    	}
    	//this data is get send back to client console	
	    res.json(data);

    });


});