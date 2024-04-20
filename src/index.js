// index.js

export const url = "http://localhost:3000/ramens";

export const main = () => {
  // Wait for the DOM to fully load before executing the JavaScript code
  document.addEventListener("DOMContentLoaded", () => {
    // Fetch the data from the server and render the ramens
    fetch(url)
      .then((resp) => resp.json())
      .then((ramens) => renderRamens(ramens));

    // Select the new-ramen form
    const newRamenForm = document.querySelector("#new-ramen");

    // Attach the addSubmitListener function as the event listener for form submission
    newRamenForm.addEventListener("submit", addSubmitListener);
  });
};

export const renderRamens = (ramens) => {
  const ramenMenu = document.querySelector("#ramen-menu");

  ramens.forEach((ramen) => {
    const image = document.createElement("img");
    image.src = ramen.image;
    ramenMenu.appendChild(image);

    image.addEventListener("click", () => renderDetails(ramen));
  });
};

export const renderDetails = (ramen) => {
  const ramenImage = document.querySelector(".detail-image");
  ramenImage.src = ramen.image;

  const ramenName = document.querySelector(".name");
  ramenName.innerText = "Name: " + ramen.name;

  const ramenRestaurant = document.querySelector(".restaurant");
  ramenRestaurant.innerText = "Restaurant: " + ramen.restaurant;

  const ramenRating = document.querySelector("#rating-display");
  ramenRating.innerText = "Rating: " + ramen.rating;

  const ramenComment = document.querySelector("#comment-display");
  ramenComment.innerText = "Comment: " + ramen.comment;
};

export const addSubmitListener = (event) => {
  event.preventDefault();

  // Get form input values
  const newName = document.getElementById("new-name").value;
  const newRestaurant = document.getElementById("new-restaurant").value;
  const newImage = document.getElementById("new-image").value;
  const newRating = document.getElementById("new-rating").value;
  const newComment = document.getElementById("new-comment").value;

  // Create a new ramen object
  const newRamen = {
    name: newName,
    restaurant: newRestaurant,
    image: newImage,
    rating: newRating,
    comment: newComment,
  };

  // Render the new ramen
  renderRamen(newRamen);

  // Reset the form
  event.target.reset();
};

export const renderRamen = (ramen) => {
  const image = document.createElement("img");
  image.src = ramen.image;

  const ramenMenu = document.querySelector("#ramen-menu");
  ramenMenu.appendChild(image);

  image.addEventListener("click", () => renderDetails(ramen));
};

// Invoke the main function
main();
