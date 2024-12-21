import { route, type Route } from "@std/http/unstable-route"
import { serveDir } from "@std/http/file-server"

const routes: Route[] = [
    {
        pattern: new URLPattern({ pathname: "/about" }),
        handler: () => new Response("About page"),
    },
    {
        pattern: new URLPattern({ pathname: "/users/:id" }),
        handler: (_req, _info, params) => new Response(params?.pathname.groups.id),
    },
    {
        method: [ "GET", "HEAD" ],
        pattern: new URLPattern({ pathname: "/api" }),
        handler: (req: Request) => new Response(req.method === 'HEAD' ? null : 'ok'),
    },
    {
        pattern: new URLPattern({ pathname: "/*" }),
        handler: (req: Request) => serveDir(req, { fsRoot: './dist' })
    },
]

function defaultHandler(_req: Request)
{
    return new Response("Not found", { status: 404 })
}

Deno.serve(route(routes, defaultHandler))
