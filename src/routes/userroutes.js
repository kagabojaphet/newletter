import express from "express";
import usercontroller from "../controller/usercontroller";

const router=express.Router();

router.post("/",usercontroller.createUser)

export default router