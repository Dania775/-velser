const billeder = document.querySelectorAll("img");

billeder.forEach(function (billede) {
  billede.addEventListener("click", tjekDrik);
});

function tjekDrik() {
  if (this.alt === "øl" || this.alt === "snaps") {
    console.log("indeholder alkohol");
  } else {
    console.log("alkoholfri");
  }
}
