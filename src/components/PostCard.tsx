import { Link } from "react-router";
import { ClockCircleOutlined, LeftOutlined } from "@ant-design/icons";
import type { Post } from "../data/site";
import { formatDate } from "../utils/formatDate";

function PostCard({ post }: { post: Post }) {
  return (
    <article className="group card">
      <Link to={`/blog/${post.slug}`} className="block">
        <div className="relative h-52 overflow-hidden">
          <img
            src={post.image}
            alt={post.title}
            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          <div className="absolute top-4 right-4">
            <span className="rounded-full border border-border-light bg-dark/80 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
              {post.category}
            </span>
          </div>
        </div>

        <div className="p-6">
          <div className="mb-3 flex items-center gap-3 text-sm text-neutral-500">
            <span className="flex items-center gap-1">
              <ClockCircleOutlined />
              {post.readTime}
            </span>
            <span className="size-1 rounded-full bg-neutral-600" />
            <span>{formatDate(post.date)}</span>
          </div>
          <h3 className="mb-3 line-clamp-2 text-xl leading-tight font-bold text-white transition-colors duration-300 group-hover:text-primary">
            {post.title}
          </h3>
          <p className="mb-5 line-clamp-2 text-sm leading-relaxed text-neutral-400">
            {post.excerpt}
          </p>
          <div className="flex items-center justify-between border-t border-border pt-4">
            <div className="flex items-center gap-3">
              <img
                src={post.author.avatar}
                alt={post.author.name}
                className="size-9 rounded-full object-cover ring-2 ring-border"
              />
              <div>
                <p className="text-sm font-medium text-white">{post.author.name}</p>
                <p className="text-xs text-neutral-500">{post.author.role}</p>
              </div>
            </div>
            <div className="flex size-8 items-center justify-center rounded-full border border-primary/20 bg-primary/10 text-primary transition-colors duration-300 group-hover:border-transparent group-hover:bg-primary group-hover:text-white">
              <LeftOutlined className="text-sm" />
            </div>
          </div>
        </div>
      </Link>
    </article>
  );
}

export default PostCard;
