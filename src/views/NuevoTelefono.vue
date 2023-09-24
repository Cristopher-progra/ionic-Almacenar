<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-title>Inventario</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content class="ion-padding">
            <ion-grid>
                <ion-row>
                    <ion-col size="12">
                        <ion-input
                        label-placement="stacked"
                        fill="outline"
                        shape="round"
                        color="success"
                        label="ID"
                        :disabled="true"
                        v-model="id">
                        </ion-input>
                    </ion-col>
                    <ion-col size="12">
                        <ion-input label-placement="stacked"
                        fill="outline"
                        shape="round"
                        color="success"
                        label="Nombre del teléfono"
                        v-model="phone.name">
                    </ion-input>
                    </ion-col>
                    <ion-col size="12">
                        <ion-input
                            label-placement="stacked"
                            fill="outline"
                            shape="round"
                            color="success"
                            label="Año"
                            type="number"
                            v-model="phone.data.year">
                        </ion-input>
                        </ion-col>
                    <ion-col size="12">
                        <ion-input
                        label-placement="stacked"
                        fill="outline"
                        shape="round"
                        color="success"
                        label="Precio"
                        type="number"
                        v-model="phone.data.price">
                        </ion-input>
                    </ion-col>
                    <ion-col size="12">
                        <ion-input
                        label-placement="stacked"
                        fill="outline"
                        shape="round"
                        color="success"
                        label="CPU model"
                        v-model="phone.data['CPU model']">
                        </ion-input>
                    </ion-col>
                    <ion-col size="12">
                        <ion-input
                        label-placement="stacked"
                        fill="outline"
                        shape="round" color="success"
                        label="Hard disk size"
                        v-model="phone.data['Hard disk size']">
                        </ion-input>
                    </ion-col>
                    <ion-col size="4">
                        <ion-button
                        shape="round"
                        color="primary"
                        expand="full"
                        @click="agregarTelefono">Agregar</ion-button>
                    </ion-col>
                    <ion-col size="4">
                        <ion-button
                        shape="round"
                        color="success"
                        expand="full"
                        @click="editarTelefono">Editar</ion-button>
                    </ion-col>
                    <ion-col size="4">
                        <ion-button
                        shape="round"
                        color="danger"
                        expand="full"
                        @click="eliminarTelefono">Eliminar
                        </ion-button>
                    </ion-col>
                </ion-row>
            </ion-grid>
            <!-- Toast para mensajes -->
            <ion-toast
            :icon="informationOutline"
            :message="toastMessage"
            :duration="2000"
            :isOpen="errorState"
            @didDismiss="showToast(false)"></ion-toast>
        </ion-content>
    </ion-page>
</template>

<script>
import {
    IonPage, IonHeader, IonToolbar, IonTitle, IonContent,
    IonGrid, IonRow, IonCol, IonInput, IonButton, IonToast
    } from '@ionic/vue';

import { informationOutline } from 'ionicons/icons'
import axios from 'axios'

export default {
    name: 'NuevoTelefono',
    components: {
    IonPage, IonHeader, IonToolbar, IonTitle, IonContent,
    IonGrid, IonRow, IonCol, IonInput, IonButton, IonToast
    },
    data() {
        return {
            // Esta variable permitirá eliminar y editar un teléfono
            id: 0,
            // Esta variable guardará los datos del formulario
            phone: {
                "name": "Android 2023",
                "data": {
                    "year": 2023,
                    "price": 2500,
                    "CPU model": "Intel Core i10",
                    "Hard disk size": "1 TB"
                }
            },
                // Esta variable determina la visibilidad del toast
                errorState: false,
                // Esta variable almacena el mensaje a mostrar en el toast
                toastMessage: '',
                // Es el icono del toast
                informationOutline
        }
    },
    methods: {
        agregarTelefono() {
            // Se consume endpoint para insertar un teléfono
            axios.post('https://api.restful-api.dev/objects',
            this.phone).then(response => {
                console.log(response.data)
                this.id = response.data.id
                this.showToast(true, 'Teléfono agregado')
            })
            .catch(error => console.error(error));
        },
        // Este método controla la visibilida del toast
        showToast(state, message){
            this.errorState = state
            this.toastMessage = message
        },
        editarTelefono() {
        // Se consume endpoint para editar teléfono por id
            if (this.id !== 0) {
                axios.put(`https://api.restful-api.dev/objects/${this.id}`, this.phone)
                .then(response => {
                    console.log(response.data);
                    this.showToast(true, 'Teléfono actualizado')
                })
                .catch(error => {
                    console.error(error);
                });
            } else {
                this.showToast(true, 'El id de teléfono no existe')
            }
        },
        eliminarTelefono() {
            // Se consume endpoint para eliminar teléfono por id
            if (this.id !== 0) {
                axios.delete(`https://api.restful-api.dev/objects/${this.id}`)
                .then(response => {
                    console.log(response.data);
                    this.showToast(true, 'Teléfono eliminado')
                    this.id = 0
                })
            .catch(error => {
                console.error(error);
            });
        } else {
            this.showToast(true, 'El id de teléfono no existe')
            }
        },
    }
}
</script>