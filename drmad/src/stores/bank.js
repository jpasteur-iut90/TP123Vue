import { ref} from 'vue'
import { defineStore } from 'pinia'

import BankAccountService from '@/services/bankaccount.service'

export const useBankStore = defineStore('bank', () => {

  const accountAmount = ref(0)
  const accountTransactions = ref([])

  async function getAccountAmount( number) {
    console.log('get account amount');
    let response = await BankAccountService.getAccountAmount(number)
    if (response.error === 0) {
      accountAmount.value = response.data
    }
    else {
      console.log(response.data)
    }
  }

  async function getAccountTransactions( number) {
    console.log('get account transactions');
    let response = await BankAccountService.getAccountTransactions(number)
    if (response.error === 0) {
      accountTransactions.value = response.data
    }
    else {
      console.log(response.data)
    }
  }

  return { accountAmount, accountTransactions, getAccountAmount, getAccountTransactions }
})
