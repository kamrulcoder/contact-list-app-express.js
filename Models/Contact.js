class Contacts {
    constructor() {
        this.contacts = []
    }

    // all data function 
    allContactData() {
        return this.contacts;
    }

    // single data function 
    singleContactData(id) {
        return this.contacts.find(contact => contact.id === id)
    }

    // create data function 
    createContactData(contact) {
        contact.id = this.contacts.length + 1
        this.contacts.push(contact)
        return contact;
    }

    // update data function 
    updateContactData(id, updateData ){
        let index = this.contacts.findIndex(contact => contact.id === id )
        this.contacts[index].name = updateData.name  ||  this.contacts.name
        this.contacts[index].phone = updateData.phone  ||  this.contacts.phone
        this.contacts[index].email = updateData.email  ||  this.contacts.email
        return this.contacts[index]
    }

    // delete data function 
    deleteContactData(id) {
        const index  = this.contacts.findIndex(contact => contact.id === id )
        let deleteData = this.contacts[index]
        this.contacts =  this.contacts.filter(contact => contact.id !== id );
        return deleteData;
    }
}

module.exports = new Contacts();