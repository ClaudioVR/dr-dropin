export const state = () => ({
  appointmentProgress: 0,
})

export const mutations = {
  setProgress(state, data) {
    state.appointmentProgress = data
  },
  resetProgress(state) {
    state.appointmentProgress = 0
  },
}
