fetch("resources/products.json")
    .then((response) => response.json())
    .then((products) => {
        const container = document.getElementById("productContainer");

        products.forEach((product) => {
            const card = document.createElement("div");
            card.className = "card";

            card.innerHTML = `
                <h3>PC</h3>
                <p><strong>CPU:</strong> ${product.cpu}</p>
                <p><strong>GPU:</strong> ${product.gpu}</p>
                <p><strong>RAM:</strong> ${product.ram}</p>
                <p class="price">$${product.price}</p>
                <button>Add to cart</button>
            `;
            container.appendChild(card);
        });
    });
document.addEventListener("DOMContentLoaded", () => {
    const themeToggle = document.getElementById("theme-toggle");
    const header = document.querySelector("header");
    themeToggle.addEventListener("change", () => {
        if (themeToggle.checked) {
            header.style.backgroundColor = "#222";
        } else {
            header.style.backgroundColor = "";
            header.style.color = "";
        }
    });
});

const fontSizeSelector = document.getElementById("sizeSelector");

fontSizeSelector.addEventListener("change", () => {
    const scale = parseInt(fontSizeSelector.value, 10);
    const newFontSize = 16 + scale;
    document.documentElement.style.setProperty("--base-font-size", `${newFontSize}px`);
});
