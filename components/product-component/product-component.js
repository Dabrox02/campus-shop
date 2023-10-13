export class ProductComponent extends HTMLElement {

    constructor() {
        super();
        this.img = this.getAttribute("img") || "";
        this.name_product = this.getAttribute("nameProduct") || "Producto";
        this.price = this.getAttribute("price") || "0";
        this.id_btn = this.getAttribute("idBtn") || "0";
        this.category = this.getAttribute("category") || "none";
    }

    connectedCallback() {
        this.innerHTML = /*html*/`
    <div class="col mb-4">
        <div class="card text-center">
            <div class="card-img">
                <img src="${this.img}" class="card-img-top border-bottom" alt="${this.name_product}">
            </div>
            <div class="card-body">
                <h5 class="font-weight-normal">${this.name_product}</h5>
                <p class="card-text">
                    <h4 class="card-price text-success">$ ${this.price}</h4>
                </p>
                <div>
                    <button type="button" class="btn btn-primary btn-lg btn-block" data-add="${this.id_btn}" data-category="${this.category}">Agregar</button>
                </div>
            </div>
        </div>
    </div>
        `
    }

}

customElements.define("product-component", ProductComponent)