import BlogListingClient from '../../components/BlogListingClient.jsx';
import { getAllPosts } from '../../lib/posts.js';

export const metadata = {
  title: 'All Articles',
  description:
    'Explore all published articles on computer science, programming, data science, AI, machine learning, and GATE DA 2027 by Syed Mohammad Hamzah.',
};

export default function BlogIndexPage() {
  const posts = getAllPosts(false);

  return <BlogListingClient initialPosts={posts} />;
}

