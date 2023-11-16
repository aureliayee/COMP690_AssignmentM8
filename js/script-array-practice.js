//STEP 1
// let movies = new Array(5)
// movies[0] = 'Moana'
// movies[1] = 'Tangled'
// movies[2] = 'Mulan'
// movies[3] = 'Pocahontas'
// movies[4] = 'Frozen 2'
// console.log(movies[1])

//STEP 2
// let movies = new Array(5)
// movies[0] = 'Moana'
// movies[1] = 'Tangled'
// movies[2] = 'Mulan'
// movies[3] = 'Pocahontas'
// movies[4] = 'Frozen 2'
// console.log(movies[0])

//STEP 3
// let movies = new Array(5)
// movies[0] = 'Moana'
// movies[1] = 'Tangled'
// movies[2] = 'Mulan'
// movies[3] = 'Pocahontas'
// movies[4] = 'Frozen 2'

// movies.splice(2, 0, "Lion King")
// console.log(movies.length)

//STEP 4
// let movies = ['Moana', 'Tangled', 'Mulan', 'Pocahontas', 'Frozen 2']
// delete movies[1]
// movies.forEach((movie) => {
//     console.log(movie)
// })

//STEP 5
// let movies = ['Moana', 'Tangled', 'Mulan', 'Pocahontas', 'Frozen 2', 'Lion King', 'Toy Story']
// for (let movie in movies) {
//     console.log(movies[movie])
// }

//STEP 6
// let movies = ['Moana', 'Tangled', 'Mulan', 'Pocahontas', 'Frozen 2', 'Lion King', 'Toy Story']
// for (let movie of movies) {
//     console.log(movie)
// }

//STEP 7
// let movies = ['Moana', 'Tangled', 'Mulan', 'Pocahontas', 'Frozen 2', 'Lion King', 'Toy Story']
// movies.sort();
// for (let movie of movies) {
//     console.log(movie)
// }

//STEP 8
// let movies = ['Moana', 'Tangled', 'Mulan', 'Pocahontas', 'Frozen 2', 'Lion King', 'Toy Story']
// let leastFavMovies = ['Mulan 2','Lion King 2', 'Toy Story 2']

// console.log('Movies I like:')
// console.log('')
// for (let movie of movies) {
//     console.log(movie)
// }
// console.log('')
// console.log('Movies I regret watching:')
// console.log('')
// for (let leastFavMovie of leastFavMovies) {
//     console.log(leastFavMovie)
// }

//STEP 9
// let movies = ['Moana', 'Tangled', 'Mulan', 'Pocahontas', 'Frozen 2', 'Lion King', 'Toy Story']
// movies = movies.concat('Mulan 2','Lion King 2', 'Toy Story 2')
// movies.sort().reverse()
// for (let movie of movies) {
//     console.log(movie)
// }

//STEP 10
// let movies = ['Moana', 'Tangled', 'Mulan', 'Pocahontas', 'Frozen 2', 'Lion King', 'Toy Story']
// movies = movies.concat('Mulan 2','Lion King 2', 'Toy Story 2')
// movies.sort().reverse()
// console.log(movies[[movies.length-1]])

//STEP 11
// let movies = ['Moana', 'Tangled', 'Mulan', 'Pocahontas', 'Frozen 2', 'Lion King', 'Toy Story']
// movies = movies.concat('Mulan 2','Lion King 2', 'Toy Story 2')
// movies.sort().reverse()
// console.log(movies[[0]])

//STEP 12
// let movies = ['Moana', 'Tangled', 'Mulan', 'Pocahontas', 'Frozen', 'Lion King', 'Toy Story']
// let leastFavMovies = ['Mulan 2','Lion King 2', 'Toy Story 2']
// let movlID = 1
// leastFavMovies[0] = 'Moana'
// leastFavMovies[1] = 'Tangled'
// leastFavMovies[2] = 'Mulan'

// leastFavMovies.forEach((leastFavMovie) => {
//     console.log(`${String(movlID)}. ${leastFavMovie}`)
//     movlID++
// });

//STEP 13
// movies = [['Moana', 1], ['Tangled', 2], ['Mulan', 3], ['Pocahontas', 4], ['Frozen', 5]]

// for (let i = 0; i < movies.length; i++) {
// 	let movieType = movies[i].filter((item) => {
//     return typeof item === 'string'
//   })
//   console.log(`${movieType}`)
// }


//STEP 14
// let employees = ['ZAK', 'JESSICA', 'MARK', 'FRED', 'SALLY']
// const showEmployee = (names) => {
//   for (let i = 0; i < names.length; i++) {
//     console.log(names[i])
//   }
// }
// showEmployee(employees)

//STEP 15
// let arr = [58, '', 'abcd', true, null, false, 0]
// let filteredArr = arr.filter((item) => {
// 	return item !== false && item !== null && item !== 0 && item !== ""
// })
// console.log(filteredArr)


//STEP 16
// let numArr = [1,2,3,4,5,6,7,8,9,10]
// function randChoice(arr) {
//   return arr[Math.floor(Math.random() * arr.length)]
// }
// console.log(randChoice(numArr))


//STEP 17
let numArr = [1,2,3,4,5,6,700,8,9,10]
function largestNum(arr){
  return Math.max.apply(null, arr);
}
console.log(largestNum(numArr))