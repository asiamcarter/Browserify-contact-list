import contact from "./contact"
import contactCollection from "./contactCollection"

const contactList = {
  getAllContacts() {
      contactCollection.getContactList()
      .then(allContact => {

      })
  }
}

export default contactList;