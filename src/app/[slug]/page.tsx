import fs from "node:fs";
import path from "node:path";
import {
  type FrontmatterType,
  NOTES_PATH,
  noteFilePaths,
} from "@/utils/mdxUtils";
import { compileMDX } from "next-mdx-remote/rsc";
import { notFound } from "next/navigation";

export default async function Page({ params }: { params: { slug: string } }) {
  const filePath = path.join(NOTES_PATH, `${params.slug}.mdx`);
  let source: Buffer;
  try {
    source = fs.readFileSync(filePath);
  } catch {
    notFound();
  }
  const { content, frontmatter } = await compileMDX<FrontmatterType>({
    source: source,
    options: { parseFrontmatter: true },
  });
  return (
    <main className="min-h-screen p-24 max-w-prose container mx-auto">
      {content}
    </main>
  );
}

export async function generateStaticParams() {
  const getSlugParams = (filePaths: string[]) =>
    filePaths
      // Remove the .mdx extension
      .map((path) => path.replace(/\.mdx?$/, ""))
      .map((slug) => ({ params: { slug } }));
  const notePaths = getSlugParams(noteFilePaths);
  return notePaths;
}
