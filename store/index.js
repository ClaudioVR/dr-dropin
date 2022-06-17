export const state = () => ({
  appointmentProgress: 0,
  selectedKlinikk: '',
})

export const mutations = {
  setProgress(state, data) {
    state.appointmentProgress = data
  },
  resetProgress(state) {
    state.appointmentProgress = 0
  },
  setSelectedKlinikk(state, data) {
    state.selectedKlinikk = data
  },
}
