import contact from "./contact"
import contactCollection from "./contactCollection"

const contactList = {
  getAllContacts() {
      contactCollection.getContactList()
      .then(allContacts => {
          console.log("allContacts:", allContacts)

        let contactFragment = document.createDocumentFragment()

       allContacts.forEach(contactIteration => {
           let contactHTML2 = contact.contactHTML(contactIteration);
           contactFragment.appendChild(contactHTML2);
       })


       let outputArticle = document.querySelector(".output")
       outputArticle.appendChild(contactFragment);



      })
  }
}

export default contactList;