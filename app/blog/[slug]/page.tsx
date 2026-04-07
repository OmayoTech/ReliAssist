import React from "react";
import { Linkedin, Instagram, Twitter } from "lucide-react";
import Link from "next/link";
import { host } from "@/lib/config";

const MOCK_POST = {
  title: "Building your",
  titleHighlight: "API Stack",
  category: "Design",
  author: {
    name: "Jason Francisco",
    profilePicture: "https://i.pravatar.cc/150?u=jason",
  },
  date: "August 20, 2022",
  coverImage: {
    url: "https://images.unsplash.com/photo-1486406146926-c627a92fb1ab",
  },
  content: {
    html: `
      <p>Traveling is an enriching experience...</p>
      <div class="custom-quote">
        “ Traveling can expose you to new environments... ”
      </div>
      <img src="https://images.unsplash.com/photo-1503220317375-aaad61436b1b" alt="Traveler" class="content-image" />
      <h3>Pack Lightly and Smartly</h3>
      <p>Packing can be a daunting task...</p>
    `,
  },
};

async function getSinglePost(slug: string) {

  const query = `
    query PostDetails($host: String!, $slug: String!) {
      publication(host: $host) {
        post(slug: $slug) {
          title
          content { html }
          coverImage { url }
          publishedAt
          author { name, profilePicture }
          tags{
            name
          }
        }
      }
    }
  `;

  try {
    const response = await fetch("https://gql.hashnode.com", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        query,
        variables: { host, slug },
      }),
    });

    const json = await response.json();


    return json.data.publication.post;
  } catch (err) {
    console.error("NETWORK ERROR:", err);
    return null;
  }
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParam = await params;
  const slug = resolvedParam.slug;
  const isDemo = false;
  const post = isDemo ? MOCK_POST : await getSinglePost(slug);

  if (!post)
    return <div className="text-center py-20 font-bold">Post not found</div>;

  return (
    <main className="min-h-screen bg-white pb-20">
      {/* Header Section */}
      <header className="pt-16 pb-12 flex flex-col items-center text-center px-4">
        <span className="px-4 py-1 rounded-full bg-[#F9EDFE] text-[#7C3AED] text-xs font-medium mb-6">
          {post.category || (post.tags && post.tags[0]?.name)}
        </span>

        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 tracking-tight mb-8">
          {post.title}{" "}
          <span className="italic font-serif text-grad">
            {post.titleHighlight || ""}
          </span>
        </h1>

        <div className="flex items-center gap-3 mb-6">
          <div className="w-8 h-8 rounded-full overflow-hidden relative">
            <img
              src={post.author.profilePicture}
              alt={post.author.name}
              className="object-cover w-full h-full"
            />
          </div>
          <p className="text-sm text-gray-600">
            <span className="font-semibold text-gray-900">
              {post.author.name}
            </span>
            <span className="mx-2 text-gray-300">|</span>
            {new Date(post.publishedAt).toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
          </p>
        </div>

        <div className="flex gap-4 text-gray-400">
          <Link href={"https://www.linkedin.com/company/reliassist"}>
            <Linkedin className="w-5 h-5 cursor-pointer hover:text-gray-600" />
          </Link>
          <Link
            href={
              "https://www.instagram.com/reliassist.uk?igsh=MWQ5NDNqMGV0eTNoNA%3D%3D"
            }
          >
            <Instagram className="w-5 h-5 cursor-pointer hover:text-gray-600" />
          </Link>
          <Link href={"https://x.com/reliassist?s=11"}>
            <Twitter className="w-5 h-5 rounded-full cursor-pointer hover:text-gray-600" />
          </Link>
        </div>
      </header>

      <div className="max-w-5xl mx-auto px-4 mb-16">
        <div className="relative aspect-[16/9] w-full rounded-3xl overflow-hidden border-[12px] border-gray-50 shadow-sm">
          <img
            src={post.coverImage.url}
            alt="Cover"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Article Content */}
      <article className="max-w-3xl mx-auto px-4">
        <div
          className="prose lg:prose-xl max-w-none 
      prose-p:text-gray-600 
      prose-headings:text-gray-900 
      prose-headings:font-bold
      prose-img:rounded-3xl
      prose-blockquote:border-l-4 
      prose-blockquote:border-purple-500"
          dangerouslySetInnerHTML={{ __html: post.content.html }}
        />
      </article>
    </main>
  );
}
