document.addEventListener("DOMContentLoaded", function () {
  const favoritesLink = document.getElementById("favorites-link");

  favoritesLink.addEventListener("click", function (event) {
    event.preventDefault();
    window.location.href = "http://localhost:3002?showFavorites=true";
  });

  function getFavoriteCount() {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    return favorites.length;
  }

  const favoriteCountElement = document.getElementById("favorite-count");
  if (favoriteCountElement) {
    favoriteCountElement.textContent = `${getFavoriteCount()}`;
  }

  if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    module.exports = {
      getFavoriteCount
    };
  }
});