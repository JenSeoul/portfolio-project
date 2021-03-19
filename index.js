const express = require('express');
const path = require('path');

const app = express();

app.use('/', express.static('public'));

app.get('/about', (req,res)=>{
       res.sendFile(path.join(__dirname,'/public','about.html'));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Now server is running on port ${PORT}`))