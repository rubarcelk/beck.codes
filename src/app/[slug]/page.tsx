import { noteFilePaths } from "@/utils/mdxUtils";
export default function Page({ params }: { params: { slug: string } }) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {params.slug}
    </main>
  );
}

export const dynamicParams = false;
export async function generateStaticParams() {
  const getSlugParams = (filePaths: string[]) =>
    filePaths
      // Remove the .mdx extension
      .map((path) => path.replace(/\.mdx?$/, ""))
      .map((slug) => ({ params: { slug } }));
  const notePaths = getSlugParams(noteFilePaths);
  console.log("Found mdx files: ", notePaths);
  return notePaths;
}
