const ramens = document.getElementById("ramen-menu");
const detailImage = document.getElementsByClassName("detail-image");
const itemName = document.getElementsByClassName("name");
const itemRestaurant = document.getElementsByClassName("restaurant");
const ratingDisplay = document.getElementById("rating-display");
const commentDisplay = document.getElementById("comment-display");
const newRamen = document.getElementById("new-ramen");
const newName = document.getElementById("new-name");
const newRestaurant = document.getElementById("new-restaurant");
const newImage = document.getElementById("new-image");
const newRating = document.getElementById("new-rating");
const newCommen = document.getElementById("new-comment");

window.addEventListener("DOMContentLoaded", () => {
  getData();
});

const getData = () => {
  fetch("http://localhost:3000/ramens")
    .then((res) => res.json())
    .then((info) => {
      info.forEach((item) => {
        renderItems(item);
      });
    });
};

const renderItems = (item) => {
  const itemImage = document.createElement("img");
  itemImage.src = item.image;
  itemImage.addEventListener("click", () => {
    detailImage[0].src = item.image;
    itemName[0].textContent = item.name;
    itemRestaurant[0].textContent = item.restaurant;
    ratingDisplay.textContent = item.rating;
    commentDisplay.textContent = item.comment;
  });
  ramens.append(itemImage);
};

newRamen.addEventListener("submit", (e) => {
  e.preventDefault()
  const newItem = {
    name: newName.value,
    restaurant: newRestaurant.value,
    image: newImage.value,
    rating: newRating.value,
    comment: newCommen.value
  }
  renderItems(newItem)
})

