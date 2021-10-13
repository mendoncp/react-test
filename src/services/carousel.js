import 'regenerator-runtime/runtime.js'
import { BASE_URL, API_IMG } from '../constants'

export const fetchImages = async (type) => {
  const URL = `${BASE_URL}${API_IMG}?animalType=${type}`
  const response = await fetch(URL)
  const images = await response.json()
  if (type === 'ALL') { return [...images.response.images.catsList, ...images.response.images.sharksList] }
  if (type === 'catsList') { return images.response.images.catsList }
  return images.response.images.sharksList
}
