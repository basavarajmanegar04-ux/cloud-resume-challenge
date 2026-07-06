document.addEventListener("DOMContentLoaded", async function () {

    const visitorCount = document.getElementById("visitor-count");

    try {

        const response = await fetch("https://38sdst3iy0.execute-api.ap-south-1.amazonaws.com/prod/visitor");

        const data = await response.json();

        visitorCount.textContent = data.count;

    } catch (error) {

        console.error(error);
        visitorCount.textContent = "Error";

    }

});