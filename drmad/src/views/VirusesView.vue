<template>
  <div>
    <h1>Les virus</h1>
    <p>Le tableau dans le store : {{ shopStore.viruses }}</p>
    <p>sous forme de liste avec certains champs</p>
    <ul>
      <li v-for="(virus, index) in shopStore.viruses" :key="index">{{virus.name}} : {{virus.price}}</li>
    </ul>

  </div>
</template>

<script setup>
import {useShopStore} from "@/stores/shop.js";
const shopStore = useShopStore()
</script>
