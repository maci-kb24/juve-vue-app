<template>
  <v-container fluid class="hero-container h-100">
    <v-row align="center" justify="center">
      <v-col cols="3">
        <div style="position: relative; z-index: 1">
          <Transition name="slide-fade" appear>
            <div>
              <h1>
                38 Seria A <br />
                Titles
              </h1>
              <h2>10 Copa Italia Titles</h2>
            </div>
          </Transition>
        </div>
        <Transition name="slide-stripes" appear>
          <div>
            <div class="stripe bg-white" style="left: 36%"></div>
            <div class="stripe bg-black" style="left: 44.9%"></div>
            <div class="stripe bg-white" style="right: 37.9%"></div>
          </div>
        </Transition>
      </v-col>
      <v-col cols="3">
        <Transition name="slide-img" appear>
          <div style="position: relative; z-index: 1">
            <img src="../assets/images/players/Att/0x0.png" />
          </div>
        </Transition>
      </v-col>
    </v-row>
    <v-row>
      <v-col> </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
// import { ref } from "vue";

// const show = ref(true);
</script>

<style scoped>
.hero-container {
  background-color: #cccccc;
}
.stripe {
  width: 7rem;
  height: 76vh;
  position: absolute;
  overflow: hidden;
  transform: skewX(-20deg);
  top: 8%;
}

.slide-fade-enter-active {
  transition: all 1s ease-in-out;
}
/* 
.slide-fade-leave-active {
  transition: all 0.8s ease-out;
} */

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(-400%);
}

.slide-stripes-enter-active {
  transition: all 0.6s ease-in-out;
}

/* .slide-stripes-leave-active {
  transition: all 0.8s ease-out;
} */

.slide-stripes-enter-from,
.slide-stripes-leave-to {
  transform: translateX(-400%);
}

.slide-img-enter-active {
  transition: all 1s ease-in;
}
/* 
.slide-img-leave-active {
  transition: all 0.8s ease-out;
} */

.slide-img-enter-from,
.slide-img-leave-to {
  transform: translateY(-200%);
}
</style>
