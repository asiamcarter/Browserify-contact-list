import contact from "./contact"
import contactCollection from "./contactCollection"

const contactList = {
  getAllContacts() {
      contactCollection.getContactList()
      .then(allContacts => {
       let contactFragment = document.createDocumentFragment();

       allContacts.forEach(contactIteration => {
           let contactHTML = contact.contactHTML(contactIteration);
           contactFragment.appendChild(contactHTML);
       })

       let outputArticle = document.querySelector(".output");
       outputArticle.appendChild(contactFragment);



      })
  }
}

export default contactList;