import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  routes: [
    {path: '/', component: require('./components/modules/dashboard/index').default},
    {path: '/pedidos', component: require('./components/modules/pedido/index').default},
    {path: '/categorias', component: require('./components/modules/categoria/index').default},
    {path: '/clientes', component: require('./components/modules/cliente/index').default},
    {path: '/permisos', component: require('./components/modules/permiso/index').default},
    {path: '/productos', component: require('./components/modules/producto/index').default},
    {path: '/reportes', component: require('./components/modules/reporte/index').default},
    {path: '/roles', component: require('./components/modules/rol/index').default},
    {path: '/usuarios', component: require('./components/modules/usuario/index').default},
  ],
  mode: 'history'
})