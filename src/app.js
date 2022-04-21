// contact list, don't change this.
const contactsList = [{
        name: "Togusa",
        phone: "555 555-5555",
        image: "togusa.png",
        email: "togusa@secnine.com",
        ID: "0"
    },
    {
        name: "Tachikoma",
        phone: "555 555-5555",
        image: "tachikoma.png",
        email: "tachikoma@secnine.com",
        ID: "1"
    },
    {
        name: "Saito",
        phone: "555 555-5555",
        image: "saito.png",
        email: "saito@secnine.com",
        ID: "2"
    },
    {
        name: '"major" Motoko',
        phone: "555 555-5555",
        image: "motoko.png",
        email: "motoko@secnine.com",
        ID: "3"
    },
    {
        name: "Ishikawa",
        phone: "555 555-5555",
        image: "ishikawa.png",
        email: "ishikawa@secnine.com",
        ID: "4"
    },
    {
        name: "Batou",
        phone: "555 555-5555",
        image: "batou.png",
        email: "batou@secnine.com",
        ID: "5"
    },
    {
        name: "Aramaki",
        phone: "555 555-5555",
        image: "aramaki.png",
        email: "aramaki@secnine.com",
        ID: "6"
    },
]

const allContact = document.querySelector("#display_all_contacts")
allContact.addEventListener('click', onContactClick)

const singleContact = document.querySelector("#display_single_contact")
singleContact.addEventListener('click', returnToStart)

function onContactClick(evt) {
    const targetDiv = evt.target.closest("div")
    const id = targetDiv.id
    if (id) {
        showContact(contactsList[id])
    }
}

function loadContacts() {
    document.querySelector("#display_single_contact").setAttribute("style", "display: None;")
    for (contact of contactsList) {
        console.log(contact)
        allContact.insertAdjacentHTML("beforeend",
            `<div class="display_all_contacts" id=${contact.ID}>
            <img src="img/${contact.image}" <p>${contact.name}</p>
            </div>`)

    }
}

function showContact(contact) {
    document.querySelector("#display_all_contacts").setAttribute("style", "display: None;")
    document.querySelector("#display_single_contact").setAttribute("style", "display: flex;")
    singleContact.insertAdjacentHTML("beforeend",
        `<div class="individual_contact" id=${contact.ID}><img src="img/${contact.image}"<p>${contact.name}</p></div>`)
}

function returnToStart() {
    console.log('ok')
}

loadContacts()