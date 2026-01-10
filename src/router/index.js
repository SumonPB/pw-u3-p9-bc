import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import HolaMundo from '@/views/HolaMundo.vue'
import PokemonView from '@/views/PokemonView.vue'
import PreguntaView from '@/views/PreguntaView.vue'

const routes = [
  {
    //carga eger, siempre cargada 
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    //carga bajo demanda unicamente se carga cundo se usa la pagina
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }, //manejo de varables dentro de la url existen dos formas pathvariable
  //pathvariable: /ruta/:variable o /ruta?variable=valor se refiere a una variable que se puede modificar dentro del codigo
  //request query/params usada para filtros de busqueda, no es necesario definirla en el router
  //cuando se usa uno y otro? pathvariable se usa como un identificador unico de un recurso ej: usuario, producto es decir para mandar identificadores unicos previos a la carga de la vista
  //request query/params se usa para filtros de busqueda ej: ordenar, paginar, buscar /estudiantes?anio=2025&provincia=pichincha
   {
    path: '/hola/:id',
    name: 'hola',
    component: HolaMundo
  },
  {
    path:'/pokemon',
    name:'pokemon',
    component: PokemonView
  },
  {
    path: '/pregunta',
    name: 'pregunta',
    component: () => import(/* webpackChunkName: "pregunta" */ '../views/PreguntaView.vue')
  }
]



const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
