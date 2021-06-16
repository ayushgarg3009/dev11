
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://Ayush:ayushiitb@30@cluster0.2utsm.mongodb.net/Resume_Builder?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("Resume_Builder").collection("resumes");
  
  collection.find({}).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    // db.close();
  });

  // perform actions on the collection object
  client.close();
});


// MongoClient.connect(url, function(err, db){
//   if(err) throw err;
//   var dbo =db.db("pep-db");
//   var resumes = [
//     {name: 'Resume1', skinCd: 'skin1'},
//     {name: 'Resume2', skinCd: 'skin2'},
//     {name: 'Resume3', skinCd: 'skin3'}
//   ];
//   dbo.collection("resumes")
// })


// dbo.collection("customers").find({}).toArray(function(err, result) {
//   if (err) throw err;
//   console.log(result);
//   db.close();
// });
