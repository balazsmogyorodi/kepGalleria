import { Adatok } from "./adatok.js";
import Kepek from "./kepek.js";


$(function () {
    // A főprogram itt futt le
    new Kepek(Adatok);
    $(window).on("kepTartalom", (event) => {
        const obj = event.detail;
        console.log(obj);
    })
});
