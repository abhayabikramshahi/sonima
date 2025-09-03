import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Star, Code2, Clock } from "lucide-react"; // ✅ icons

// Replace with your GitHub username
const GITHUB_USERNAME = "sonimapokhrelcoder";

function ProjectsPage() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(
      `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=12`
    )
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch repos");
        return res.json();
      })
      .then((data) => {
        setRepos(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading)
    return (
      <div className="text-gray-400 text-center mt-10">Loading projects...</div>
    );
  if (error)
    return <div className="text-red-400 text-center mt-10">{error}</div>;

  return (
    <>
      <Helmet>
        <title>Projects | Sonima Pokhrel</title>
        <meta
          name="description"
          content="Explore open-source projects by Sonima Pokhrel. A collection of web development, computer science, and creative coding repositories."
        />
      </Helmet>

      <div className="min-h-screen bg-black text-white py-16 px-6 mt-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* LHS - About Projects */}
          <div className="flex flex-col justify-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-cyan-400 to-indigo-500 bg-clip-text text-transparent">
              🚀 My Projects
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed">
              Welcome to my coding playground! 👩‍💻 I build{" "}
              <span className="text-indigo-400 font-medium">
                web apps, creative tools, and open-source experiments
              </span>
              . Each project reflects my curiosity in{" "}
              <span className="text-cyan-400 font-medium">
                Computer Science
              </span>
              , my love for{" "}
              <span className="text-violet-400 font-medium">
                clean UI/UX design
              </span>
              , and my drive to{" "}
              <span className="text-pink-400 font-medium">
                make tech accessible
              </span>
              .
            </p>
            <p className="text-gray-400">
              On the right 👉 you’ll find a scrollable showcase of my{" "}
              <span className="text-indigo-300">GitHub repositories</span>,
              sorted by most recent updates. Feel free to explore, star ⭐, and
              contribute!
            </p>
          </div>

          {/* RHS - Scrollable Projects */}
          <div className="h-[70vh] overflow-y-auto pr-2 custom-scrollbar">
            <div className="grid gap-6">
              {repos.map((repo) => (
                <a
                  key={repo.id}
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-gradient-to-br from-gray-900 to-gray-950 border border-gray-800 rounded-xl shadow-lg hover:shadow-cyan-500/20 hover:border-cyan-400 transition-all duration-300 flex flex-col p-6"
                >
                  {/* Repo Title */}
                  <h3 className="text-xl mt-5 font-semibold text-white mb-2 group-hover:text-cyan-400 transition">
                    {repo.name}
                  </h3>

                  {/* Repo Description */}
                  <p className="text-gray-400 text-sm leading-relaxed flex-1 mb-4">
                    {repo.description || "No description provided."}
                  </p>

                  {/* Repo Info */}
                  <div className="flex flex-wrap gap-3 mt-[50px] text-xs font-medium">
                    {repo.language && (
                      <span className="flex items-center gap-1 px-3 py-1 bg-gray-800 text-cyan-300 rounded-full">
                        <Code2 size={14} /> {repo.language}
                      </span>
                    )}
                    <span className="flex items-center gap-1 px-3 py-1 bg-gray-800 text-yellow-300 rounded-full">
                      <Star size={14} /> {repo.stargazers_count}
                    </span>
                    <span className="flex items-center gap-1 px-3 py-1 bg-gray-800 text-gray-400 rounded-full">
                      <Clock size={14} />{" "}
                      {new Date(repo.updated_at).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                      })}
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ✅ Custom Scrollbar (unique look) */}
      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #06b6d4, #3b82f6);
          border-radius: 9999px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #111;
        }
      `}</style>
    </>
  );
}

export default ProjectsPage;
