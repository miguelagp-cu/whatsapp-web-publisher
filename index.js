const axios = require('axios');
require('dotenv').config();

const EVOLUTION_BASE_URL = process.env.EVOLUTION_BASE_URL;
const EVOLUTION_API_KEY = process.env.EVOLUTION_API_KEY;

const client = axios.create({
 baseURL: EVOLUTION_BASE_URL,
 headers: {
 'Authorization': `Bearer ${EVOLUTION_API_KEY}`,
 'Content-Type': 'application/json'
 }
});

module.exports = client;