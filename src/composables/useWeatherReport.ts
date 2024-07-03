import { useFetch } from '@/composables/useFetch'
import type { Coords, WeatherData } from '../types/index'

export const useWeatherReport = (coords: Coords) => {
  const { latitude, longitude } = coords

  const q = `${latitude},${longitude}`
  return useFetch<WeatherData>(
    `https://api.weatherapi.com/v1/current.json?key=${
      import.meta.env.VITE_APP_WEATHER_API_KEY
    }&q=${q}`
  )
}
