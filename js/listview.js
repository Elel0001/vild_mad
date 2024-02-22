//Loader siden og går til init
window.addEventListener("DOMContentLoaded", init);

//Definere to variabler
let ingredientTemplate = document.querySelector(".ingredient_template");
let ingredientContainer = document.querySelector(".ingredient_container");

function init() {
  console.log("init");

  //Henter dataen med fetch
  fetch("https://hhmpiztfssfaluwezhgq.supabase.co/rest/v1/vild_mad?select=id,name,profile_image&order=name.asc", {
    method: "GET",
    headers: {
      apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhobXBpenRmc3NmYWx1d2V6aGdxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDgyNzA4NTUsImV4cCI6MjAyMzg0Njg1NX0.TqriEz5DkZTixJO6AhMtVsvt7xiSjMvpJm525z2c9jM",
    },
  })
    .then((res) => res.json())
    .then((data) => showIngredients(data));
}

function showIngredients(ingredientJSON) {
  //console.log("json", ingredientJSON);
  //console.log("første json element", ingredientJSON[0]);

  let ingredientClone;

  //For hvert element i datasættet laver jeg en kopi/klon og indsætter indhold heri fra mit datasæt
  ingredientJSON.forEach((ingredient) => {
    //console.log("ingredient", ingredient);

    //Kloner template
    ingredientClone = ingredientTemplate.cloneNode(true).content;

    //Indsætter indhold fra database i klon
    ingredientClone.querySelector(".ingredient_name").textContent = ingredient.name;
    ingredientClone.querySelector(".ingredient_image").src = `img/${ingredient.profile_image}`;

    //Ændre href, så der linkes til den datasæt der er klikket på
    ingredientClone.querySelector(".ingredient_link").href = `singleview.html?id=${ingredient.id}`;

    //Append'er så klonerne ender i den container vi har defineret
    ingredientContainer.appendChild(ingredientClone);
  });
}
