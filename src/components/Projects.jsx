import React, { useEffect, useState } from 'react';


// Replace with the actual GitHub username if needed
const GITHUB_USERNAME = 'sonimapokhrelcoder';

function Projects() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=6`)
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch repos');
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

  if (loading) return <div className="text-gray-400">Loading projects...</div>;
  if (error) return <div className="text-red-400">{error}</div>;

  return (
    <div className="grid gap-6 md:grid-cols-3 max-w-6xl mx-auto">
      {repos.map((repo) => (
        <a
          key={repo.id}
          href={repo.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-900 border border-gray-800 rounded-xl shadow p-5 hover:shadow-lg hover:border-yellow-400 transition flex flex-col"
        >
          <h3 className="text-xl font-semibold text-yellow-400 mb-2">{repo.name}</h3>
          <p className="text-gray-300 text-sm flex-1 mb-2">{repo.description || 'No description'}</p>
          <div className="flex flex-wrap gap-2 mt-auto">
            {repo.language && (
              <span className="px-2 py-1 bg-gray-800 text-yellow-300 rounded text-xs">{repo.language}</span>
            )}
            <span className="px-2 py-1 bg-gray-800 text-gray-400 rounded text-xs">★ {repo.stargazers_count}</span>
          </div>
        </a>
      ))}
    </div>
  );
}

export default Projects