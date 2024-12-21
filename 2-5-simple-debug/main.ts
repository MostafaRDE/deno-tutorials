import { Hono } from 'hono'

const app = new Hono()

app.get('/', (c) =>
{
    return c.text('Hello Deno!')
})
app.get('/test', (c) => c.text('You can access: /static/hello.txt'))

Deno.serve(app.fetch)
