const baseUrl = process.env.NODE_ENV === "production" 
? 'https://www.wearetiny.io' 
: 'http://localhost:3000';

export default baseUrl;