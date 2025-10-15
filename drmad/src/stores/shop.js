import { ref } from 'vue'
import { defineStore } from 'pinia'

import ShopService from '@/services/shop.service'

export const useShopStore = defineStore('shop', () => {

  const viruses = ref([])
  const shopUser = ref(null)

  async function shopLogin(data) {
    console.log('login');
    let response = await ShopService.shopLogin(data)
    if (response.error === 0) {
      shopUser.value = response.data
    }
    else {
      console.log(response.data)
    }
  }

  async function getAllViruses() {
    console.log('récupération des viruses');
    let response = await ShopService.getAllViruses()
    if (response.error === 0) {
      viruses.value = response.data
    }
    else {
      console.log(response.data)
    }
  }

  return { viruses, shopUser, shopLogin, getAllViruses}
})
