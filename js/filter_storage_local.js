document.addEventListener("DOMContentLoaded", function () {
    const filterSelect = document.getElementById("filter");
    const sortSelect = document.getElementById("sort");
    const searchInput = document.getElementById("search");

    // Apply saved filter and sort settings
    applySavedSettings();

    // Event listeners to save settings on change
    filterSelect.addEventListener("change", saveSettings);
    sortSelect.addEventListener("change", saveSettings);
    searchInput.addEventListener("input", saveSettings);

    function saveSettings() {
        const filterValue = filterSelect.value;
        const sortValue = sortSelect.value;
        const searchValue = searchInput.value;

        localStorage.setItem("filter", filterValue);
        localStorage.setItem("sort", sortValue);
        localStorage.setItem("search", searchValue);
    }

    function applySavedSettings() {
        // Retrieve saved values
        const savedFilter = localStorage.getItem("filter") || "all";
        const savedSort = localStorage.getItem("sort") || "default";
        const savedSearch = localStorage.getItem("search") || "";

        // Apply saved values to elements
        filterSelect.value = savedFilter;
        sortSelect.value = savedSort;
        searchInput.value = savedSearch;

        // Trigger filtering and sorting with saved settings
        filterProducts();
        sortProducts();
    }
});
