import express from "express"

const router = express.Router();

router.get("/",(req,res)=>{
    res.send("Helllo , this is auth endpoint");

})
router.get("/register",(req,res)=>{
    res.send("Helllo , this is register auth endpoint");

})


export default router