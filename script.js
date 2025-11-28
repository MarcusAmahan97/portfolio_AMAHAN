const body = document.body;
const themeButton = document.getElementById('theme-toggle');
const wallpaperButton = document.getElementById('wallpaper-toggle');

themeButton.addEventListener('click', () => {
  body.classList.toggle('dark');
});

const wallpapers = [
  "wallpapers/wallpaper1.jpg",
  "wallpapers/wallpaper2.jpg",
  "wallpapers/wallpaper3.jpg"
  "wallpapers/wallpaper4.jpg"
];

let currentWallpaperIndex = 0;

body.style.backgroundImage = `url('${wallpapers[currentWallpaperIndex]}')`;
body.style.backgroundSize = "cover";
body.style.backgroundPosition = "center";

wallpaperButton.addEventListener('click', () => {
  currentWallpaperIndex = (currentWallpaperIndex + 1) % wallpapers.length;
  body.style.backgroundImage = `url('${wallpapers[currentWallpaperIndex]}')`;
  body.style.backgroundSize = "cover";
  body.style.backgroundPosition = "center";
});
