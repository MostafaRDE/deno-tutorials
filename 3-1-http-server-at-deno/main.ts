// Default: HTTP 2
Deno.serve({
    hostname: '127.0.0.1',
    port: 3000,

}, async (req) =>
{
    const url = new URL(req.url)

    const body = await req.json()

    switch (url.pathname)
    {
        // deno-lint-ignore no-fallthrough
        case '/': {
            switch (req.method)
            {
                case 'GET': {
                    return new Response('Hello, world!')
                }
                case 'POST': {
                    return new Response(`Hello from POST method, my name is "${ body.name }"!`)
                }
            }
        }
        case '/test': {
            switch (req.method)
            {
                case 'GET': {
                    return new Response(`Hello, ${ url.searchParams.get('my-name') }!`)
                }
            }
        }
    }

    return new Response('Data not found', { status: 404 })
})
