import type { ReactNode } from "react";
import { Link, Navigate, useParams } from "react-router";
import {
  ArrowLeftOutlined,
  CalendarOutlined,
  CameraOutlined,
  ClockCircleOutlined,
  HomeOutlined,
  LeftOutlined,
  LinkedinFilled,
  LinkOutlined,
  MailFilled,
  PictureOutlined,
  ShareAltOutlined,
  TagsOutlined,
  UnorderedListOutlined,
  WhatsAppOutlined,
  XOutlined,
} from "@ant-design/icons";
import { posts } from "../data/site";
import { formatDate } from "../utils/formatDate";

function BoxTitle({ icon, title }: { icon: ReactNode; title: string }) {
  return (
    <div className="flex items-center gap-3">
      <div className="flex size-10 items-center justify-center rounded-xl border border-primary/30 bg-primary/10 text-primary">
        {icon}
      </div>
      <h3 className="font-bold text-white">{title}</h3>
    </div>
  );
}

function BlogDetails() {
  const { slug } = useParams();
  const post = posts.find((item) => item.slug === slug);

  if (!post) return <Navigate to="/blog" replace />;

  const date = formatDate(post.date);
  const blocks = post.content.split("\n\n");
  const sections = blocks
    .filter((block) => block.startsWith("## "))
    .map((block, index) => ({ id: `section-${index}`, title: block.replace("## ", "") }));

  const relatedPosts = posts
    .filter((item) => item.category === post.category && item.id !== post.id)
    .slice(0, 3);
  if (relatedPosts.length < 3) {
    relatedPosts.push(
      ...posts
        .filter((item) => item.id !== post.id && !relatedPosts.includes(item))
        .slice(0, 3 - relatedPosts.length),
    );
  }

  const url = encodeURIComponent(window.location.href);
  const shareLinks = [
    { label: "X", href: `https://twitter.com/intent/tweet?url=${url}`, icon: <XOutlined />, hover: "hover:bg-[#1da1f2]" },
    { label: "LinkedIn", href: `https://www.linkedin.com/sharing/share-offsite/?url=${url}`, icon: <LinkedinFilled />, hover: "hover:bg-[#0077b5]" },
    { label: "WhatsApp", href: `https://wa.me/?text=${url}`, icon: <WhatsAppOutlined />, hover: "hover:bg-[#25d366]" },
  ];

  let sectionIndex = 0;

  return (
    <article className="min-h-screen bg-dark">
      <div className="relative h-[60vh] min-h-125 overflow-hidden">
        <img src={post.image} alt={post.title} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-linear-to-t from-dark via-dark/50 to-transparent" />
        <div className="absolute inset-0 bg-linear-to-r from-dark/30 to-transparent" />

        <div className="absolute top-8 right-8 left-8">
          <nav className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/30 px-4 py-2 text-sm backdrop-blur-md">
            <Link to="/" className="text-white/70 transition-colors hover:text-white">
              <HomeOutlined />
            </Link>
            <LeftOutlined className="text-xs text-white/30" />
            <Link to="/blog" className="text-white/70 transition-colors hover:text-white">
              المدونة
            </Link>
            <LeftOutlined className="text-xs text-white/30" />
            <span className="max-w-50 truncate font-medium text-primary-light">{post.category}</span>
          </nav>
        </div>

        <div className="absolute right-0 bottom-0 left-0 p-8 md:p-12">
          <div className="mx-auto max-w-5xl">
            <div className="mb-6 flex flex-wrap items-center gap-3">
              <Link
                to={`/blog?category=${post.category}`}
                className="rounded-full bg-primary px-4 py-2 text-sm font-bold text-white transition-colors hover:bg-primary-dark"
              >
                {post.category}
              </Link>
              <div className="flex items-center gap-4 text-sm text-white/70">
                <span className="flex items-center gap-2">
                  <CalendarOutlined />
                  {date}
                </span>
                <span className="flex items-center gap-2">
                  <ClockCircleOutlined />
                  {post.readTime}
                </span>
              </div>
            </div>
            <h1 className="mb-6 max-w-4xl text-3xl leading-tight font-bold text-white md:text-5xl lg:text-6xl">
              {post.title}
            </h1>
            <div className="flex w-fit items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-md">
              <img
                src={post.author.avatar}
                alt={post.author.name}
                className="size-14 rounded-full object-cover ring-2 ring-primary/50"
              />
              <div>
                <p className="font-bold text-white">{post.author.name}</p>
                <p className="text-sm text-white/60">{post.author.role}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr_300px]">
          <div className="order-2 min-w-0 lg:order-1">
            <div className="mb-10 rounded-2xl border border-primary/20 bg-linear-to-r from-primary/10 to-accent/5 p-6">
              <p className="text-lg leading-relaxed text-neutral-200 italic">"{post.excerpt}"</p>
            </div>

            <div>
              {blocks.map((block, index) =>
                block.startsWith("## ") ? (
                  <h2
                    key={index}
                    id={`section-${sectionIndex++}`}
                    className="mt-14 mb-6 flex scroll-mt-24 items-center gap-4 text-2xl font-bold text-white md:text-3xl"
                  >
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-xl border border-primary/30 bg-primary/10 text-primary">
                      <CameraOutlined />
                    </span>
                    {block.replace("## ", "")}
                  </h2>
                ) : (
                  <p key={index} className="mb-6 text-lg leading-relaxed text-neutral-300">
                    {block}
                  </p>
                ),
              )}
            </div>

            <div className="mt-14 rounded-2xl border border-border bg-dark-secondary p-6">
              <div className="mb-4">
                <BoxTitle icon={<TagsOutlined />} title="الوسوم" />
              </div>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="cursor-pointer rounded-full border border-border bg-dark-tertiary px-4 py-2 text-sm text-neutral-400 transition-colors hover:border-primary/50 hover:text-primary"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-6 rounded-2xl border border-border bg-dark-secondary p-6">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <BoxTitle icon={<ShareAltOutlined />} title="شارك المقال" />
                <div className="flex gap-2">
                  {shareLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={link.label}
                      className={`flex size-11 items-center justify-center rounded-xl border border-border bg-dark-tertiary text-neutral-400 transition-all duration-300 hover:border-transparent hover:text-white ${link.hover}`}
                    >
                      {link.icon}
                    </a>
                  ))}
                  <button
                    onClick={() => navigator.clipboard.writeText(window.location.href)}
                    aria-label="نسخ الرابط"
                    className="flex size-11 cursor-pointer items-center justify-center rounded-xl border border-border bg-dark-tertiary text-neutral-400 transition-all duration-300 hover:border-transparent hover:bg-primary hover:text-white"
                  >
                    <LinkOutlined />
                  </button>
                </div>
              </div>
            </div>

            <div className="mt-6 rounded-2xl border border-border bg-linear-to-br from-dark-card to-dark-secondary p-8">
              <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-start">
                <img
                  src={post.author.avatar}
                  alt={post.author.name}
                  className="size-24 rounded-2xl object-cover ring-4 ring-primary/20"
                />
                <div className="flex-1 text-center sm:text-right">
                  <span className="text-xs font-semibold tracking-wider text-primary uppercase">كاتب المقال</span>
                  <h3 className="mt-1 text-xl font-bold text-white">{post.author.name}</h3>
                  <p className="mb-3 text-sm text-neutral-500">{post.author.role}</p>
                  <p className="text-sm leading-relaxed text-neutral-400">
                    مصور محترف شغوف بمشاركة المعرفة والخبرات في عالم التصوير الفوتوغرافي.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <aside className="order-1 lg:order-2">
            <div className="space-y-6 lg:sticky lg:top-24">
              {sections.length > 0 && (
                <div className="rounded-2xl border border-border bg-dark-secondary p-6">
                  <div className="mb-5">
                    <BoxTitle icon={<UnorderedListOutlined />} title="محتويات المقال" />
                  </div>
                  <nav className="space-y-2">
                    {sections.map((section, index) => (
                      <a
                        key={section.id}
                        href={`#${section.id}`}
                        className="group flex items-center gap-3 rounded-xl p-3 text-neutral-400 transition-all duration-300 hover:bg-primary/5 hover:text-primary"
                      >
                        <span className="flex size-6 shrink-0 items-center justify-center rounded-lg bg-dark-tertiary text-xs font-bold text-neutral-500 transition-colors group-hover:bg-primary/10 group-hover:text-primary">
                          {index + 1}
                        </span>
                        <span className="text-sm">{section.title}</span>
                      </a>
                    ))}
                  </nav>
                </div>
              )}

              <div className="rounded-2xl border border-border bg-dark-secondary p-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-xl bg-dark p-4 text-center">
                    <ClockCircleOutlined className="mb-2 text-xl text-primary" />
                    <p className="font-bold text-white">{post.readTime}</p>
                    <p className="text-xs text-neutral-500">وقت القراءة</p>
                  </div>
                  <div className="rounded-xl bg-dark p-4 text-center">
                    <CalendarOutlined className="mb-2 text-xl text-primary" />
                    <p className="text-sm font-bold text-white">{date.split(" ").slice(0, 2).join(" ")}</p>
                    <p className="text-xs text-neutral-500">تاريخ النشر</p>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-primary/20 bg-linear-to-br from-primary/10 to-accent/5 p-6 text-center">
                <div className="mx-auto mb-4 flex size-14 items-center justify-center rounded-2xl bg-primary/20 text-xl text-primary">
                  <MailFilled />
                </div>
                <h3 className="mb-2 font-bold text-white">لا تفوّت جديدنا</h3>
                <p className="mb-4 text-sm text-neutral-400">اشترك للحصول على أحدث المقالات</p>
                <Link
                  to="/blog"
                  className="block w-full rounded-xl bg-primary py-3 text-center font-semibold text-white transition-colors hover:bg-primary-dark"
                >
                  تصفح المزيد
                </Link>
              </div>
            </div>
          </aside>
        </div>

        {relatedPosts.length > 0 && (
          <div className="mt-20 border-t border-border pt-12">
            <div className="mb-10 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <span className="flex size-12 items-center justify-center rounded-2xl border border-primary/30 bg-primary/10 text-xl text-primary">
                  <PictureOutlined />
                </span>
                <div>
                  <h2 className="text-2xl font-bold text-white">مقالات قد تعجبك</h2>
                  <p className="text-sm text-neutral-500">استكشف المزيد من المحتوى المميز</p>
                </div>
              </div>
              <Link
                to="/blog"
                className="group hidden items-center gap-2 text-primary transition-colors hover:text-primary-light sm:flex"
              >
                عرض الكل
                <ArrowLeftOutlined className="transition-transform group-hover:-translate-x-1" />
              </Link>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {relatedPosts.map((item) => (
                <Link
                  key={item.id}
                  to={`/blog/${item.slug}`}
                  className="group relative overflow-hidden rounded-2xl border border-border bg-dark-secondary transition-all duration-500 hover:border-primary/30"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-dark-secondary to-transparent" />
                    <span className="absolute top-4 right-4 rounded-full bg-primary px-3 py-1 text-xs font-bold text-white">
                      {item.category}
                    </span>
                  </div>
                  <div className="p-5">
                    <h3 className="mb-3 line-clamp-2 font-bold text-white transition-colors group-hover:text-primary">
                      {item.title}
                    </h3>
                    <div className="flex items-center justify-between text-sm text-neutral-500">
                      <span className="flex items-center gap-2">
                        <img src={item.author.avatar} alt={item.author.name} className="size-6 rounded-full" />
                        {item.author.name}
                      </span>
                      <span>{item.readTime}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </article>
  );
}

export default BlogDetails;
