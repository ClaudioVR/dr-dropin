<template>
  <div>
    <div class="outer">
      <div class="capsule red">
        wrapper
        <v-img
          id="image"
          height="500"
          width="1000"
          src="https://cdn.sanity.io/images/5te9o5bn/development/14bb1d5eaef3b7b8cf81fb573f2a1a383c5165d2-6481x4321.jpg?q=75&fit=max&auto=format&dpr=0.5"
        ></v-img>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CapsuleImage',
}
</script>

<style scoped>
.outer {
  /* background-color: red; */
  height: 500px;
  display: flex;
  justify-items: center;
  align-items: center;
}
.capsule {
  /* background-color: red; */
  overflow: hidden;
  border: none;
  color: black;
  border-radius: 150px;
  height: 300px;
  width: 500px;
  transform: rotate(-45deg);
  /* margin: 100px 150px 100px 0; */
}

#image {
  transform: rotate(45deg) translateX(-90px) translateY(-60px);
}
</style>
