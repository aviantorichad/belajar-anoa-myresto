import axios from 'axios'
import { Resto } from './models/restaurant'

export class Api {
  static async loadRestaurant(): Promise<Resto[]> {
    return new Promise<Resto[]>((resolve, reject) => {
      axios
        .get('https://developers.zomato.com/api/v2.1/search?count=10', {
          headers: {
            'user-key': 'faf4928eb55db868666b7ca816532aae'
          }
        })
        .then(response => {
          const restaurants = response.data.restaurants.map(
            ({ restaurant }: any) => {
              return {
                id: restaurant.id,
                name: restaurant.name,
                address: restaurant.location.address
              }
            }
          )
          resolve(restaurants)
        })
        .catch(error => {
          reject(error)
        })
    })
  }
}
