async function fetchFruit() {
    try {
        const fruitName = document.getElementById("fruit_name").value.toLowerCase();

        if (!fruitName) {
            alert("Please enter a fruit name!");
            return;
        }

        // Use PHP proxy to avoid CORS and access it. 3 hours of me [insert Snake 'suffer' line ]
        const response = await fetch(`fruity.php?fruit=${fruitName}`);

        if (!response.ok) {
            throw new Error("Fruit not found");
        }

        const data = await response.json();

        // --- Fill Data ---
        document.getElementById("fruitInfo").style.display = "block";

        document.getElementById("fruitName").textContent = data.name.toUpperCase();
        document.getElementById("fruitGenus").textContent = data.genus;
        document.getElementById("fruitFamily").textContent = data.family;
        document.getElementById("fruitOrder").textContent = data.order;

        document.getElementById("fruitCarb").textContent = data.nutritions.carbohydrates;
        document.getElementById("fruitProtein").textContent = data.nutritions.protein;
        document.getElementById("fruitFat").textContent = data.nutritions.fat;
        document.getElementById("fruitCalories").textContent = data.nutritions.calories;
        document.getElementById("fruitSugar").textContent = data.nutritions.sugar;

    } catch (error) {
        console.error("Error fetching fruit:", error);
        alert("Fruit not found! Try again.");
    }
}
