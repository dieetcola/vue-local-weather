import { useFetch } from '@/composables/useFetch'

type WeatherData = {
  location: {
    localtime: Date
    name: string
    region: string
  }
  current: {
    temp_c: number
    temp_f: number
    precip_mm: number
    condition: {
      text: string
      icon: string
    }
    wind_degree: number
    wind_kph: number
    wind_mph: number
  }
}

interface Coords {
  latitude: number
  longitude: number
}

export const useWeatherReport = (coords: Coords) => {
  const { latitude, longitude } = coords

  const q = `${latitude},${longitude}`
  return useFetch<WeatherData>(
    `https://api.weatherapi.com/v1/current.json?key=${
      import.meta.env.VITE_APP_WEATHER_API_KEY
    }&q=${q}`
  )
}
