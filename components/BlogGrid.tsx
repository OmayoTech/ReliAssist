"use client";

import React, { useEffect, useState } from "react";
import BlogCard from "./BlogCard";
import { host } from "@/lib/config";

const BlogCardSkeleton = () => (
  <div className="flex flex-col animate-pulse">
    <div className="h-[240px] w-full bg-gray-200 rounded-2xl mb-5" />
    <div className="h-4 w-20 bg-gray-200 rounded mb-3" />
    <div className="h-7 w-full bg-gray-200 rounded mb-2" />
    <div className="h-7 w-2/3 bg-gray-200 rounded mb-3" />
    <div className="h-4 w-full bg-gray-100 rounded mb-1" />
    <div className="h-4 w-4/5 bg-gray-100 rounded mb-6" />
    <div className="flex items-center gap-3">
      <div className="w-8 h-8 bg-gray-200 rounded-full" />
      <div className="space-y-2">
        <div className="h-3 w-24 bg-gray-200 rounded" />
        <div className="h-2 w-16 bg-gray-100 rounded" />
      </div>
    </div>
  </div>
);

const EmptyState = ({ category }: { category: string }) => (
  <div className="flex flex-col items-center justify-center py-20 px-4 w-full">
    {/* You can use a ghost icon or a simple illustration here */}
    <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mb-6">
      <svg className="w-10 h-10 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10l4 4v10a2 2 0 01-2 2z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M14 3v5h5" />
      </svg>
    </div>
    <h3 className="text-xl font-bold text-gray-900 mb-2">No articles found</h3>
    <p className="text-gray-500 text-center max-w-sm">
      We haven't published any articles under <span className="font-semibold text-purple-600">"{category}"</span> yet. Please check back later!
    </p>
  </div>
);

const BlogGrid = ({ filterCategory }: { filterCategory: string }) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHashnodePosts = async () => {
      const query = `
        query Publication {
          publication(host: "${host}") {
            posts(first: 6) {
              edges {
                node {
                  id
                  title
                  slug
                  brief
                  coverImage { url }
                  publishedAt
                  author { name, profilePicture }
                  tags { name }
                }
              }
            }
          }
        }
      `;

      try {
        const response = await fetch(`https://gql.hashnode.com`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ query }),
          next: { revalidate: 60 },
        });
        const json = await response.json();
        setPosts(json.data.publication.posts.edges || []);
      } catch (error) {
        console.error("Error fetching Hashnode posts:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchHashnodePosts();
  }, []);
  const filteredPosts = posts.filter((post: any) => {
    if (filterCategory === "All") return true;

    return post.node.tags.some(
      (tag: any) => tag.name.toLowerCase() === filterCategory.toLowerCase(),
    );
  });

return (
    <section className="w-full px-4 md:px-[140px] py-12">
      {/* 1. Show skeletons while loading */}
      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {Array.from({ length: 6 }).map((_, i) => (
            <BlogCardSkeleton key={i} />
          ))}
        </div>
      ) : (
        <>
          {/* 2. Check if we actually have filtered posts */}
          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
              {filteredPosts.map(({ node }: any) => (
                <BlogCard
                  slug={node.slug}
                  key={node.id}
                  category={node.tags[0]?.name || "General"}
                  title={node.title}
                  description={node.brief}
                  authorName={node.author.name}
                  authorImage={node.author.profilePicture}
                  date={new Date(node.publishedAt).toLocaleDateString("en-US", {
                    day: "numeric",
                    month: "short",
                    year: "numeric",
                  })}
                  imageUrl={node.coverImage.url}
                />
              ))}
            </div>
          ) : (
            /* 3. If no posts match the category, show the empty state */
            <EmptyState category={filterCategory} />
          )}
        </>
      )}
    </section>
  );
}

export default BlogGrid;