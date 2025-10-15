<template>
   <h1>Welcome to DrMad app</h1>
    <router-view></router-view>
</template>

<script setup>
import {onMounted} from "vue";
import {useShopStore} from "@/stores/shop.js";

const shopStore = useShopStore()

// Dès que l'appli est lancée, on va chercher la liste des virus pour la stocker dans le store
onMounted(() => {
  shopStore.getAllViruses()
})
</script>

<style scoped></style>
