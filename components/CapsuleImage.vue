<template>
  <div>
    <div class="pa-3">
      <div class="outer">
        <div class="capsule">
          wrapper
          <v-img id="image" height="500" width="1000" :src="imageSrc"></v-img>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CapsuleImage',
  props: {
    imageSrc: {
      type: String,
      default:
        'https://cdn.sanity.io/images/5te9o5bn/development/14bb1d5eaef3b7b8cf81fb573f2a1a383c5165d2-6481x4321.jpg?q=75&fit=max&auto=format&dpr=0.5',
    },
  },
}
</script>

<style scoped>
.outer {
  margin: 0 auto;
  height: 400px;
  width: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}
.capsule {
  overflow: hidden;
  border: none;
  color: black;
  border-radius: 150px;
  height: 300px;
  width: 98%;
  transform: rotate(-45deg);
}

#image {
  transform: rotate(45deg) translateX(-90px) translateY(-60px);
}
</style>
