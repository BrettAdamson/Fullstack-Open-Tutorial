require('dotenv').config({ path: __dirname + '/../config.env' })
// D:\Projects\React Projects\Fullstack-Open-Tutorial\part_2\utils\config.js
console.log(process.env)
const PORT = process.env.PORT
const MONGODB_URI = process.env.MONGODB_URI

module.exports = {
  MONGODB_URI,
  PORT
}