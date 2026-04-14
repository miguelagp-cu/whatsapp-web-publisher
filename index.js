const axios = require('axios');
require('dotenv').config();

async function checkAPI() {
 const res = await axios.get(`${process.env.EVOLUTION_API_URL}instance/fetchInstances`, {
 headers: { apikey: process.env.EVOLUTION_API_KEY }
 });
 console.log('API activa:', res.status);
}

checkAPI();
