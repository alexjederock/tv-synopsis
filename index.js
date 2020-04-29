const express = require('express')
const app = express()
const showdata = require('./showdata')

app.use(express.static('public'))
app.set('view engine', 'pug')

app.get('/', (request, response) =>
{
  return response.render('index', { showdata })
})

app.get('/season/:num', (request, response) => {
  const { num } = request.params
  const season = showdata.seasons.find(season => parseInt(num) === season.number)

  return response.render('season', { season })
})

app.all('*', (request, response) =>
{
  return response.sendStatus(404)
})
app.listen(1221, () =>
{
  console.log('Listening on port 1221...') // eslint-disable-next-line no-console
})
