//Loader siden og går til init
window.addEventListener("DOMContentLoaded", init);

//Definere konstanter
//Jeg finder id'et i URL'en
const URLparams = new URLSearchParams(window.location.search);
const id = URLparams.get("id");

//Indsætter med konkatenering det nu fundet id, i URL'en til API'et, så det data jeg har klikket på i listview, bliver vist i dette singleview
const ingredientsURL = `https://tffrhcejgcmxtpatvfvj.supabase.co/rest/v1/vildmad?id=eq.${id}&select=*`;

function init() {
  console.log("init");

  //Henter dataen med fetch
  fetch(ingredientsURL, {
    method: "GET",
    headers: {
      apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRmZnJoY2VqZ2NteHRwYXR2ZnZqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjgwNjg3NTEsImV4cCI6MjA0MzY0NDc1MX0.csHqTIOIfSUbv7ApQFyGHfzQ6QhJ9eAU86rmT1cL9HI",
    },
  })
    .then((res) => res.json())
    .then((data) => showIngredient(data));
}

function showIngredient(ingredient) {
  console.log(ingredient);
  //Jeg er obs på at når jeg bruger consol log, kan jeg se at jeg får et array med et objekt i. Derfor skal jeg ind og vælge det 1. objekt, altså [0], i arrayet, få at få det data jeg ønsker frem

  //Indsætter mit indhold fra mit objekt i html'en
  document.querySelector(".breadcrumb_ingredient").textContent = ingredient[0].name;
  document.querySelector(".ingredient_type").textContent = ingredient[0].type;
  document.querySelector(".ingredient_name").textContent = ingredient[0].name;
  document.querySelector(".ingrdient_desc").textContent = ingredient[0].description;
  document.querySelector(".ingredient_surrounding").src = `img/${ingredient[0].background_image}`;
  document.querySelector(".ingredient_image").src = `img/${ingredient[0].profile_image}`;

  document.querySelector(".ingrdient_place").textContent = ingredient[0].where;
  document.querySelector(".ingrdient_months").textContent = ingredient[0].when;
  document.querySelector(".ingredient_pick_desc").textContent = ingredient[0].pick;
  document.querySelector(".ingrdient_obs").textContent = ingredient[0].obs;
  document.querySelector(".recipe_name").textContent = ingredient[0].name;
}
