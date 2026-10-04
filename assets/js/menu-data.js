// Dynamic Menu Items Renderer
const menuItems = [
    {
        name: "Signature Espresso",
        category: "coffee",
        price: "$3.50",
        description: "Rich, full-bodied espresso extracted from our house single-origin roast."
    },
    {
        name: "Oat Milk Latte",
        category: "coffee",
        price: "$5.25",
        description: "Smooth espresso layered with steamed organic oat milk and light foam."
    },
    {
        name: "Cold Brew Special",
        category: "coffee",
        price: "$4.75",
        description: "Steeped for 18 hours for a sweet, smooth, and refreshing flavor."
    },
    {
        name: "Butter Croissant",
        category: "bakery",
        price: "$3.80",
        description: "Flaky, golden-brown French croissant baked fresh every morning."
    },
    {
        name: "Chocolate Almond Scone",
        category: "bakery",
        price: "$4.20",
        description: "Rich dark chocolate chips with toasted almond slices."
    },
    {
        name: "Avocado Sourdough Toast",
        category: "breakfast",
        price: "$9.50",
        description: "Smashed Hass avocado, microgreens, chili flakes, and extra virgin olive oil."
    },
    {
        name: "Viva Breakfast Sandwich",
        category: "breakfast",
        price: "$11.00",
        description: "Free-range egg, aged cheddar, crisp bacon, and house aioli on brioche."
    }
];

function renderMenuItems(categoryFilter = 'all') {
    const grid = document.getElementById('menuGrid');
    if (!grid) return;

    grid.innerHTML = '';

    const filtered = categoryFilter === 'all' 
        ? menuItems 
        : menuItems.filter(item => item.category === categoryFilter);

    filtered.forEach(item => {
        const card = document.createElement('div');
        card.className = 'menu-card';
        card.innerHTML = `
            <div class="menu-card-header">
                <h4>${item.name}</h4>
                <span class="menu-price">${item.price}</span>
            </div>
            <p>${item.description}</p>
        `;
        grid.appendChild(card);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    renderMenuItems();

    const tabs = document.querySelectorAll('.tab-btn');
    tabs.forEach(tab => {
        tab.addEventListener('click', (e) => {
            tabs.forEach(t => t.classList.remove('active'));
            e.target.classList.add('active');
            renderMenuItems(e.target.dataset.category);
        });
    });
});