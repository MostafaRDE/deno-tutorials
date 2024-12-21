import { assertEquals } from "jsr:@std/assert"
import { expect } from "jsr:@std/expect"

Deno.test("simple test", () =>
{
    const x = 1 + 2
    expect(x).toBe(3)
})

import { delay } from "jsr:@std/async"

Deno.test("async test", async () =>
{
    const x = 1 + 2
    await delay(100)
    expect(x).toBe(3)
})

Deno.test({
    name: "read file test",
    permissions: { read: true },
    fn: () =>
    {
        const data = Deno.readTextFileSync("./somefile.txt")
        expect(data).toBe("expected content")
    },
})
