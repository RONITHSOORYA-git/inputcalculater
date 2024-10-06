import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counterSlice";







const store=configureStore({

     reducer:{
          counterreducer:counterSlice

     }
         
     

    


     })










export default store