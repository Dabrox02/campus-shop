import config from "../../config.js";

export class SidebarComponent extends HTMLElement {

  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = /*html*/`
      <aside class="main-sidebar sidebar-light-primary elevation-4">
        <!-- Brand Logo -->
        <a href="${config.uri}/index.html" class="brand-link">
          <img src="https://yt3.googleusercontent.com/R0m-d4if_-VHO1KV9j8bBfyrP3hcz0h0KgHdwn3hSMO_Ap0DmoxBza7sULsuiL2zpfNtAKbdeA=s900-c-k-c0x00ffffff-no-rj" alt="CampusShop Logo" class="brand-image img-circle elevation-3 bg-dark" style="opacity: .8">
          <span class="brand-text font-weight-normal">CampusShop</span>
        </a>
  
        <!-- Sidebar -->
        <div class="sidebar">
          <!-- Sidebar user panel -->
          <div class="user-panel mt-3 pb-3 mb-3 d-flex">
            <div class="image">
              <img src="https://img.icons8.com/?size=256&id=iEBcQcM9rnZ9&format=png" class="img-circle elevation-2 bg-dark" alt="User Image">
            </div>
            <div class="info">
              <a href="https://github.com/Dabrox02" target="_blank" class="d-block">Jaider Mendoza</a>
            </div>
          </div>
  
          <!-- Sidebar Menu -->
          <nav class="mt-2">
            <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
              <li class="nav-item">
                <a href="${config.uri}/index.html" class="nav-link">
                  <i class="nav-icon fas fas fa-home"></i>
                  <p> Inicio </p>
                </a>
              </li>

              <li class="nav-item menu">
              <a href="#" class="nav-link">
                <i class="nav-icon fas fa-th"></i>
                <p>
                  Categorias
                  <i class="right fas fa-angle-left"></i>
                </p>
              </a>
              <ul class="nav nav-treeview">
                <li class="nav-item">
                  <a href="${config.uri}/views/todos.html" class="nav-link">
                    <i class="far fa-circle nav-icon"></i>
                    <p>Todos los productos</p>
                  </a>
                </li>
                <li class="nav-item">
                  <a href="${config.uri}/views/abrigos.html" class="nav-link">
                    <i class="far fa-circle nav-icon"></i>
                    <p>Abrigos</p>
                  </a>
                </li>
                <li class="nav-item">
                  <a href="${config.uri}/views/camisetas.html" class="nav-link">
                    <i class="far fa-circle nav-icon"></i>
                    <p>Camisetas</p>
                  </a>
                </li>
                <li class="nav-item">
                  <a href="${config.uri}/views/pantalones.html" class="nav-link">
                    <i class="far fa-circle nav-icon"></i>
                    <p>Pantalones</p>
                  </a>
                </li>
              </ul>
            </li>

              <li class="nav-item">
                <a href="${config.uri}/views/carrito.html" class="nav-link">
                  <i class="nav-icon fas fa-shopping-cart"></i>
                  <p> Carrito </p>
                </a>
              </li>
            </ul>
          </nav>


          <!-- /.sidebar-menu -->
        </div>
        <!-- /.sidebar -->
      </aside>
        `
  }

}

customElements.define("main-sidebar-component", SidebarComponent)