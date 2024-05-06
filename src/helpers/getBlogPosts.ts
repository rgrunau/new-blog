import { getCollection } from "astro:content";

export async function getBlogPosts() {
  const allPosts = await getCollection("posts");
  const sortedPosts = allPosts.sort((a, b) => {
    return (
      new Date(b.data.pubDate).getTime() - new Date(a.data.pubDate).getTime()
    );
  });
  return {
    fullList: sortedPosts,
    latestPost: sortedPosts[0],
    fiveRecent: sortedPosts.slice(1, 5),
  };
}
