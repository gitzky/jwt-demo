
module.exports = {
    connectUrl: 'mongodb://localhost:27017/jwtdemo',
    port: 8000,
    baseApi: 'api',
    secret: 'jwt_secret',
    unless_path: [/\/api\/register/, /\/api\/login/]
}