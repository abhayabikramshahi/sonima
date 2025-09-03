import React, { useEffect, useState } from "react";

function Projects() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://api.github.com/users/sonimapokhrelcoder/repos")
      .then((res) => res.json())
      .then((data) => {
        setRepos(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching repos:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="py-20 text-center text-gray-600">
        Loading projects...
      </div>
    );
  }

  return (
    <section className="py-20 bg-gray-50" id="projects">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
          My Projects
        </h2>

        {repos.length === 0 ? (
          <p className="text-center text-gray-500">
            No projects found on GitHub.
          </p>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {repos.map((repo) => (
              <div
                key={repo.id}
                className="bg-white border rounded-xl shadow hover:shadow-lg transition p-6"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {repo.name}
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  {repo.description || "No description provided."}
                </p>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-500">
                    ⭐ {repo.stargazers_count}
                  </span>
                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noreferrer"
                    className="text-red-600 font-medium hover:underline"
                  >
                    View on GitHub
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default Projects;
