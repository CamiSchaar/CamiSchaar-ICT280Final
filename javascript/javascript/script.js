const newsletterForm = document.getElementById("newsletterForm");

if (newsletterForm) {

    newsletterForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const name =
            document.getElementById("name").value;

        const message =
            document.getElementById("message");

        message.textContent =
            "Thank you for subscribing, "
            + name + "!";

    });
}

const contactForm =
    document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const fullname =
            document.getElementById("fullname").value;

        const contactMessage =
            document.getElementById("contactMessage");

        contactMessage.textContent =
            "Thank you for contacting GreenTech Solutions, "
            + fullname + "!";

    });
}

const serviceSearch =
    document.getElementById("serviceSearch");

if (serviceSearch) {

    serviceSearch.addEventListener("keyup", function() {

        const value =
            serviceSearch.value.toLowerCase();

        const results =
            document.getElementById("searchResults");

        results.textContent =
            "Searching for: " + value;

    });
}