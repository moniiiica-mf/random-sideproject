// Using class concepts from class - similar to Person, Pet, Graphic classes
// This follows the OOP patterns learned in wk8 and wk9 workshops

class Shoe {
    constructor(id, brand, color, datePurchased) {
        this.id = id;
        this.brand = brand;
        this.color = color;
        this.datePurchased = datePurchased;
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
            new Shoe(1, "Balenciaga", "Black", "2020/01/12"),
            new Shoe(2, "Balenciaga", "Pink", "2019/02/02"),
            new Shoe(3, "Balenciaga", "Bright Green", "2019/03/31"),
            new Shoe(4, "Balenciaga", "White", "2021/01/14"),
            new Shoe(5, "Balenciaga", "Black", "2021/03/30"),
            new Shoe(6, "Balenciaga", "Red", "2019/01/29"),
            new Shoe(7, "Balenciaga", "Black", "2018/11/09"),
            new Shoe(8, "Balenciaga", "Black and White", "2020/09/30"),
            new Shoe(9, "Jimmy Choo", "Black", "2019/12/25"),
            new Shoe(10, "YSL", "Black", "2021/08/16"),
            new Shoe(11, "YSL", "Green", "2020/07/20"),
            new Shoe(12, "YSL", "Black", "2020/05/28"),
            new Shoe(13, "YSL", "Black and White", "2019/04/15"),
            new Shoe(14, "YSL", "White", "2021/05/08"),
            new Shoe(15, "YSL", "Black", "2018/01/10"),
            new Shoe(16, "YSL", "Brown and Black", "2022/05/20"),
            new Shoe(17, "YSL", "Black", "2020/03/11"),
            new Shoe(18, "YSL", "Black", "2020/07/26"),
            new Shoe(19, "Jimmy Choo", "White", "2019/10/10"),
            new Shoe(20, "Jimmy Choo", "White", "2022/06/23"),
            new Shoe(21, "Jimmy Choo", "Pink and Silver", "2018/04/28"),
            new Shoe(22, "Jimmy Choo", "Black", "2021/02/28"),
            new Shoe(23, "Dior", "Black", "2018/12/17"),
            new Shoe(24, "Dior", "Black", "2021/03/14"),
            new Shoe(25, "Dior", "Pink and White", "2021/07/16"),
            new Shoe(26, "Dior", "White", "2022/08/23"),
            new Shoe(27, "Dior", "Pink and White", "2018/09/29"),
            new Shoe(28, "Dior", "Dirty White", "2019/12/22"),
            new Shoe(29, "Dior", "Black and White", "2018/02/01"),
            new Shoe(30, "Dior", "Brown", "2020/10/27")
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
        <div class="shoe-card-image">Shoe Image</div>
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
    document.getElementById('detail-shoe-image').textContent = `${shoe.brand} Image`;

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
