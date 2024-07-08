const videoSection = document.querySelector("#videos-grid");
const loader = document.querySelector(".loader-box");
let favoriteCountElement;
let allVideos = [];
let showingFavorites = false;

function getVideos() {
  fetch(
    "https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=UUvdwhh_fDyWccR42-rReZLw&key=AIzaSyDM0MNGgJmhi84CySMRBXeziOkqoA9brKU"
  )
    .then((res) => res.json())
    .then((data) => {
      loader.style.display = "none";
      allVideos = data.items;
      const urlParams = new URLSearchParams(window.location.search);
      showingFavorites = urlParams.get("showFavorites") === "true";
      if (showingFavorites) {
        const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
        const favoriteVideos = allVideos.filter((video) =>
          favorites.includes(video.snippet.resourceId.videoId)
        );
        renderVideos(favoriteVideos);
      } else {
        renderVideos(allVideos);
      }
    })
    .catch((err) => {
      loader.style.display = "none";
      console.log(err);
      videoSection.innerHTML = "<h2>Desculpa! Estamos fora do ar!</h2>";
    });
}

function renderVideos(videos) {
  videoSection.innerHTML = "";
  videos.forEach((el) => {
    const isFavorite = checkFavorite(el.snippet.resourceId.videoId);
    videoSection.innerHTML += `
    <div class="yt-video">
      <a target="_blank" href="https://www.youtube.com/watch?v=${
        el.snippet.resourceId.videoId
      }">
        <img src="${el.snippet.thumbnails.medium.url}" alt="${
      el.snippet.title
    }"/>
        <h2>${el.snippet.title}</h2>
      </a>
      <div class="favorite-icon ${
        isFavorite ? "selected" : ""
      }" data-video-id="${el.snippet.resourceId.videoId}">
        <span class="material-symbols-outlined kid_star">
          kid_star
        </span>
      </div>
    </div>`;
  });
  attachFavoriteEventListeners();
  updateFavoriteCount();
}

function checkFavorite(videoId) {
  const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
  return favorites.includes(videoId);
}

function toggleFavorite(videoId) {
  let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
  if (favorites.includes(videoId)) {
    favorites = favorites.filter((id) => id !== videoId);
  } else {
    favorites.push(videoId);
  }
  localStorage.setItem("favorites", JSON.stringify(favorites));
  updateFavoriteCount();
}

function attachFavoriteEventListeners() {
  const favoriteIcons = document.querySelectorAll(".favorite-icon");
  favoriteIcons.forEach((icon) => {
    icon.addEventListener("click", (e) => {
      const videoId = e.target
        .closest(".favorite-icon")
        .getAttribute("data-video-id");
      toggleFavorite(videoId);
      e.target.closest(".favorite-icon").classList.toggle("selected");
    });
  });
}

function updateFavoriteCount() {
  const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
  if (favoriteCountElement) {
    favoriteCountElement.textContent = `Favoritos: ${favorites.length}`;
  }
}

document.addEventListener("DOMContentLoaded", function () {
  favoriteCountElement = document.getElementById("favorite-count");
  updateFavoriteCount();
  getVideos();
});
