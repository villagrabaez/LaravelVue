<template>
    <!-- Main Sidebar Container -->
  <aside class="main-sidebar sidebar-dark-primary elevation-4">
    <!-- Brand Logo -->
    <a href="#" class="brand-link">
      <!-- <img src="{{ asset('img/AdminLTELogo.png') }}" alt="AdminLTE Logo" class="brand-image img-circle elevation-3" -->
      <img :src="ruta + '/img/AdminLTELogo.png'" alt="AdminLTE Logo" class="brand-image img-circle elevation-3"
           style="opacity: .8">
      <span class="brand-text font-weight-light">LaravelVue</span>
    </a>

    <!-- Sidebar -->
    <div class="sidebar">
      <!-- Sidebar user panel (optional) -->
      <div class="user-panel mt-3 pb-3 mb-3 d-flex">
        <div class="image">
          <!-- <img src="{{ asset('img/user2-160x160.jpg') }}" class="img-circle elevation-2" alt="User Image"> -->
          <img :src="ruta + '/img/user2-160x160.jpg'" class="img-circle elevation-2" alt="User Image">
        </div>
        <div class="info">
          <a href="#" class="d-block">Admin</a>
        </div>
      </div>

      <!-- Sidebar Menu -->
      <nav class="mt-2">
        <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
          <!-- Add icons to the links using the .nav-icon class
               with font-awesome or any other icon font library -->
          <li class="user-panel pb-3 mb-3 nav-item">
            <router-link to="/" class="nav-link">
              <i class="nav-icon fas fa-tachometer-alt"></i>
              <p>
                Dashboard
              </p>
            </router-link>
          </li>
          <li class="nav-item has-treeview">
            <a href="#" class="nav-link">
              <i class="nav-icon fas fa-tasks"></i>
              <p>
                Operaciones
                <i class="right fas fa-angle-left"></i>
              </p>
            </a>
            <ul class="nav nav-treeview">
              <li class="nav-item">
                <router-link to="/pedidos" class="nav-link">
                  <i class="nav-icon fas fa-cash-register"></i>
                  <p>Pedidos</p>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="/clientes" class="nav-link">
                  <i class="nav-icon fas fa-user-friends"></i>
                  <p>Clientes</p>
                </router-link>
              </li>
            </ul>
          </li>
          <li class="nav-item has-treeview">
            <a href="#" class="nav-link">
              <i class="nav-icon fas fa-cogs"></i>
              <p>
                Configuración
                <i class="right fas fa-angle-left"></i>
              </p>
            </a>
            <ul class="nav nav-treeview">
              <li class="nav-item">
                <router-link to="/categorias" class="nav-link">
                  <i class="nav-icon fas fa-sitemap"></i>
                  <p>Categorias</p>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="/productos" class="nav-link">
                  <i class="nav-icon fas fa-apple-alt"></i>
                  <p>Productos</p>
                </router-link>
              </li>
            </ul>
          </li>
          <li class="nav-item has-treeview">
            <a href="#" class="nav-link">
              <i class="nav-icon fas fa-users-cog"></i>
              <p>
                Administracion
                <i class="right fas fa-angle-left"></i>
              </p>
            </a>
            <ul class="nav nav-treeview">
              <li class="nav-item">
                <router-link to="/usuarios" class="nav-link">
                  <i class="nav-icon fas fa-users"></i>
                  <p>Usuarios</p>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="/roles" class="nav-link">
                  <i class="nav-icon fas fa-unlock-alt"></i>
                  <p>Roles</p>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="/permisos" class="nav-link">
                  <i class="nav-icon fas fa-key"></i>
                  <p>Permisos</p>
                </router-link>
              </li>
            </ul>
          </li>
          <li class="nav-item has-treeview">
            <a href="#" class="nav-link">
              <i class="nav-icon fas fa-clipboard"></i>
              <p>
                Reportes
                <i class="right fas fa-angle-left"></i>
              </p>
            </a>
            <ul class="nav nav-treeview">
              <li class="nav-item">
                <router-link to="/reportes" class="nav-link">
                  <i class="nav-icon fas fa-file-export"></i>
                  <p>Pedidos</p>
                </router-link>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
      <!-- /.sidebar-menu -->
    </div>
    <!-- /.sidebar -->
  </aside>
</template>

<script>
  export default {
    props: ['ruta'],
  }
</script>