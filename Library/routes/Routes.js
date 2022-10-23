const  express=require('express');
const  fs=require('fs');
const  router=express.Router();

const  LibraryRoutes=require('./LibraryRoutes.js');
router.use(LibraryRoutes); 


module.exports=router;