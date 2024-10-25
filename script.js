// Function to fetch COVID-19 data for a given country
async function getCovidData() {
    const country = document.getElementById("country").value;
    if (!country) {
        alert("Please enter a country name.");
        return;
    }

    try {
        const response = await fetch(`https://disease.sh/v3/covid-19/countries/${country}`);
        if (!response.ok) {
            throw new Error("Country not found");
        }
        const data = await response.json();
        
        // Update the HTML with the fetched data
        document.getElementById("country-name").textContent = data.country;
        document.getElementById("cases").textContent = data.cases.toLocaleString();
        document.getElementById("deaths").textContent = data.deaths.toLocaleString();
        document.getElementById("recovered").textContent = data.recovered.toLocaleString();
    } catch (error) {
        alert("Error fetching data: " + error.message);
    }
}
window.onload = () => {
 document.getElementById("country").value = "India"; // Set default input value to India
 getCovidData(); // Fetch data for India by default
};
