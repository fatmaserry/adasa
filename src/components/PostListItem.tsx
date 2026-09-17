import { Link } from "react-router";
import { ArrowLeftOutlined, CalendarOutlined, ClockCircleOutlined } from "@ant-design/icons";
import type { Post } from "../data/site";
import { formatDate } from "../utils/formatDate";

function PostListItem({ post }: { post: Post }) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-border bg-dark-card transition-all duration-500 hover:border-primary/30">
      <Link to={`/blog/${post.slug}`} className="flex flex-col md:flex-row">
        <div className="relative h-52 w-full shrink-0 overflow-hidden md:h-auto md:w-72 lg:w-80">
          <img
            src={post.image}
            alt={post.title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-linear-to-l from-dark-card/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        </div>

        <div className="flex flex-1 flex-col justify-center p-6">
          <div className="mb-3 flex flex-wrap items-center gap-3">
            <span className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
              {post.category}
            </span>
            <span className="flex items-center gap-1 text-sm text-neutral-500">
              <ClockCircleOutlined />
              {post.readTime}
            </span>
            <span className="flex items-center gap-1 text-sm text-neutral-500">
              <CalendarOutlined />
              {formatDate(post.date)}
            </span>
          </div>
          <h2 className="mb-3 line-clamp-2 text-xl font-bold text-white transition-colors duration-300 group-hover:text-primary lg:text-2xl">
            {post.title}
          </h2>
          <p className="mb-4 line-clamp-2 leading-relaxed text-neutral-400">{post.excerpt}</p>
          <div className="mt-auto flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img
                src={post.author.avatar}
                alt={post.author.name}
                className="size-10 rounded-full object-cover ring-2 ring-border"
              />
              <div>
                <p className="text-sm font-semibold text-white">{post.author.name}</p>
                <p className="text-xs text-neutral-500">{post.author.role}</p>
              </div>
            </div>
            <span className="hidden items-center gap-2 text-sm font-semibold text-primary transition-all duration-300 group-hover:gap-3 sm:inline-flex">
              اقرأ المقال
              <ArrowLeftOutlined className="text-xl" />
            </span>
          </div>
        </div>
      </Link>
    </article>
  );
}

export default PostListItem;
