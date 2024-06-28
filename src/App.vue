<script setup>
import { Suspense, defineAsyncComponent } from "vue";

const WeatherReportPicker = defineAsyncComponent(() =>
  import("./components/WeatherReportPicker.vue")
);
</script>

<template>
  <Suspense>
    <template #default>
      <WeatherReportPicker />
    </template>
    <template #fallback>
      <div>...Loading</div>
    </template>
  </Suspense>
</template>
