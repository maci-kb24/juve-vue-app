<template>
  <div class="hero-container">
    <v-container fluid class="pa-0">
      <v-row justify="center" class="h-screen pt-16">
        <v-col cols="3">
          <div
            style="position: relative; z-index: 1; bottom: -23%; left: 38%"
            class="hero-title"
          >
            <Transition name="slide-fade" appear>
              <div>
                <div>
                  <h1 class="text-white text-h1 font-weight-bold">
                    <span>38</span>
                  </h1>
                </div>
                <div class="mt-4">
                  <h3>
                    <span class="text-h3 text-white font-weight-bold"
                      >SERIA A</span
                    >
                  </h3>
                </div>
                <div class="mt-4">
                  <h3>
                    <span class="text-h3 text-white font-weight-bold"
                      >CHAMPIONSHIPS</span
                    >
                  </h3>
                </div>
              </div>
            </Transition>
          </div>
          <div class="d-none d-md-block">
            <div class="stripe bg-white" style="left: 36%"></div>
            <div class="stripe bg-black" style="left: 44.7%"></div>
            <div class="stripe bg-white" style="right: 38.2%"></div>
          </div>
        </v-col>
        <v-col cols="3">
          <Transition name="slide-img" appear>
            <div style="position: relative; z-index: 1; left: -10%">
              <img
                src="../../assets/images/players/Att/0x0.png"
                class="w-100"
              />
            </div>
          </Transition>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup></script>

<style scoped>
.hero-container {
  background-color: #cccccc;
}
.hero-container .hero-title h1 span {
  background-color: #ef484d;
}
.hero-container .hero-title h3 span {
  background-color: #ef484d;
}
.stripe {
  width: 7rem;
  height: 20%;
  position: absolute;
  overflow: hidden;
  transform: skewX(-20deg);
  top: 1.9%;
}

.slide-fade-enter-active {
  transition: all 0.6s ease-in;
}

.slide-fade-leave-active {
  transition: all 0.6s ease-out;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(-400%);
}

.slide-img-enter-active {
  transition: all 0.6s ease-in;
}

.slide-img-leave-active {
  transition: all 0.6s ease-out;
}

.slide-img-enter-from,
.slide-img-leave-to {
  transform: translateY(-400%);
}
</style>
