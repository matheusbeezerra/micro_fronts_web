document.addEventListener("DOMContentLoaded", function () {
  const favoritesLink = document.getElementById("favorites-link");
  const favoriteCountElement = document.getElementById("favorite-count");

  function getFavoriteCount() {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    return favorites.length;
  }

  function updateFavoriteCount() {
    if (favoriteCountElement) {
      favoriteCountElement.textContent = `${getFavoriteCount()}`;
    }
  }

  updateFavoriteCount();

  window.addEventListener("storage", function (event) {
    if (event.key === "favorites") {
      updateFavoriteCount();
    }
  });

  favoritesLink.addEventListener("click", function (event) {
    event.preventDefault();
    window.location.href = "http://localhost:3002?showFavorites=true";
  });
});
