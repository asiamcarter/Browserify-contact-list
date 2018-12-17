import contactList from "./contactList"
import contactForm from "./contactForm"



contactForm.createForm();
let saveButton = document.querySelector(".contact_save");
saveButton.addEventListener("click", contactForm.buttonClick);
contactList.getAllContacts();



