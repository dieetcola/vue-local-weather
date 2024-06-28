<script setup>
import { ref, Suspense, defineAsyncComponent, onErrorCaptured } from "vue";

const WeatherReportPicker = defineAsyncComponent(() =>
  import("./components/WeatherReportPicker.vue")
);

const errMsg = ref(null);
onErrorCaptured((e) => {
  errMsg.value = "something went wrong :(";
  return tree;
});
</script>

<template>
  <div v-if="errMsg">{{ errMsg }}</div>
  <Suspense v-else>
    <template #default>
      <WeatherReportPicker />
    </template>
    <template #fallback>
      <div>...Loading</div>
    </template>
  </Suspense>
</template>
