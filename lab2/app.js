const express = require('express');
const hbs = require('hbs');
const fs = require('fs');
const axios = require('axios');
const app = express();


app.set('view engine', 'hbs');


hbs.registerPartials(__dirname + '/views/partials');

const apiKey = '0961f98deb99c714453292ba28cccfaf';

app.get('/', (req, res) => {
    fs.readFile('cities.json', (err, data) => {
        if (err) throw err;
        const cities = JSON.parse(data).cities;
        res.render('index', { cities });
    });
});
app.get('/weather/:city', async (req, res) => {
    const city = req.params.city;
    try {
        const response = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
        const weatherData = response.data;
        res.render('weather', {
            city: city,
            temperature: weatherData.main.temp,
            description: weatherData.weather[0].description
        });
    } catch (error) {
        res.send('Error fetching weather data. Please try again.');
    }
});

app.listen(3000, () => {
    console.log('Сервер запущено на порту 3000');
});
