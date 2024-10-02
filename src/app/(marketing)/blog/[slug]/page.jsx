

import Title from "@/components/PagesComponents/TitlePage";
import { POST } from "../page";
import Link from "next/link";

export function generateMetadata({ params }) {
  const post = POST.find((post) => post.slug === params.slug);

  if (!post) {
    return {
      title: "Post not found",
      description: "The post you are looking for does not exist.",
    };
  }

  return {
    title: `Blog - ${post.title}`,
    description: post.content.slice(0, 150), // Optionally provide the first 150 chars of the content
  };
}

const Slug = ({ params }) => {
  const post = POST.find((post) => post.slug === params.slug);

  if (!post) {
    return <p>Post not found</p>; // Fallback in case no post is found
  }

  return (
    <>
      <Title title={post.title} />
      <p className="text-center">{post.content}</p>
      <div className="text-center mb-5">
        <Link
          href="/blog"
          className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded"
        >
          Volver
        </Link>
      </div>
    </>
  );
};

export default Slug;
