const isDev = process.env.NODE_ENV === 'development';

export const STABLES = {
    API_URL: isDev ? 'http://localhost:3000/api' : "https://augusto.up.railway.app/api",
    UPLOADS_URL: isDev ? 'http://localhost:3000/media' : "https://augusto.up.railway.app/media",
}