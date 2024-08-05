import fs from "node:fs";
import path from "node:path";

export interface FrontmatterType {
  title: string;
  startDate: string;
  growthStage: "seedling";
  type: "note";
}
export const NOTES_PATH = path.join(process.cwd(), "posts", "notes");

export const noteFilePaths = fs
  .readdirSync(NOTES_PATH)
  .filter((path) => /\.mdx?$/.test(path));
