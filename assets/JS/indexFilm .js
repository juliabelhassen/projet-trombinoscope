const articlss = document.querySelectorAll("h3");
const imges = document.querySelectorAll("img");
const hAa = document.querySelectorAll("h2");
const bnt1 = document.querySelector("button");

function closAll(index) {
  for (let i = 0; i < articlss.length; i++) {
    if (i != index) {
      articlss[i].style.display = "none";
    }
  }
}

function closAllI(index) {
  for (let i = 0; i < imges.length; i++) {
    if (i != index) {
      imges[i].style.display = "none";
    }
  }
}

function closAllIh(index) {
  for (let i = 0; i < hAa.length; i++) {
    if (i != index) {
      hAa[i].style.display = "none";
    }
  }
}

bnt1.addEventListener("click", () => {
  for (let i = 0; i < articlss.length; i++) {
    console.log("coucou");
    articlss[i].style.display = "none";
    hAa[i].style.display = "block";
    imges[i].style.display = "block";
  }
});

for (let i = 0; i < imges.length; i++) {
  imges[i].addEventListener("click", () => {
    closAll(i);
    closAllI(i);
    closAllIh(i);

    if (articlss[i].style.display == "block") {
      articlss[i].style.display = "none";
    } else {
      articlss[i].style.display = "block";
    }
  });
}
