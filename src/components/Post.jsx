import { useState } from "react";
import blog from "../../src/assets/blog.svg";

const posts = [
  {
    id: 1,
    category: "Design",
    title: "UX review presentations",
    description:
      "How do you create compelling presentations that wow your colleagues and impress your managers?",
    author: "Olivia Rhye",
    date: "20 Jan 2022",
    coverImage: blog.svg,
  },
  {
    id: 2,
    category: "Design",
    title: "Migrating to Linear 101",
    description:
      "Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get started.",
    author: "Phoenix Baker",
    date: "19 Jan 2022",
    coverImage: "https://source.unsplash.com/featured/technology,code",
  },
  {
    id: 3,
    category: "Software Engineering",
    title: "Building your API Stack",
    description:
      "The rise of RESTful APIs has been met by a rise in tools for creating, testing, and managing them.",
    author: "Olivia Rhye",
    date: "20 Jan 2022",
    coverImage: "https://source.unsplash.com/featured/?api,developer",
  },
  {
    id: 4,
    category: "Design",
    title: "UX review presentations",
    description:
      "How do you create compelling presentations that wow your colleagues and impress your managers?",
    author: "Olivia Rhye",
    date: "20 Jan 2022",
    coverImage: "https://source.unsplash.com/featured/?presentation,design",
  },
  {
    id: 5,
    category: "Design",
    title: "Migrating to Linear 101",
    description:
      "Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get started.",
    author: "Phoenix Baker",
    date: "19 Jan 2022",
    coverImage: "https://source.unsplash.com/featured/?technology,code",
  },
  {
    id: 6,
    category: "Software Engineering",
    title: "Building your API Stack",
    description:
      "The rise of RESTful APIs has been met by a rise in tools for creating, testing, and managing them.",
    author: "Olivia Rhye",
    date: "20 Jan 2022",
    coverImage: "https://source.unsplash.com/featured/?api,developer",
  },
];

const categories = [
  "All",
  "Lifestyle",
  "Design",
  "Software Engineering",
  "General",
  "Administration",
];

export default function BlogGrid() {
  const [activeTab, setActiveTab] = useState("Design");
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  const filteredPosts =
    activeTab === "All"
      ? posts
      : posts.filter((post) => post.category === activeTab);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <div className="p-6 max-w-6xl mx-auto font-sans">
      {/* Tabs */}
      <div className="flex justify-center space-x-4 border-b mb-10">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => {
              setActiveTab(category);
              setCurrentPage(1); // reset to first page
            }}
            className={`px-4 py-2 border-b-2 ${
              activeTab === category
                ? "border-indigo-600 text-indigo-600"
                : "border-transparent text-gray-500"
            } hover:text-indigo-600`}
          >
            {category}
          </button>
        ))}
      </div>
      {/* Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {currentPosts.map((post) => (
          <div
            key={post.id}
            className="bg-white rounded-lg shadow-md hover:shadow-lg transition overflow-hidden"
          >
            <img
              src={post.coverImage}
              alt={post.title}
              className="h-48 w-full object-cover"
            />
            <div className="p-4">
              <p className="text-sm text-indigo-600 font-medium mb-1">
                {post.category}
              </p>
              <h2 className="font-semibold text-lg mb-2">{post.title}</h2>
              <p className="text-sm text-gray-600 mb-4">{post.description}</p>
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
                <p className="text-sm text-gray-700">{post.author}</p>
                <span className="text-sm text-gray-400">• {post.date}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Pagination */}
      <div className="flex justify-center items-center mt-8 space-x-2">
        <button className="px-3 py-1 border rounded">Previous</button>
        {[1, 2, 3, 4, 5].map((page) => (
          <button
            key={page}
            className="px-3 py-1 border rounded hover:bg-indigo-100"
          >
            {page}
          </button>
        ))}
        <button className="px-3 py-1 border rounded">Next</button>
      </div>
    </div>
  );
}
