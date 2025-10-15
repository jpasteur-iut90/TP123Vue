<template>
  <div>
    <h1>Login</h1>

    <span>login</span><input v-model="login">
    <span>password</span><input v-model="password">
    <button @click="shopStore.shopLogin({login, password})">Login</button>
    <p v-if="shopStore.shopUser">{{shopStore.shopUser}}</p>
  </div>

</template>

<script setup>
import {ref} from "vue";
import {useShopStore} from "@/stores/shop.js";

const login = ref('')
const password = ref('')
const shopStore = useShopStore()

</script>
