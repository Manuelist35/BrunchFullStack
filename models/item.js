const mongoose = require("mongoose");

const itemSchema = mongoose.Schema({

   name : {
       type : String ,
       required : true
   },
   price : {
       type : Number ,
       required : true
   },
   itemDescription : {
       type : String ,
       required : true
   },
   itemImageUrl : {
       type  : String ,
       required : true
   }
})

const itemModel = mongoose.model('items', itemSchema)

module.exports = itemModel