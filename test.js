require('dotenv').config();
const axios = require('axios');

const BASE_URL = process.env.EVOLUTION_BASE_URL;
const API_KEY = process.env.EVOLUTION_API_KEY;

if (!BASE_URL ||!API_KEY) {
 console.error('❌ Variables de entorno no cargadas. Revisa tu.env');
 process.exit(1);
}

console.log('🔌 Conectando a:', BASE_URL);

axios.get(`${BASE_URL}/instance/fetchInstances`, {
 headers: { 'apikey': API_KEY }
}).then(res => {
 console.log('✅ Conexión exitosa. Instancias:', JSON.stringify(res.data, null, 2));
 }).catch(err => {
 console.error('❌ Error:', err.response?.status, err.response?.data || err.message);
 });