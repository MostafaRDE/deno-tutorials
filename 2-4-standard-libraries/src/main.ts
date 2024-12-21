import { ensureFile, copy, ensureDir, move } from "@std/fs"

await ensureFile("example.txt")

await copy("example.txt", "example_copy.txt")

await ensureDir("subdir")

await move("example_copy.txt", "subdir/example_copy.txt")
