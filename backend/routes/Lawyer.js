import express from "express";
import { deleteLawyer, createLawyer, updateLawyer, getLawyer, getLawyers, countByCity, countByType, getLawyerRooms, topLawyers, addReview } from "../controllers/Lawyer.js";
import { verifyAdmin } from "../utils/verifyToken.js"

const router = express.Router();

//create
//   router.post("/",verifyAdmin,createLawyer);
router.post("/", createLawyer);


//update
//   router.put("/:id",verifyAdmin,updateLawyer);
router.put("/:id", updateLawyer);

//delete
//  router.delete("/:id",verifyAdmin,deleteLawyer);
router.delete("/:id", deleteLawyer);

//get
router.get("/find/:id", getLawyer);

//get all

router.get("/", getLawyers);
router.get("/topLawyers", topLawyers);

router.post("/reviews/:id", addReview);



router.get("/countByCity", countByCity);
router.get("/countByType", countByType);
router.get("/room/:id", getLawyerRooms);

export default router