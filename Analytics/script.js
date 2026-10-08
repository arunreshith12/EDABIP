

const searchInput = document.getElementById("searchInput");
const clearSearch = document.getElementById("clearSearch");

searchInput.addEventListener("input", function () {

    const searchValue = this.value.toLowerCase();

    const rows = document.querySelectorAll("#modelTable tbody tr");

    rows.forEach(function (row) {

        const rowText = row.innerText.toLowerCase();

        if (rowText.includes(searchValue)) {
            row.style.display = "";
        } else {
            row.style.display = "none";
        }

    });

});


clearSearch.addEventListener("click", function () {

    searchInput.value = "";

    const rows = document.querySelectorAll("#modelTable tbody tr");

    rows.forEach(function (row) {
        row.style.display = "";
    });

});




const refreshBtn = document.getElementById("refreshBtn");
const refreshTime = document.getElementById("refreshTime");

refreshBtn.addEventListener("click", function () {

    refreshTime.textContent = "Just now";

    refreshBtn.textContent = "✓ Refreshed";

    setTimeout(function () {

        refreshBtn.textContent = "↻ Refresh";

    }, 2000);

});




const exportBtn = document.getElementById("exportBtn");

exportBtn.addEventListener("click", function () {

    const csvData =
        "Model Name,Type,Accuracy,Status\n" +
        "Sales Forecasting,Regression,98.4%,Training 75%\n" +
        "Demand Prediction,Forecast,94.2%,Active\n" +
        "Customer Churn,Classification,91.8%,Active\n" +
        "Inventory Optimization,Optimization,-,Pending";

    const blob = new Blob([csvData], {
        type: "text/csv"
    });

    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");

    link.href = url;
    link.download = "analytics-models.csv";

    link.click();

    URL.revokeObjectURL(url);

});




const askAI = document.getElementById("askAI");

askAI.addEventListener("click", function () {

    alert(
        "Hello! 👋\n\n" +
        "AI Assistant is ready to help you with your analytics."
    );

});




const viewAllBtn = document.getElementById("viewAllBtn");

viewAllBtn.addEventListener("click", function () {

    alert(
        "Showing all available ML models."
    );

});




const viewButtons = document.querySelectorAll(".view-btn");

viewButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        const row = this.closest("tr");

        const modelName = row.children[0].textContent;

        alert(
            "Selected Model:\n\n" + modelName
        );

    });

});




const categoryBtn = document.getElementById("categoryBtn");

categoryBtn.addEventListener("click", function () {

    alert(
        "Categories:\n\n" +
        "• All Categories\n" +
        "• Regression\n" +
        "• Forecast\n" +
        "• Classification\n" +
        "• Optimization"
    );

});



const revenueSelect =
    document.getElementById("revenueSelect");

revenueSelect.addEventListener("change", function () {

    console.log(
        "Selected period:",
        this.value
    );

});