import React from "react";

const categories = [
  { id: 0, name: "All", slug: "all", emoji: "📈" },
  { id: 1, name: "Artificial Intelligence", slug: "ai", emoji: "🤖" },
  { id: 2, name: "Machine Learning", slug: "machine-learning", emoji: "🧠" },
  { id: 3, name: "Web Development", slug: "web-development", emoji: "🌐" },
  { id: 4, name: "Mobile Apps", slug: "mobile-apps", emoji: "📱" },
  { id: 5, name: "Cloud Computing", slug: "cloud-computing", emoji: "☁️" },
  { id: 6, name: "Cybersecurity", slug: "cybersecurity", emoji: "🛡️" },
  { id: 7, name: "Data Science", slug: "data-science", emoji: "📊" },
  { id: 8, name: "DevOps", slug: "devops", emoji: "⚙️" },
  { id: 9, name: "Blockchain", slug: "blockchain", emoji: "⛓️" },
  { id: 10, name: "AR/VR", slug: "ar-vr", emoji: "🕶️" },
  { id: 11, name: "IoT (Internet of Things)", slug: "iot", emoji: "📡" },
  { id: 12, name: "Programming Languages", slug: "programming-languages", emoji: "💻" },
  { id: 13, name: "Tech News", slug: "tech-news", emoji: "📰" },
  { id: 14, name: "Startups & Innovation", slug: "startups-innovation", emoji: "🚀" },
  { id: 15, name: "Software Engineering", slug: "software-engineering", emoji: "🧑‍💻" },
];

const BlogList = () => {
  return (
    <div className="w-11/12 mx-auto flex flex-col md:flex-row gap-6 py-6">
      {/* Trending Topics Sidebar */}
      <div className="w-full md:w-[400px] bg-white max-h-fit  shadow-2xl border  rounded-3xl border-gray-200 p-2">
        <h2 className="text-2xl font-semibold mb-4 px-3 border-b pb-2">Trending Topics</h2>
        <div className="flex flex-wrap gap-3 px-3">
          {categories.map((category) => (
            <div
              key={category.id}
              className="cursor-pointer flex items-center gap-2 py-1 px-3 border rounded-full bg-[#F5F4F7] shadow hover:shadow-md transition"
            >
              <span className="text-lg">{category.emoji}</span>
              <span className="font-medium text-sm">{category.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Blog Section */}
      <div className="flex-1 rounded-3xl min-h-screen bg-white p-4 shadow">
        <h1 className="text-2xl font-bold mb-4">All Blog Posts</h1>
        <p className="text-gray-600">Here you'll see the latest posts from all topics...</p>
        {/* Add blog cards/components here later */}
      </div>
    </div>
  );
};

export default BlogList;
