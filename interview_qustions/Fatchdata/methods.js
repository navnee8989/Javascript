document.addEventListener("DOMContentLoaded", async () => {
    const cardsContainer = document.querySelector(".profile");
    cardsContainer.textContent = '';
    const button = document.getElementById("button");

    button.addEventListener("click", fetchData);
    const usersArray = [];

    async function fetchData() {
        try {
            const response = await fetch("https://jsonplaceholder.typicode.com/users");

            if (response.status !== 200) {
                throw new Error("Server Has not Started yet");
            }

            const data = await response.json();
            usersArray.push(...data);

            // Take only the first 10 items
            const mainData = usersArray.slice(0, 10);
            mainData.forEach(apiData => {
                const cardElement = createCard(apiData);
                cardsContainer.appendChild(cardElement);
            });

            Toastify({
                text: "Data fetched successfully!",
                duration: 3000,
                newWindow: true,
                close: true,
                gravity: "top", // top, bottom, left, right
                position: "center", // center, left, right
                stopOnFocus: true,
            }).showToast();
        } catch (error) {
            Toastify({
                text: `Error: ${error.message}`,
                duration: 3000,
                newWindow: true,
                close: true,
                gravity: "top",
                position: "center",
                stopOnFocus: true,
            }).showToast();
        }
    }

    function createCard(apiData) {
        const cardContainer = document.createElement('div');
        cardContainer.classList.add("w-full", "m-2", "card");

        const cardbody = document.createElement('div');
        cardbody.classList.add("card-body");

        const idElement = document.createElement('span');
        idElement.textContent = `ID ${apiData.id}`;
        cardbody.appendChild(idElement);

        const nameElement = document.createElement('p');
        nameElement.textContent = `Name: ${apiData.name}`;
        cardbody.appendChild(nameElement);

        const usernameElement = document.createElement('p');
        usernameElement.textContent = `Username: ${apiData.username}`;
        cardbody.appendChild(usernameElement);

        const emailElement = document.createElement('p');
        emailElement.textContent = `Email: ${apiData.email}`;
        cardbody.appendChild(emailElement);

        cardContainer.appendChild(cardbody);
        return cardContainer;
    }
});