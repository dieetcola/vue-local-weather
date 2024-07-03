<script lang="ts" setup>
import { ref, type Ref,  onMounted, defineAsyncComponent } from "vue";

import type { Coords } from "../types/index.ts";
const WeatherReport = defineAsyncComponent(() => import("./WeatherReport.vue"));

const coords: Ref<Coords | undefined> = ref();
const geolocationBlockedByUser: Ref<boolean> = ref(false);

const getGeolocation = async (): Promise<void> => {
  await navigator.geolocation.getCurrentPosition(
    async (position: { coords: Coords }) => {
      coords.value = position.coords;
    },
    (error: { message: string }) => {
      geolocationBlockedByUser.value = true;
      console.error(error.message);
    }
  );
};

onMounted(async () => {
  await getGeolocation();
});
</script>

<template>
  <WeatherReport v-if="coords && !geolocationBlockedByUser" :coords="coords" />
  <div v-if="geolocationBlockedByUser">User denied access</div>
</template>
