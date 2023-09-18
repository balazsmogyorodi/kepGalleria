class KepElem {
  #kep;
  #nev;
  #leiras;
  #gyerekElem;
  #tartalom;
  #id;
  // Constructornál töltjük fel az elemeket adatokkal.
  constructor(kep, nev, leiras, id, szuloElem) {
    this.setKep(kep);
    this.setNev(nev);
    this.setLeiras(leiras);
    this.setId(id);
    szuloElem.append(`<div class="kepMezo"    ><div/>`);
    this.#gyerekElem = szuloElem.children("div:last-child"); // A gyerek elem felveszi a kapcsolatot a szülöelemmel
    this.#kepBeszuras();
    this.#gyerekElem.on("click", () => {
      this.#esemenyTrigger();
    });
  }

  // Itt rakja be a képet a gyerekElembe
  #kepBeszuras() {
    this.#gyerekElem.empty();
    this.#tartalom = `<img src="${
      this.#kep
    }"class="kepTartalom">`;
    this.#gyerekElem.append(this.#tartalom);
  }

  getKep() {
    return this.#kep;
  }
  setKep(kep) {
    this.#kep = kep;
  }

  getNev() {
    return this.#nev;
  }
  setNev(nev) {
    this.#nev = nev;
  }
  getLeiras() {
    return this.#leiras;
  }
  setLeiras(leiras) {
    this.#leiras = leiras;
  }

  getId() {
    return this.#id;
  }
  setId(id) {
    this.#id = id;
  }

  #esemenyTrigger() {
    window.dispatchEvent(new CustomEvent("kepTartalom", { detail: this }));
  }

  kepValtas() {}
}

export default KepElem;
