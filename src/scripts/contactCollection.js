const contactCollection = {
    getContactList() {
    return fetch("http://localhost:8088/contacts")
    .then(response => response.json())
    }
    // saveContact (contactToSave) {
    //     fetch("http://localhost:8088/contacts", {
    //     method: "POST",
    //     headers: {
    //         "Content-Type": "application/json"
    //     },
    //     body: JSON.stringify(contactToSave)
    //     });
    // }
}

export default contactCollection;