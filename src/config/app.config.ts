

export const AppConfig = () => ({
    enviroment: process.env.NODE_ENV || 'development',
    mongodb: process.env.DB_URI,
    port: process.env.PORT || 3000,
})