// Array of product objects (Your dynamic data source)
const products = [
    {
        id: 1,
        name: "RIMS",
        price: "R2999,99",
        image: "images/porsche 3.jpg",
        description: "The tires are punch resistant and are toughened to travel on mountainous areas."
    },
    {
        id: 2,
        name: "dunlop continental tires",
        price: "R5999,99",
        image: "images/porsche 1.jpg",
        description: "These car seats are designed to provide optimal lumbar support, adjustable back, and headrests."
    },
    {
        id: 3,
        name: "911 SPOILER",
        price: "R16 999,99",
        image: "images/porsche 4.jpg",
        description: "These car sprays have a shiny and thick element after they are applied on vehicles."
    }
];

// Function to dynamically load HTML content based on the array
function renderProducts(items) {
    const container = document.getElementById('dynamicProductContainer');
    if (!container) return; // Safety check

    container.innerHTML = ''; // Clear container before rendering

    if (items.length === 0) {
        container.innerHTML = '<p style="color: white; font-size: 18px; text-align: center; width: 100%;">No products found matching your search.</p>';
        return;
    }

    // Loop through the items and build HTML dynamically with explicit white text styling
    let htmlContent = '<table border="0" cellpadding="15" cellspacing="0"><tr>';
    
    items.forEach(item => {
        htmlContent += `
            <td align="center" valign="top" style="max-width: 300px; color: white; font-family: sans-serif;">
                <div class="images">
                    <a href="${item.image}" data-lightbox="my gallery" data-title="${item.name}">
                        <img src="${item.image}" alt="${item.name}" width="250" style="border: 1px solid #333; display: block; margin-bottom: 10px;">
                    </a>
                    <b style="color: white; font-size: 18px; text-transform: uppercase;">${item.name}</b><br>
                    <span style="color: #00ff00; font-weight: bold;">PRICE: ${item.price}</span><br>
                    <p style="font-size: 14px; color: #cccccc; line-height: 1.4; margin-top: 8px;">${item.description}</p>
                </div>
            </td>
        `;
    });

    htmlContent += '</tr></table>';
    container.innerHTML = htmlContent;
}

// Run when the DOM is fully loaded
$(document).ready(function() {
    // Initially render all products
    renderProducts(products);

    // Add event listener to the search input for filtering
    $('#searchInput').on('keyup', function() {
        const searchTerm = $(this).val().toLowerCase();
        
        // Filter the products array
        const filteredProducts = products.filter(product => {
            return product.name.toLowerCase().includes(searchTerm) || 
                   product.description.toLowerCase().includes(searchTerm);
        });

        // Re-render the dynamically loaded content with filtered data
        renderProducts(filteredProducts);
    });
});