// Find all resume tiles
const tiles = document.querySelectorAll(".tile");

// Find all modals
const modals = document.querySelectorAll(".modal");

// Find all close buttons
const closeButtons = document.querySelectorAll(".close-modal");


// OPEN MODAL
tiles.forEach(tile => {

    tile.addEventListener("click", () => {

        const modalId = tile.dataset.modal;

        const modal = document.getElementById(modalId);

        if (modal) {
            modal.classList.add("active");

            document.body.style.overflow = "hidden";
        }

    });

});


// CLOSE BUTTON
closeButtons.forEach(button => {

    button.addEventListener("click", () => {

        const modal = button.closest(".modal");

        modal.classList.remove("active");

        document.body.style.overflow = "";

    });

});


// CLICK BACKGROUND TO CLOSE
modals.forEach(modal => {

    modal.addEventListener("click", event => {

        if (event.target === modal) {

            modal.classList.remove("active");

            document.body.style.overflow = "";

        }

    });

});


// ESC KEY TO CLOSE
document.addEventListener("keydown", event => {

    if (event.key === "Escape") {

        modals.forEach(modal => {
            modal.classList.remove("active");
        });

        document.body.style.overflow = "";

    }

});


// PROJECT MODAL LINK
document.querySelectorAll(".close-and-scroll")
    .forEach(link => {

        link.addEventListener("click", () => {

            modals.forEach(modal => {
                modal.classList.remove("active");
            });

            document.body.style.overflow = "";

        });

    });
