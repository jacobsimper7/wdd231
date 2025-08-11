// Fetch products from products.json and populate select
document.addEventListener("DOMContentLoaded", () => {
    const select = document.querySelector('select[name="product"]');
    select.innerHTML = '<option value="">Please Select &#9662;</option>';

    fetch('data/products.json')
        .then(response => response.json())
        .then(data => {
            // If products.json is an array
            const products = Array.isArray(data) ? data : data.products;
            products.forEach(product => {
                const option = document.createElement("option");
                option.value = product.id || product.name; // Use id if available, else name
                option.textContent = product.name;
                select.appendChild(option);
            });
        });
});