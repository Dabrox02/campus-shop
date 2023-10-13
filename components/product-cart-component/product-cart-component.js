export class ProductCartComponent extends HTMLElement {
    constructor() {
        super();
        this.img = this.getAttribute("img") || "";
        this.name_product = this.getAttribute("nameProduct") || "Producto";
        this.quantity = this.getAttribute("quantity") || "1";
        this.id_btn = this.getAttribute("idBtn") || "0";
        this.price = this.getAttribute("price") || "0";
        this.subtotal = Number(this.price) * Number(this.quantity) || 0;
    }

    render() {
        this.innerHTML = /*html*/`
        <div class="card mb-3">
            <div class="row row-cart">
                <div class="col-md-2">
                    <div class="cart-img">
                        <img src="${this.img}" alt="${this.name_product}">
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="card-body">
                        <h4><small class="text-muted">Producto</small></h4>
                        <h4>${this.name_product}</h4>
                    </div>
                </div>
                <div class="col-md-2">
                    <div class="card-body">
                        <h4><small class="text-muted">Cantidad</small></h4>
                        <input type="number" min="1" style="width:80%" value="${this.quantity}" data-id="${this.id_btn}" class="edit-quantity">
                    </div>
                </div>
                <div class="col-md-2">
                    <div class="card-body">
                        <h4><small class="text-muted">Precio</small></h4>
                        <h5 class="">$ ${this.price || "0"}</h5>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="card-body mb-3 text-md-center">
                        <div>
                            <h4><small class="text-muted">Subtotal</small></h4>
                            <h5 class="subtotal">$ ${this.subtotal}</h5>
                        </div>
                        <div>
                            <button type="button" class="btn btn-outline-danger btn-block" data-del="${this.id_btn}">Eliminar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>`
    }


    connectedCallback() {
        this.render();
    }

}

customElements.define("product-cart-component", ProductCartComponent)