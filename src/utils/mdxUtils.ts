import path from "node:path";
import fs from "node:fs";

const NOTES_PATH = path.join(process.cwd(), "posts", "notes");

export const noteFilePaths = fs
    .readdirSync(NOTES_PATH)
    .filter((path) => /\.mdx?$/.test(path));
