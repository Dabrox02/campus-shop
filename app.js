
import { loadCoats, loadShirts, loadPants } from "./modules/loadProducts.js"

const d = document;
const $ = (e) => d.querySelector(e);
const $a = (e) => d.querySelectorAll(e);

export const app = async () => {

    let path = window.location.pathname.split(".")[0];

    if (path === "/index" || path === "/") {
    }

    if (path === "/views/todos") {
        await loadCoats($("#grid-products-cards"));
        await loadPants($("#grid-products-cards"));
        await loadShirts($("#grid-products-cards"));
    }

    if (path === "/views/abrigos") {
        await loadCoats($("#grid-products-cards"));
    }

    if (path === "/views/camisetas") {
        await loadShirts($("#grid-products-cards"));
    }

    if (path === "/views/pantalones") {
        await loadPants($("#grid-products-cards"));
    }

    if (path === "/views/carrito") {
    }
}