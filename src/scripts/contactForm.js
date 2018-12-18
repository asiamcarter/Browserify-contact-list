import contactCollection from "./contactCollection"
import contactList from "./contactList";


const contactForm = {
    createForm() {
        let inputForm =
        `
        <article>
            <fieldset>
                <label for="contact_name">Name:</label>
                <input id="contact_name" name="contact_name" type="text" autofocus />
            </fieldset>
            <fieldset>
                <label for="contact_number">Number:</label>
                <input id="contact_number" name="contact_number" type="text" autofocus />
            </fieldset>
            <fieldset>
                <label for="contact_address">Address:</label>
                <input id="contact_address" name="contact_address" type="text" autofocus />
            </fieldset>
            <button class="btn contact_save">Save Contact</button>
        </article>

        `
        let displayContainer = document.querySelector(".output");
        displayContainer.innerHTML = inputForm;

    },

    buttonClick() {
        const name = document.querySelector("#contact_name").value;
        const number = document.querySelector("#contact_number").value;
        const address = document.querySelector("#contact_address").value;

        const contactObject = {
            name: name,
            number: number,
            address: address
        }

    contactCollection.saveContact(contactObject);
    location.reload(true);


    }

};

export default contactForm;