document.addEventListener('DOMContentLoaded', () => {
    // Sidebar Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const sidebar = document.querySelector('.sidebar');

    if (menuToggle && sidebar) {
        menuToggle.addEventListener('click', () => {
            sidebar.classList.toggle('active'); // You'll need to add CSS for .sidebar.active
        });
    }

    // Helper function for scrolling
    const scrollHorizontally = (element, direction, scrollAmount) => {
        if (element) {
            element.scrollBy({
                left: direction * scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    // Recommendations Carousel
    const recWrapper = document.querySelector('.highlight-wrapper');
    const recNextBtn = document.querySelector('.main-highlight .main-arrow .next');
    const recBackBtn = document.querySelector('.main-highlight .main-arrow .back');
    const recScrollAmount = 250; // Adjust as needed (e.g., width of one card + margin)

    if (recNextBtn && recWrapper) {
        recNextBtn.addEventListener('click', () => {
            scrollHorizontally(recWrapper, 1, recScrollAmount);
        });
    }
    if (recBackBtn && recWrapper) {
        recBackBtn.addEventListener('click', () => {
            scrollHorizontally(recWrapper, -1, recScrollAmount);
        });
    }

    // Menu Category Carousel
    const filterWrapper = document.querySelector('.filter-wrapper');
    const filterNextBtn = document.querySelector('.main-menus .main-filter .main-arrow .next-menus');
    const filterBackBtn = document.querySelector('.main-menus .main-filter .main-arrow .back-menus');
    const filterScrollAmount = 200; // Adjust as needed

    if (filterNextBtn && filterWrapper) {
        filterNextBtn.addEventListener('click', () => {
            scrollHorizontally(filterWrapper, 1, filterScrollAmount);
        });
    }
    if (filterBackBtn && filterWrapper) {
        filterBackBtn.addEventListener('click', () => {
            scrollHorizontally(filterWrapper, -1, filterScrollAmount);
        });
    }

    // Search Functionality (for index.html main search)
    const mainSearchInput = document.getElementById('mainSearchInput');
    const mainSearchButton = document.querySelector('.main-navbar .search .search-btn');

    if (mainSearchButton && mainSearchInput) {
        mainSearchButton.addEventListener('click', () => {
            const searchTerm = mainSearchInput.value.trim();
            if (searchTerm) {
                alert(`You searched for: ${searchTerm}`);
                // Later, you can replace this alert with actual search logic,
                // like filtering content or redirecting to a search results page.
            } else {
                alert('Please enter something to search!');
            }
        });
    }
});