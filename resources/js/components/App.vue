<template>
  <div>
    <Navbar :ruta='ruta'></Navbar>

    <Sidebar :ruta='ruta'></Sidebar>

    <div class="content-wrapper">
      <transition name="slide-fade" mode="out-in">
        <router-view></router-view>
      </transition>
    </div>

    <!-- Control Sidebar -->
    <aside class="control-sidebar control-sidebar-dark">
      <!-- Control sidebar content goes here -->
      <div class="p-3">
        <h5>Title</h5>
        <p>Sidebar content</p>
      </div>
    </aside>
    <!-- /.control-sidebar -->

    <Footer></Footer>
  </div>
</template>

<script>
  import Navbar from './layout/Navbar';
  import Sidebar from './layout/Sidebar';
  import Footer from './layout/Footer';
  export default {
    props: ['ruta'],
    components: {
      Navbar,
      Sidebar,
      Footer,
    }
  }
</script>