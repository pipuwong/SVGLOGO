async function fetchGitHubStars() {
  const res = await fetch("https://api.github.com/repos/pheralb/svgl");
  const response = await res.json();
  const starsFormated = response.stargazers_count > 1e3 ? `${(response.stargazers_count / 1e3).toFixed(1)}K` : response.stargazers_count;
  return starsFormated;
}
const load = async ({ url: { pathname } }) => {
  const stars = await fetchGitHubStars();
  return { pathname, stars };
};
export {
  load
};
