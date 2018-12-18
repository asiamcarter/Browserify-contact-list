const contact = {
    contactHTML(value) {
       let HTML = `
       <article>
        <h3>Name: ${value.name}</h3>
        <p>Phone Number: ${value.number}</p>
        <p>Address: ${value.address}</p>
        </article>
        `
        let test = document.createElement("article")
        test.innerHTML = HTML;
        return test
    // THE TEMPLATE LITERAL WILL RETURN AS NOT A NODE WHEN TRYING TO APPEND TO THE DOM BECAUSE IT IS A STRING...AND NOT A NODE.


    // let contactArticle = document.createElement("article")

    // let contactName = document.createElement("h3")
    // contactName.textContent = value.name
    // let contactNumber = document.createElement("p")
    // contactNumber.textContent = value.number
    // let contactAddress = document.createElement("p")
    // contactAddress.textContent = value.address

    // contactArticle.appendChild(contactName);
    // contactArticle.appendChild(contactNumber);
    // contactArticle.appendChild(contactAddress);
    // return contactArticle;
    }

}

export default contact