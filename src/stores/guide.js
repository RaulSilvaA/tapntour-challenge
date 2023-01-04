import { defineStore } from 'pinia'
import axios from 'axios'

const guide_endpoint = 'https://tapntour-wk-db.glyfo.workers.dev/api/guides'

export const useGuideStore = defineStore({
  id: 'guide',
  state: () => ({
    guides: [],
    guide: null,
    loading: false,
    error: null
  }),
  getters: {
    getTourbyCountry: (state) => {
    }
  }, 
  actions: {
    async fetchGuides() {
      this.guides = []
      this.loading = true
      try {
        this.guides =  await axios.post(guide_endpoint)
        .then((response) => response.data) 

      } catch (error) {
        this.error = error
      } finally {
        this.loading = false
      }
    },
    async fetchGuidebyId(id) {
      this.guide = null
      this.loading = true
      try {
        this.post = await axios.post(guidebyid_endpoint)
        .then((response) => response)
      } catch (error) {
        this.error = error
      } finally {
        this.loading = false
      }
    }
  }
})