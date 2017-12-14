require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const massive = require('massive');

const app = express();
app.use( bodyParser.json() );
app.use( cors() );

massive(process.env.CONNECTION_STRING).then(db => {
    app.set('db', db)

    // db.new_planes().then(planes => {console.log(planes)}).catch(err => console.error(err))
    
    db.get_planes().then(planes => {console.log(planes)}).catch(err => console.error(err))

}).catch(err => console.error(err))



const port = process.env.PORT || 3000
app.listen( port , () => { console.log(`Server listening on port ${port}`); } );

