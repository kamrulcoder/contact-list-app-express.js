
const contacts = require("../Models/Contact");
// all  contact controller 

exports.allcontactController = (req, res) => {
    res.json(contacts.allContactData());
}

exports.createContactController = (req, res) => {
    let {name,phone,email} = req.body;
    let contact = contacts.createContactData({
        name,
        phone,
        email
    })
    res.json(contact)
}

exports.singleContactController = (req, res) => {
    
    let  {id}  = req.params;
    id = parseInt(id)
    let contact = contacts.singleContactData(id)
    res.json(contact)

}

exports.updateContactController =  (req, res) => {
    const {id}  = req.params;
    res.send("contact patch  router  "+id);
}

exports.updateContactController = (req, res) => {
    let {id} = req.params;
    id =  parseInt(id) 
    const {name, phone, email } = req.body;
    let contact = contacts.updateContactData(id, {
        name, phone,email
    })
    res.json(contact)
}

exports.deleteContactController = (req, res) => {
    let  {id}  = req.params;
    id = parseInt(id)
    let contact = contacts.deleteContactData(id)
    res.json(contact)
}
