import fastify from "fastify";

const app = fastify();

app.get('/', () => {
    return 'home'
})

app.get('/teste', () => {
    return '<TESTE>'
})

app.listen({port: 3333}).then(() => {
        console.log(" HTTP server running! ")
});