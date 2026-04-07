"use client";
import React, { useState } from "react";
import BlogHero from "@/components/BlogHero";
import BlogGrid from "@/components/BlogGrid";

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  return (
    <main>
      <BlogHero activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
      
      <BlogGrid filterCategory={activeCategory} />
    </main>
  );
}