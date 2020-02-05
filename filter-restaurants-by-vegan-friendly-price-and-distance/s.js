const filterRestaurants = (restaurants, veganFriendly, maxPrice, maxDistance) => {
  return  restaurants
    .filter(r => {
      if (veganFriendly === 1) {
        return r[2] === veganFriendly && r[3] <= maxPrice && r[4] <= maxDistance
      }
      return r[3] <= maxPrice && r[4] <= maxDistance
    })
    .sort((a, b) => {
      if (a[1] < b[1]) {
        return 1
      } else if (a[1] > b[1]) {
        return -1
      } else if (a[0] < b[0]) {
        return 1
      } else if (a[0] > b[0]) {
        return -1
      }
      return 0
    })
    .map(r => r[0])
}

// const restaurants = [[1,4,1,40,10],[2,8,0,50,5],[3,8,1,30,4],[4,10,0,10,3],[5,1,1,15,1]]
// const veganFriendly = 1
// const maxPrice = 50
// const maxDistance = 10
// console.log(filterRestaurants(restaurants, veganFriendly, maxPrice, maxDistance))

const restaurants = [[1,4,1,40,10],[2,8,0,50,5],[3,8,1,30,4],[4,10,0,10,3],[5,1,1,15,1]]
const veganFriendly = 0
const maxPrice = 50
const maxDistance = 10
console.log(filterRestaurants(restaurants, veganFriendly, maxPrice,
maxDistance))
