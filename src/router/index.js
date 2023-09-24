import { createRouter, createWebHistory } from '@ionic/vue-router';
import TabsPage from '../views/TabsPage.vue'
import TelefonosList from '../views/TelefonosList.vue'
import NuevoTelefono from '../views/NuevoTelefono.vue'

const routes = [
  {
    path: '/',
    redirect: '/tabs/telefonos'
  },
  {
    path: '/tabs/',
    component: TabsPage,
    children: [
      {
        path: 'telefonos',
        component: TelefonosList
      },
      {
      path: 'nuevo',
      component: NuevoTelefono
      }
    ]
  }
]
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})
export default router
