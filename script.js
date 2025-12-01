// Using class concepts from class exercises
// Similar to how we created classes for Pet, Person, Graphic, etc.

class PageManager {
    constructor() {
        this.currentPage = 'home-page';
        this.pages = ['home-page', 'all-page', 'insert-page'];
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
        }
    }

    getCurrentPage() {
        return this.currentPage;
    }
}

// Create instance of PageManager (like we did with new Person(), new Pet(), etc.)
const pageManager = new PageManager();

// Global function for button clicks
function showPage(pageId) {
    pageManager.showPage(pageId);
}

// Optional: Add keyboard navigation
document.addEventListener('keydown', (event) => {
    if (event.key === '1') {
        showPage('home-page');
    } else if (event.key === '2') {
        showPage('all-page');
    } else if (event.key === '3') {
        showPage('insert-page');
    }
});

console.log('Wireframe loaded! Use buttons or keys 1, 2, 3 to navigate.');
