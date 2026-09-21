let hemmeligtTal = Math.floor(Math.random() * 11);
let antalGaet = 0;

const knap = document.querySelector("#knap");

knap.addEventListener("click", tjekTal);

function tjekTal() {
  const brugerTal = Number(document.querySelector("#tal").value);

  antalGaet++;

  if (brugerTal === hemmeligtTal) {
    alert("Rigtigt! Du brugte " + antalGaet + " forsøg.");

    const igen = confirm("Vil du prøve igen?");

    if (igen) {
      hemmeligtTal = Math.floor(Math.random() * 11);
      antalGaet = 0;
      document.querySelector("#tal").value = "";
    }
  } else if (brugerTal < hemmeligtTal) {
    alert("Dit tal er for lavt. Prøv igen :)");
  } else {
    alert("Dit tal er for højt. Prøv igen :)");
  }
}
