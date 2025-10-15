<template>
  <div>
    <h1>Account amount</h1>

    <span>account number</span><input v-model="number">
    <button @click="bankStore.getAccountAmount(number)">Get amount</button><button @click="bankStore.getAccountTransactions(number)">Get transactions</button>
    <p>available amount: {{bankStore.accountAmount}}</p>
    <hr />
    <p>passed transactions: {{ bankStore.accountTransactions }}</p>

    <ul>
      <li v-for="i in 188">
        <p>{{ bankStore.getAccountAmount() }}</p>
        <p>{{  }} </p>
      </li>
    </ul>

  </div>

</template>

<script setup>
import {ref} from "vue";
import {useBankStore} from "@/stores/bank.js";

const number = ref('')
const bankStore = useBankStore()
const transaction = bankStore.getAccountTransactions
</script>
