// Function to add items to the list
function addItemsToList() {
    const list = document.getElementById("infi-list");
    const totalItems = list.children.length;

    // Adding 2 new items at the end of the list
    for (let i = totalItems + 1; i <= totalItems + 2; i++) {
        const li = document.createElement("li");
        li.textContent = `Item ${i}`;
        list.appendChild(li);
    }

	addItemsToList()
}

// Function to check if the user has scrolled to the bottom of the list container
function checkScroll() {
    const mainContainer = document.querySelector('main');
    const list = document.getElementById("infi-list");

    // Check if the main container's scroll position is at the bottom
    // if (mainContainer.scrollTop + mainContainer.clientHeight >= list.offsetHeight) {
        addItemsToList();
    // }
}

// Add the initial 10 items to the list
for (let i = 1; i <= 10; i++) {
    const li = document.createElement("li");
    li.textContent = `Item ${i}`;
    document.getElementById("infi-list").appendChild(li);
}

// Listen for the scroll event on the main container
document.querySelector('main').addEventListener("scroll", checkScroll());
