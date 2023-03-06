const dbConnect = require('./mongodb');

const insertData=async ()=>{
   let data = await dbConnect();
  let result = await data.insertMany(
      [
          {Value:'1',Colour:'green'},
          {Value:'2',Colour:'green'},
          {Value:'3',Colour:'green'},
          {Value:'4'},
          {Value:'5',Colour:'green'},
          {Value:'6',Colour:'red'},
          {Value:'8',Colour:'red'},
          {Value:'9',Colour:'green'},
          {Value:'10',Colour:'red'},
          {Value:'11'},
          {Value:'12',Colour:'green'},
          {Value:'13',Colour:'yellow'},
          {Value:'14',Colour:'green'},
          {Value:'15',Colour:'green'},
          {Value:'16',Colour:'green'},
          {Value:'17',Colour:'yellow'},
          {Value:'18',Colour:'yellow'},
         
      ]
  )
  if(result.acknowledged)
  {
      console.warn("data is inserted")
  }
}

insertData();