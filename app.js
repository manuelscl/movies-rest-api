const express = require('express')
const movies = require('./movies.json')

const app = express()
app.use(express.json())
app.disable('x-powered-by')

app.get('/movies', (req, res) => {
  const { genre } = req.query
  if (genre) {
    const filteredMovies = movies.filter(
      movie => movie.genre.some(g => g.toLocaleLowerCase() === genre.toLocaleLowerCase())
    )
    return res.json(filteredMovies)
  }
  res.json({ movies })
})

const PORT = process.env.PORT ?? 1234
app.listen(PORT, () => {
  console.log(`Server listening on port http://localhost:${PORT}`)
})
