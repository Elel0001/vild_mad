window.addEventListener("DOMContentLoaded", init);

// https://hhmpiztfssfaluwezhgq.supabase.co

//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhobXBpenRmc3NmYWx1d2V6aGdxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDgyNzA4NTUsImV4cCI6MjAyMzg0Njg1NX0.TqriEz5DkZTixJO6AhMtVsvt7xiSjMvpJm525z2c9jM

const URLparams = new URLSearchParams(window.location.search);
const id = URLparams.get("id");
const ingredientsURL = `https://hhmpiztfssfaluwezhgq.supabase.co/rest/v1/vild_mad?id=eq.${id}&select=*`;

//hhmpiztfssfaluwezhgq.supabase.co/rest/v1/vild_mad?id=eq.15&select=*

function init() {
  console.log("init");

  //Henter dataen med fetch
  fetch(ingredientsURL, {
    method: "GET",
    headers: {
      apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhobXBpenRmc3NmYWx1d2V6aGdxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDgyNzA4NTUsImV4cCI6MjAyMzg0Njg1NX0.TqriEz5DkZTixJO6AhMtVsvt7xiSjMvpJm525z2c9jM",
    },
  })
    .then((res) => res.json())
    .then((data) => showIngredient(data));
}

function showIngredient(ingredient) {
  console.log(ingredient);
  //Jeg er obs på at når jeg bruger consol log, kan jeg se at jeg får et array med et objekt i. Derfor skal jeg ind og vælge det 1. objekt, altså [0], i arrayet, få at få det data jeg ønsker frem

  //Indsætter mit indhold fra mit objekt i html'en
  document.querySelector(".ingredient_type").textContent = ingredient[0].type;
  document.querySelector(".ingredient_name").textContent = ingredient[0].name;
  document.querySelector(".ingrdient_desc").textContent = ingredient[0].description;
  document.querySelector(".ingredient_surrounding").src = `img/${ingredient[0].background_image}`;
  document.querySelector(".ingredient_image").src = `img/${ingredient[0].profile_image}`;

  document.querySelector(".ingrdient_place").textContent = ingredient[0].where;
  document.querySelector(".ingrdient_months").textContent = ingredient[0].when;
  document.querySelector(".ingredient_pick_desc").textContent = ingredient[0].pick;
  document.querySelector(".ingrdient_obs").textContent = ingredient[0].obs;
}
