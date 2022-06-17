<template>
  <div>
    <div class="card">
      <p class="text-h6">
        {{ formatedSelectedDate }} - kl
        {{ $store.state.selectedDateTime.selectedTime }}
      </p>
      <p class="text-h6"></p>
      <p class="my-0">Dr.Dropin {{ $store.state.selectedKlinikk.name }}</p>
      <p class="my-0">{{ $store.state.selectedKlinikk.address }}</p>
      <div class="mt-3">
        <iframe
          :src="$store.state.selectedKlinikk.gmaps"
          width="100%"
          height="200"
          frameborder="0"
          style="border: 0; border-radius: 8px"
          allowfullscreen=""
          aria-hidden="false"
          tabindex="0"
        >
        </iframe>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppointmentInfoCard',
  computed: {
    formatedSelectedDate() {
      return new Date(
        this.$store.state.selectedDateTime.selectedDate
      ).toLocaleDateString('no-No')
    },
  },
}
</script>

<style scoped>
.card {
  color: white;
  padding: 12px;
  border: 1px solid white;
  border-radius: 5px;
}
</style>
