<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-title>Teléfonos</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content class="ion-padding">
        <!-- Se recorre la variable phones para llenar la lista -->
            <ion-list v-for="(phone, i) in phones" :key="i"
            lines="full">
            <ion-item>
                <ion-icon :icon="checkmarkCircle" color="success" slot="start"></ion-icon>
                <ion-label>
                {{ phone.name }}
                <span v-if="phone.data && phone.data.hasOwnProperty('color')">
                    ({{ phone.data.color }})
                </span>
                </ion-label>
            </ion-item>
            </ion-list>
        </ion-content>
    </ion-page>
</template>

<script>
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem,
    IonLabel, IonIcon } from '@ionic/vue';
import { checkmarkCircle } from 'ionicons/icons'

import axios from 'axios';
export default {
    name: 'TelefonosList',
    components: {
        IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonLabel,
        IonIcon
    },
    data() {
        return {
            checkmarkCircle,

            phone:[]
        }
    },
    methods: {
        // Este método consumirá el endpoint objects
        // para extraer los teléfonos registrados
        getTelefonos() {
            axios.get('https://api.restful-api.dev/objects')
                .then(response => {
                // Acá se guardan los datos en el arreglo phones
                this.phones = response.data
                // Acá se imprimen los datos en consola
                console.log(response.data);
            })
            .catch(error => {
            // Si ocurre un error se imprimirá en consola
            console.error(error);
            });
        }
    },
    mounted() {
        // Cuando el componente se renderice ejecutará este método
        this.getTelefonos()
    }
}
</script>