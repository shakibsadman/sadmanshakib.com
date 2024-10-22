import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import Link from "next/link";

// Sample blog post data
const blogPosts = [
  {
    id: 1,
    title: "Mastering Next.js: Tips and Tricks",
    excerpt:
      "Discover advanced techniques to supercharge your Next.js development process and create lightning-fast web applications.",
    date: "2023-05-15",
    readTime: "5 min read",
    slug: "mastering-nextjs-tips-and-tricks",
  },
  {
    id: 2,
    title: "The Future of React: What's Coming in React 19",
    excerpt:
      "Explore the upcoming features in React 19 and how they will revolutionize the way we build user interfaces.",
    date: "2023-06-02",
    readTime: "7 min read",
    slug: "future-of-react-whats-coming-in-react-19",
  },
  {
    id: 3,
    title: "Building Scalable APIs with Node.js and Express",
    excerpt:
      "Learn how to design and implement robust, scalable APIs using Node.js and Express to power your web applications.",
    date: "2023-06-20",
    readTime: "6 min read",
    slug: "building-scalable-apis-with-nodejs-and-express",
  },
];

export default function BlogSection() {
  return (
    <section id="blog" className="">
      <div className="container px-4 md:px-6 mx-auto">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 ">
          Latest from the <span className="text-teal-400">Blog</span>
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
          {blogPosts.map((post) => (
            <Card key={post.id} className="bg-purple-900 border-purple-700 text-purple-50">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-teal-400">{post.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-purple-200">{post.excerpt}</p>
              </CardContent>
              <CardFooter className="flex justify-between items-center">
                <div className="flex items-center space-x-2 text-sm text-purple-300">
                  <Calendar className="h-4 w-4" />
                  <span>{post.date}</span>
                  <Clock className="h-4 w-4 ml-2" />
                  <span>{post.readTime}</span>
                </div>
                <Link href={`/blog/${post.slug}`} passHref>
                  <Button variant="link" className="text-teal-400 hover:text-teal-300">
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link href="/blog" passHref>
            <Button className="bg-teal-400 text-purple-900 hover:bg-teal-500">
              View All Posts
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
