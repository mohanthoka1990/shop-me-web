// let mainDiv = document.getElementById("mainDiv");
// let inputEl = document.getElementById("input");
// let searchBtn = document.getElementById("searchBtn");
// let outputContainer = document.getElementById("outputContainer");

// let currentPage = 1;
// const itemsPerPage = 6;
// let data = [];

// async function fetchData() {
//     try {
//         let url = 'https://fakestoreapi.com/products';
//         let response = await fetch(url);
//         data = await response.json();
//         renderPage();
//     } catch (error) {
//         console.error('Error fetching data:', error);
//     }
// }

// function renderPage() {
//     outputContainer.innerHTML = '';

//     let category = inputEl.value.toLowerCase();
//     let filteredData = data.filter(item => item.category.toLowerCase().includes(category));

//     let startIndex = (currentPage - 1) * itemsPerPage;
//     let endIndex = currentPage * itemsPerPage;
//     let currentPageData = filteredData.slice(startIndex, endIndex);

//     currentPageData.forEach(item => {
//         let productDiv = document.createElement("div");
//         productDiv.classList.add("bg-info", "d-flex", "flex-column", "justify-content-around", "rounded-3", "m-3", "p-3", "w-25", "gap-3");

//         let imgDiv = document.createElement("div");
//         imgDiv.classList.add("d-flex", "justify-content-center");
//         productDiv.appendChild(imgDiv);

//         let imageEl = document.createElement("img");
//         imageEl.style.width = "300px";
//         imageEl.style.height = "300px";
//         imageEl.classList.add("rounded-3");
//         imageEl.src = item.image;
//         imgDiv.appendChild(imageEl);

//         let cardContent = document.createElement("div");
//         productDiv.appendChild(cardContent);

//         let titleEl = document.createElement("h6");
//         titleEl.classList.add("heading");
//         titleEl.textContent = item.title;
//         cardContent.appendChild(titleEl);

//         let descriptionEl = document.createElement("p");
//         descriptionEl.classList.add("w-100", "text-left", "paragraph");
//         descriptionEl.textContent = item.description;
//         cardContent.appendChild(descriptionEl);

//         let priceAndRatind = document.createElement("div");
//         productDiv.appendChild(priceAndRatind);

//         let priceEl = document.createElement("h5");
//         priceEl.textContent = `Price: $${item.price}`;
//         priceEl.classList.add("text-left");
//         priceAndRatind.appendChild(priceEl);

//         let ratingEl = document.createElement("h5");
//         ratingEl.textContent = `Rating: ${item.rating.rate}`;
//         ratingEl.classList.add("text-left");
//         priceAndRatind.appendChild(ratingEl);

//         let viewMore = document.createElement("button");
//         viewMore.textContent = "View More";
//         viewMore.classList.add("btn", "btn-primary");
//         priceAndRatind.appendChild(viewMore);

//         outputContainer.appendChild(productDiv);
//     });

//     // Disable/Enable pagination buttons based on the current page
//     document.getElementById("prevBtn").disabled = currentPage === 1;
//     document.getElementById("nextBtn").disabled = endIndex >= filteredData.length;
// }

// function nextPage() {
//     currentPage++;
//     renderPage();
// }

// function previousPage() {
//     if (currentPage > 1) {
//         currentPage--;
//         renderPage();
//     }
// }

// searchBtn.addEventListener("click", () => {
//     currentPage = 1;
//     renderPage();
// });


// // Fetch the data when the page loads
// fetchData();



let mainDiv = document.getElementById("mainDiv");
let inputEl = document.getElementById("input");
let searchBtn = document.getElementById("searchBtn");
let outputContainer = document.getElementById("outputContainer");

// Create popup elements and add to the document
let popup = document.createElement("div");
popup.id = "popup";
popup.style.display = "none"; // Initially hidden
popup.style.position = "fixed";
popup.style.top = "0";
popup.style.left = "0";
popup.style.width = "100%";
popup.style.height = "100%";
popup.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
popup.style.zIndex = "1000";
popup.style.justifyContent = "center";
popup.style.alignItems = "center";
popup.style.textAlign = "center";
popup.style.padding = "20px";
document.body.appendChild(popup);

let popupContent = document.createElement("div");
popupContent.style.backgroundColor = "#fff";
popupContent.style.padding = "50px";
popupContent.style.borderRadius = "10px";
popupContent.style.position = "relative";
popupContent.style.width = "500px";
popupContent.style.backgroundColor = "#ebded5";
popup.appendChild(popupContent);

let closeBtn = document.createElement("button");
closeBtn.textContent = "x";
closeBtn.style.position = "absolute";
closeBtn.style.top = "10px";
closeBtn.style.right = "10px";
closeBtn.style.border = "none";
closeBtn.style.backgroundColor = "transparent";
closeBtn.style.fontSize = "24px";
popupContent.appendChild(closeBtn);

closeBtn.addEventListener("click", () => {
    popup.style.display = "none";
});

let currentPage = 1;
const itemsPerPage = 6;
let data = [];

async function fetchData() {
    try {
        let url = 'https://fakestoreapi.com/products';
        let response = await fetch(url);
        data = await response.json();
        renderPage();
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

function renderPage() {
    outputContainer.innerHTML = '';

    let category = inputEl.value.toLowerCase();
    let filteredData = data.filter(item => item.category.toLowerCase().includes(category));

    let startIndex = (currentPage - 1) * itemsPerPage;
    let endIndex = currentPage * itemsPerPage;
    let currentPageData = filteredData.slice(startIndex, endIndex);

    currentPageData.forEach(item => {
        let productDiv = document.createElement("div");
        productDiv.classList.add("bg-info", "d-flex", "flex-column", "justify-content-around", "rounded-3", "m-3", "p-3", "w-25", "gap-3");

        let imgDiv = document.createElement("div");
        imgDiv.classList.add("d-flex", "justify-content-center");
        productDiv.appendChild(imgDiv);

        let imageEl = document.createElement("img");
        imageEl.style.width = "300px";
        imageEl.style.height = "300px";
        imageEl.classList.add("rounded-3");
        imageEl.src = item.image;
        imgDiv.appendChild(imageEl);

        let cardContent = document.createElement("div");
        productDiv.appendChild(cardContent);

        let titleEl = document.createElement("h6");
        titleEl.classList.add("heading");
        titleEl.textContent = item.title;
        cardContent.appendChild(titleEl);

        let descriptionEl = document.createElement("p");
        descriptionEl.classList.add("w-100", "text-left", "paragraph");
        descriptionEl.textContent = item.description;
        cardContent.appendChild(descriptionEl);

        let priceAndRating = document.createElement("div");
        productDiv.appendChild(priceAndRating);

        let priceEl = document.createElement("h5");
        priceEl.textContent = `Price: $${item.price}`;
        priceEl.classList.add("text-left");
        priceAndRating.appendChild(priceEl);

        let ratingEl = document.createElement("h5");
        ratingEl.textContent = `Rating: ${item.rating.rate}`;
        ratingEl.classList.add("text-left");
        priceAndRating.appendChild(ratingEl);

        let viewMore = document.createElement("button");
        viewMore.textContent = "View More";
        viewMore.classList.add("btn", "btn-primary");
        viewMore.addEventListener("click", () => {
            showPopup(item);
        });
        priceAndRating.appendChild(viewMore);

        outputContainer.appendChild(productDiv);
    });

    // Disable/Enable pagination buttons based on the current page
    document.getElementById("prevBtn").disabled = currentPage === 1;
    document.getElementById("nextBtn").disabled = endIndex >= filteredData.length;
}

function showPopup(item) {
    popupContent.innerHTML = `
        <button id="closePopup" style="position: absolute; top: 10px; right: 10px; border: none; background: transparent; font-size: 24px;">x</button>
        <h2>${item.title}</h2>
        <img src="${item.image}" style="width: 150px; height: 150px;" class="rounded-3">
        <p>${item.description}</p>
        <h4>Price: $${item.price}</h4>
        <h4>Rating: ${item.rating.rate}</h4>
    `;
    document.getElementById("closePopup").addEventListener("click", () => {
        popup.style.display = "none";
    });
    popup.style.display = "flex";
}

function nextPage() {
    currentPage++;
    renderPage();
}

function previousPage() {
    if (currentPage > 1) {
        currentPage--;
        renderPage();
    }
}

searchBtn.addEventListener("click", () => {
    currentPage = 1;
    renderPage();
});

// Fetch the data when the page loads
fetchData();

