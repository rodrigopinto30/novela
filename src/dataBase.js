const mongoose = require('mongoose');

( async ()=>{
    try{
        const db = await mongoose.connect('mongodb+srv://admin:admin@novela.2iwus.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');
        console.log('connect to db with name ', db.connection.name);
    }catch(err){
        console.log(err)
    }
})();
