
const {
    allcontactController,
    singleContactController,
    createContactController,
    updateContactController,
    deleteContactController
} = require("../controllers/contactController")




const router = require("express").Router();


// all contact router 
router.get("/",allcontactController )


// create contact router 
router.post("/",createContactController )


// single contact data 
router.get("/:id",singleContactController )

// update router 
router.patch("/:id", updateContactController)


// delete router 
router.delete("/:id",deleteContactController )

module.exports = router;