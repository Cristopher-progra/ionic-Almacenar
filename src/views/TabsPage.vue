<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="telefono" href="/tabs/telefonos">
          <ion-icon aria-hidden="true" :icon="menuOutline" />
          <ion-label>Teléfonos</ion-label>
        </ion-tab-button>
        <ion-tab-button tab="nuevo" href="/tabs/nuevo">
          <ion-icon aria-hidden="true" :icon="serverSharp" />
          <ion-label>Inventario</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script>
import { IonTabBar, IonTabButton, IonTabs, IonLabel, IonIcon, IonPage, IonRouterOutlet }
from '@ionic/vue';
import { menuOutline, serverSharp } from 'ionicons/icons';
export default {
  name: 'TabsPage',
    data(){
      return {
        menuOutline, serverSharp
      }
    },
      components: {
        IonTabBar, IonTabButton, IonTabs, IonLabel, IonIcon, IonPage, IonRouterOutlet
    }
}
</script>
