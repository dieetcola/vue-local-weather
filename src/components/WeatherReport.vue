<script lang="ts" setup>
import { ref, type Ref, onMounted  } from "vue";

import WindDirection from "./WindDirection.vue";
import type { Coords } from "../types/index.ts";
import { useWeatherReport } from "../composables/useWeatherReport.ts";

const props = defineProps<{
  coords: Coords;
}>();

const { latitude, longitude } = props.coords;
const { data } = useWeatherReport({ latitude, longitude });

const formatDate = (dateString: Date): string => {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat("default", {
    dateStyle: "long",
    timeStyle: "short",
  }).format(date);
};
</script>

<template>
  <div>
    <article v-if="data && data.current" class="">
      <div class="basis-1/4 text-left">
        <img :src="data.current.condition.icon" class="h-16 w-16" />
      </div>
      <div class="basis-3/4 text-left">
        <h1 class="text-3xl font-bold">
          {{ data.current.condition.text }}
          <span class="text-2xl block">{{ data.current.temp_c }}&#8451;</span>
        </h1>
        <p>{{ data.location.country }}</p>
        <p>{{ data.location.name }} {{ data.location.region }}</p>
        <p>Precipitation: {{ data.current.precip_mm }}mm</p>
        <p>{{ formatDate(data.location.localtime) }}</p>
        <p>
          Wind: {{ data.current.wind_kph }} kph
          <WindDirection :degrees="data.current.wind_degree" />
        </p>
      </div>
    </article>
  </div>
</template>
