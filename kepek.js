import KepElem from "./kepelem.js";

class Kepek {
  #adatok = [];
  #articleElem;
  #navElem;
  constructor(adatok) {
    this.#adatok = adatok;
    this.#articleElem = $("article");
    this.#navElem = $("nav");
    this.#init();
    $(window).on("kepTartalom", (event) => {
      const obj = event.detail;
      this.kivalasztott(obj);
      this.#navigacio(obj, obj.getId());
    });
  }

  // Itt üriti ki és tölti fel az article és a nav elemet
  #init() {
    this.#navElem.empty();
    this.#articleElemKiurites("kepGaleria")
    for (let index = 0; index < this.#adatok.length; index++) {
      new KepElem(
        this.#adatok[index].kep,
        this.#adatok[index].nev,
        this.#adatok[index].leiras,
        index,
        this.#articleElem
      );
    }
  }
  // A kivalaszott objektum adatait írja be az article-be.
  kivalasztott(obj) {
    this.#articleElemKiurites("egyKep");
    this.#articleElem.addClass("kepInfo");
    this.#articleElem.append(`<div class="informaciosMezo"><div/>`);
    const divElem = this.#articleElem.children("div:last-child");
    let tartalom = `<h2 class="text-center"> ${obj.getNev()}  </h2><img src="${obj.getKep()}"class="kepTartalom" width="300" height="230"> <p class="text-center">${obj.getLeiras()} </p>`;
    divElem.append(tartalom);
  }

  // A navigacios pult funkciójának müködtetése
  #navigacio(obj, id) {
    this.#navElem.append(
      ` <div class="gombBalra" id="vissza"></div><div class="gombGalleria" id="fomenu"></div> <div class="gombJobbra" id="elore"> </div>`
    );
    $("#fomenu").on("click", () => {
      this.#init();
    });
    $("#vissza").on("click", () => {
      id = id - 1;
      if (id < 0) {
        id = this.#adatok.length - 1;
      }
      this.adatBeallitas(obj, id);
      this.kivalasztott(obj);
    });
    $("#elore").on("click", () => {
      id = id + 1;
      if (id == this.#adatok.length) {
        id = 0;
      }
      this.adatBeallitas(obj, id);
      this.kivalasztott(obj);
    });
  }
  // Itt állítja be az objektum összes adatát.
  adatBeallitas(obj, id) {
    obj.setKep(this.#adatok[id].kep);
    obj.setNev(this.#adatok[id].nev);
    obj.setLeiras(this.#adatok[id].leiras);
    obj.setId(id);
  }


  #articleElemKiurites(classNev) {
    this.#articleElem.empty();
    this.#articleElem.removeClass();
    this.#articleElem.addClass(classNev);
  }
}

export default Kepek;
