import contact from "./contact"
import contactCollection from "./contactCollection"

const contactList = {
  getAllContacts() {
      contactCollection.getContactList()
      .then(allContacts => {
        let contactFragment = document.createDocumentFragment()

       allContacts.forEach(contactIteration => {
           let contactHTML2 = contact.contactHTML(contactIteration);
           contactFragment.appendChild(contactHTML2);
       })

       let contactListArticle = document.querySelector(".contactList")
       while (contactListArticle.firstChild) {
           contactListArticle.removeChild(contactListArticle.firstChild)
       }
        contactListArticle.appendChild(contactFragment);




      })
  }
}

export default contactList;