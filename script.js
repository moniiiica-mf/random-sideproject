class Shoe {
    constructor(id, brand, color, datePurchased, imagePath) {
        this.id = id;
        this.brand = brand;
        this.color = color;
        this.datePurchased = datePurchased;
        this.imagePath = imagePath;
    }

    displayInfo() {
        return `${this.brand} - ${this.color} (${this.datePurchased})`;
    }
}

class ShoeCloset {
    constructor() {
        this.shoes = [];
        this.currentShoeId = null;
        this.initializeSampleData();
    }

    initializeSampleData() {
        // Sample data similar to the Processing version
        const sampleShoes = [
            new Shoe(1, "Balenciaga", "Black", "2022/01/12", "Balenciaga_Shoe1.png"),
            new Shoe(2, "Balenciaga", "Pink", "2023/02/02", "Balenciaga_Shoe2.png"),
            new Shoe(3, "Balenciaga", "Bright Green", "2019/03/31", "Balenciaga_Shoe3.png"),
            new Shoe(4, "Balenciaga", "White", "2021/01/14", "Balenciaga_Shoe4.png"),
            new Shoe(5, "Balenciaga", "Black", "2023/03/30", "Balenciaga_Shoe5.png"),
            new Shoe(6, "Balenciaga", "Red", "2019/01/29", "Balenciaga_Shoe6.png"),
            new Shoe(7, "Balenciaga", "Black", "2018/11/09", "Balenciaga_Shoe7.png"),
            new Shoe(8, "Balenciaga", "Black and White", "2021/09/30", "Balenciaga_Shoe8.png"),
            new Shoe(9, "Jimmy Choo", "Black", "2019/12/25", "JimmyChoo_Shoe1.png"),
            new Shoe(10, "YSL", "Black", "2025/08/16", "YSL_Shoe1.png"),
            new Shoe(11, "YSL", "Green", "2020/07/20", "YSL_Shoe2.png"),
            new Shoe(12, "YSL", "Black", "2024/05/28", "YSL_Shoe3.png"),
            new Shoe(13, "YSL", "Black and White", "2022/04/15", "YSL_Shoe4.png"),
            new Shoe(14, "YSL", "White", "2025/05/08", "YSL_Shoe5.png"),
            new Shoe(15, "YSL", "Black", "2022/01/10", "YSL_Shoe6.png"),
            new Shoe(16, "YSL", "Brown and Black", "2022/05/20", "YSL_Shoe7.png"),
            new Shoe(17, "YSL", "Black", "2025/03/11", "YSL_Shoe8.png"),
            new Shoe(18, "YSL", "Black", "2020/07/26", "YSL_Shoe9.png"),
            new Shoe(19, "Jimmy Choo", "White", "2019/10/10", "JimmyChoo_Shoe2.png"),
            new Shoe(20, "Jimmy Choo", "White", "2022/06/23", "JimmyChoo_Shoe3.png"),
            new Shoe(21, "Jimmy Choo", "Pink and Silver", "2018/04/28", "JimmyChoo_Shoe4.png"),
            new Shoe(22, "Jimmy Choo", "Black", "2021/02/28", "JimmyChoo_Shoe5.png"),
            new Shoe(23, "Dior", "Black", "2019/12/17", "Dior_Shoe1.png"),
            new Shoe(24, "Dior", "Black", "2021/03/14", "Dior_Shoe2.png"),
            new Shoe(25, "Dior", "Pink and White", "2021/07/16", "Dior_Shoe3.png"),
            new Shoe(26, "Dior", "White", "2025/08/23", "Dior_Shoe4.png"),
            new Shoe(27, "Dior", "Pink and White", "2018/09/29", "Dior_Shoe5.png"),
            new Shoe(28, "Dior", "Dirty White", "2024/12/22", "Dior_Shoe6.png"),
            new Shoe(29, "Dior", "Black and White", "2021/02/01", "Dior_Shoe7.png"),
            new Shoe(30, "Dior", "Brown", "2022/10/27", "Dior_Shoe8.png")
          ];

        this.shoes = sampleShoes;
    }

    addShoe(brand, color, datePurchased) {
        const newId = this.shoes.length > 0 ? Math.max(...this.shoes.map(s => s.id)) + 1 : 1;
        const newShoe = new Shoe(newId, brand, color, datePurchased);
        this.shoes.push(newShoe);
        return newShoe;
    }

    getShoe(id) {
        return this.shoes.find(shoe => shoe.id === id);
    }

    searchShoes(keyword) {
        const lowerKeyword = keyword.toLowerCase();
        return this.shoes.filter(shoe =>
            shoe.brand.toLowerCase().includes(lowerKeyword) ||
            shoe.color.toLowerCase().includes(lowerKeyword) ||
            shoe.datePurchased.includes(lowerKeyword)
        );
    }

    getAllShoes() {
        return this.shoes;
    }
}

// Create instance of ShoeCloset (similar to how we created instances in class)
const shoeCloset = new ShoeCloset();

// Page Management
class PageManager {
    constructor() {
        this.currentPage = 'landing-page';
        this.pages = ['landing-page', 'all-shoes-page', 'add-shoe-page', 'search-page', 'detail-page'];
    }

    showPage(pageId) {
        // Hide all pages
        this.pages.forEach(page => {
            const pageElement = document.getElementById(page);
            if (pageElement) {
                pageElement.classList.remove('active');
            }
        });

        // Show selected page
        const selectedPage = document.getElementById(pageId);
        if (selectedPage) {
            selectedPage.classList.add('active');
            this.currentPage = pageId;

            // Render content based on page
            if (pageId === 'all-shoes-page') {
                renderShoeGrid();
            }
        }
    }
}

const pageManager = new PageManager();

// Global function for button clicks
function showPage(pageId) {
    pageManager.showPage(pageId);
}

// Render all shoes in grid
function renderShoeGrid() {
    const shoeGrid = document.getElementById('shoe-grid');
    if (!shoeGrid) return;

    shoeGrid.innerHTML = '';

    const shoes = shoeCloset.getAllShoes();
    shoes.forEach(shoe => {
        const card = createShoeCard(shoe);
        shoeGrid.appendChild(card);
    });
}

// Create a shoe card element
function createShoeCard(shoe) {
    const card = document.createElement('div');
    card.className = 'shoe-card';
    card.onclick = () => showShoeDetail(shoe.id);

    card.innerHTML = `
        <img src="${shoe.imagePath}" alt="${shoe.brand}" class="shoe-card-image">
        <h3>${shoe.brand}</h3>
        <p>Color: ${shoe.color}</p>
        <p>Purchased: ${shoe.datePurchased}</p>
    `;

    return card;
}

// Show shoe detail page
function showShoeDetail(shoeId) {
    const shoe = shoeCloset.getShoe(shoeId);
    if (!shoe) return;

    shoeCloset.currentShoeId = shoeId;

    // Update detail page content
    document.getElementById('detail-brand').textContent = shoe.brand;
    document.getElementById('detail-color').textContent = shoe.color;
    document.getElementById('detail-date').textContent = shoe.datePurchased;
    document.getElementById('detail-shoe-image').innerHTML = `<img src="${shoe.imagePath}" alt="${shoe.brand}" style="width: 100%; height: 100%; object-fit: contain;">`;

    // Show detail page
    showPage('detail-page');
}

// Add shoe form handling
document.addEventListener('DOMContentLoaded', () => {
    const addShoeForm = document.getElementById('add-shoe-form');
    if (addShoeForm) {
        addShoeForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const brand = document.getElementById('brand-input').value;
            const color = document.getElementById('color-input').value;
            const date = document.getElementById('date-input').value;

            if (brand && color && date) {
                shoeCloset.addShoe(brand, color, date);

                // Clear form
                addShoeForm.reset();

                // Show success feedback
                alert('Shoe added to your closet!');

                // Go to all shoes page
                showPage('all-shoes-page');
            } else {
                alert('Please fill in all fields!');
            }
        });
    }

    // Color quick select
    const colorOptions = document.querySelectorAll('.option-item[data-color]');
    colorOptions.forEach(option => {
        option.addEventListener('click', () => {
            const color = option.getAttribute('data-color');
            document.getElementById('color-input').value = color;
        });
    });

    // Search functionality
    const searchInput = document.getElementById('search-input');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const keyword = e.target.value;
            const results = keyword ? shoeCloset.searchShoes(keyword) : [];

            const searchResults = document.getElementById('search-results');
            searchResults.innerHTML = '';

            if (keyword && results.length === 0) {
                searchResults.innerHTML = '<p style="text-align: center; color: #666; margin-top: 40px;">No shoes found</p>';
            } else if (results.length > 0) {
                results.forEach(shoe => {
                    const card = createShoeCard(shoe);
                    searchResults.appendChild(card);
                });
            }
        });
    }

    // Initialize first render
    renderShoeGrid();
});

console.log('Virtual Shoe Closet loaded!');
console.log(`Total shoes in closet: ${shoeCloset.getAllShoes().length}`);
