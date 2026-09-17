import { Link } from "react-router";
import { ArrowLeftOutlined, ClockCircleOutlined, StarFilled } from "@ant-design/icons";
import type { Post } from "../data/site";
import { formatDate } from "../utils/formatDate";

function FeaturedPostCard({ post }: { post: Post }) {
  return (
    <article className="group relative overflow-hidden rounded-3xl border border-border bg-dark-card transition-all duration-500 hover:border-primary/30">
      <Link to={`/blog/${post.slug}`} className="block">
        <div className="grid md:grid-cols-2">
          <div className="relative h-72 overflow-hidden md:h-100">
            <img
              src={post.image}
              alt={post.title}
              className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            <div className="absolute top-4 right-4">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-linear-to-r from-primary to-accent px-3 py-1.5 text-xs font-semibold text-white">
                <StarFilled className="text-sm" />
                مميز
              </span>
            </div>
          </div>

          <div className="flex flex-col justify-center bg-dark-card p-8 md:p-10">
            <div className="mb-4 flex items-center gap-3">
              <span className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                {post.category}
              </span>
              <span className="flex items-center gap-1 text-sm text-neutral-500">
                <ClockCircleOutlined />
                {post.readTime}
              </span>
            </div>
            <h2 className="mb-4 text-2xl leading-tight font-bold text-white transition-colors duration-300 group-hover:text-primary md:text-3xl">
              {post.title}
            </h2>
            <p className="mb-6 line-clamp-3 leading-relaxed text-neutral-400">{post.excerpt}</p>
            <div className="mt-auto flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <img
                    src={post.author.avatar}
                    alt={post.author.name}
                    className="size-12 rounded-full object-cover shadow-md ring-2 ring-border"
                  />
                  <div className="absolute -bottom-1 -left-1 size-4 rounded-full border-2 border-dark-card bg-primary" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">{post.author.name}</p>
                  <p className="text-xs text-neutral-500">{formatDate(post.date)}</p>
                </div>
              </div>
              <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-all duration-300 group-hover:gap-3">
                اقرأ المقال
                <ArrowLeftOutlined className="text-xl" />
              </span>
            </div>
          </div>
        </div>
      </Link>
    </article>
  );
}

export default FeaturedPostCard;
