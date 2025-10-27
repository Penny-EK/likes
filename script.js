// OPG 1

// let likes = 0;

// document.querySelector(".button").addEventListener("click", click);
// //   console.log("knap klik");
// //   likes++;
// //   console.log(likes);
// //   document.querySelector("button").textContent = `❤️ ${likes} Like`;
// //   if (likes > 1) {
// //     document.querySelector("button").textContent = `❤️ ${likes} Likes`;
// //   }
// // });

// function click() {
//   console.log("knap klik");
//   likes++;
//   console.log(likes, this);
//   this.textContent = `❤️ ${likes} Like`;
//   if (likes > 1) {
//     this.textContent = `❤️ ${likes} Likes`;
//   }
// }

// OPG 2

function knap() {
  document.querySelector("body").innerHTML += `  <button class="button">❤️ Like</button>`;

  let likes = 0;

  document.querySelectorAll(".button").forEach((button) => {
    button.addEventListener("click", click);
  });

  function click() {
    console.log("knap klik");
    likes++;
    console.log(likes, this);
    this.textContent = `❤️ ${likes} Like`;
    if (likes > 1) {
      this.textContent = `❤️ ${likes} Likes`;
    }
  }

  //   add();
}
knap();
// function add() {
//   console.log("add");

// }
