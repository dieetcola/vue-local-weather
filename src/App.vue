<script setup>
import { defineAsyncComponent } from "vue";

const WeatherReportPicker = defineAsyncComponent(() =>
  import("./components/WeatherReportPicker.vue")
);
</script>

<template>
  <WeatherReportPicker />
</template>
