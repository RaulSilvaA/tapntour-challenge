import { defineStore } from 'pinia'
import axios from 'axios'

const tour_endpoint = 'https://tapntour-wk-db.glyfo.workers.dev/api/tours'
const tourDetail_endpoint = 'https://tapntour-wk-db.glyfo.workers.dev/api/tours/detail/'

export const useTourStore = defineStore({
  id: 'tour',
  state: () => ({
    tours: [],
    tour: null,
    loading: false,
    error: null
  }),
  getters: {
    getTourbyCountry: (state) => {
    }
  }, 
  actions: {
    async fetchTours() {
      this.tours = []
      this.loading = true
      try {
        this.tours =  await axios.post(tour_endpoint)
        .then((response) => response.data) 

      } catch (error) {
        this.error = error
      } finally {
        this.loading = false
      }
    },
    async fetchTourbyId(id) {
      this.tour = null
      this.loading = true
      try {
        this.tour = await axios.post(tourDetail_endpoint + id)
        .then((response) => response.data)
      } catch (error) {
        this.error = error
      } finally {
        this.loading = false
      }
    }
  }
})