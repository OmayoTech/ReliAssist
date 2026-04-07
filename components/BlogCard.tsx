import React from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

interface BlogCardProps {
  category: string;
  title: string;
  description: string;
  authorName: string;
  authorImage: string;
  date: string;
  imageUrl: string;
  slug: string
}

const BlogCard: React.FC<BlogCardProps> = ({
  category,
  title,
  description,
  authorName,
  authorImage,
  date,
  imageUrl,
  slug
}) => {
  return (
    <Link href={`/blog/${slug}`}>
      <div className="flex flex-col bg-white rounded-2xl p-1 overflow-hidden group cursor-pointer border border-transparent hover:shadow-lg hover:scale-[1.05] hover:p-2 transition-all">
        {/* Image Container */}
        <div className="relative h-[240px] w-full overflow-hidden rounded-2xl bg-gray-100">
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        {/* Content */}
        <div className="flex flex-col pt-5 pb-2">
          <span className="text-purple-600 font-semibold text-xs mb-3 uppercase tracking-wider">
            {category}
          </span>

          <div className="flex justify-between items-start gap-4">
            <h3 className="text-xl font-bold text-gray-900 leading-snug">
              {title}
            </h3>
            <ArrowUpRight className="w-5 h-5 text-gray-900 flex-shrink-0" />
          </div>

          <p className="text-gray-500 text-sm mt-3 line-clamp-2 leading-relaxed">
            {description}
          </p>

          {/* Author Footer */}
          <div className="flex items-center gap-3 mt-6">
            <div className="relative w-8 h-8 rounded-full overflow-hidden">
              <Image
                src={authorImage}
                alt={authorName}
                fill
                className="object-cover"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-semibold text-gray-900">
                {authorName}
              </span>
              <span className="text-xs text-gray-400">{date}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
