let likes = 0;
document.querySelector("button").addEventListener("click", () => {
  console.log("knap klik");
  likes++;
  console.log(likes);
  document.querySelector("button").textContent = `❤️ ${likes} Like`;
  if (likes > 1) {
    document.querySelector("button").textContent = `❤️ ${likes} Likes`;
  }
});
