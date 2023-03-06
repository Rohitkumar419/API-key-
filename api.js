const express = require('express')
const dbConnect = require('./mongodb')
const app = express()

app.use(express.json())

app.get('/ControlTowerSummary' , async (req,res)=> {
  if (!req.query) {
    return res.send({
        error: 'Please Provide an input'
    })
}
  console.log(req.query)
  let data = await dbConnect()
  data = await data.find().toArray()
  console.log(data)
  res.send(data)
});

// app.get('/ActivityInsights' , async (req,res)=> {
//   let data = await dbConnect()
//   data = await data.find().toArray()
//   console.log(data)
//   res.send(data)
// });


// app.post('/' , async (req,res)=> {
//     let data = await dbConnect()
//     let result = await data.insertMany(req.body)
//     res.send(result)
// })

app.listen(3006, () => {
  console.log("app is starting at port 3006")
})
