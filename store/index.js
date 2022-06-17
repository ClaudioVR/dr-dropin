export const state = () => ({
  appointmentProgress: 0,
  selectedKlinikk: '',
  selectedDateTime: '',
})

export const getter = {
  getselectedDateTime(state) {
    return new Date(state.selectedDateTime.selectedDate).toLocaleDateString(
      'no-No'
    )
  },
}

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
  setDateTime(state, data) {
    state.selectedDateTime = data
  },
}
