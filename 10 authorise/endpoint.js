var express=require('express')
var firebase=require('firebase')
var app=express()
app.use(express.json())
app.listen(2000,()=>{
    console.log("server started")
})
const firebaseConfig = {
    apiKey: "AIzaSyAcVRHaCwFh-fDBr9fsOO-4nKb86D2KjrA",
    authDomain: "myproject-be9c0.firebaseapp.com",
    projectId: "myproject-be9c0",
    storageBucket: "myproject-be9c0.appspot.com",
    messagingSenderId: "427868126620",
    appId: "1:427868126620:web:62260f8e01cba769305c59"
  };
  firebase.initializeApp(firebaseConfig)
  dbref=firebase.database().ref("student")
  app.get("/stu",(req,res)=>{
      dbref.on('value',(snap)=>{
          res.send(snap.val())
      })
  })

  app.delete("/del/:id",(req,res)=>{
      var id=req.params.id
      dbref.child(id).remove()
      res.send("deleted")
  })
  app.put("/update/:id",(req,res)=>{
      var id=req.params.id
      console.log(req.body)
      dbref.child(id).update({
            "name":req.body.name
      })
      res.send("updated")
  })
  app.post("/addStudent",(req,res)=>{
      dbref.child(req.body.id).set(req.body,(data)=>{
          res.send("inserted")
      })
  })




















// var express = require('express')
// var jwt = require('jsonwebtoken')
// var app = express()
// app.get('/api', (req, res) => {
// res.json({
// message: "Welcome to API"
// })
// })
// app.post('/api/posts', verifyToken, (req, res) => {
// jwt.verify(req.token, 'secretkey', (err, authData) => {
// if (err) { res.sendStatus(403) }
// else {
// res.json({
// message: "Post created ... ",
// authData
// }) } }) })
 
// app.post('/api/login',(req, res) => {
// const user = {
// id: 1205,
// name: "anjani",
// email: "anjanisree18@gmail.com"
// }
// jwt.sign({ user }, "secretkey", (err, token) => {
// res.json({
// token
// }) })
// })
 
// function verifyToken(req, res, next) {
// const bearerHeader = req.headers['authorization']
// if (typeof bearerHeader !== 'undefined') {
// const bearer = bearerHeader.split(' ');
// const bearerToken = bearer[1];
// req.token = bearerToken;
// next()
// } 
// else 
// {
// res.sendStatus(403)
// }
// }
// app.listen(1258, () => console.log("Server started "))