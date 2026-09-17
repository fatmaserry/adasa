import { Link } from "react-router";
import {
  ArrowLeftOutlined,
  EditOutlined,
  FolderOpenOutlined,
  InfoCircleOutlined,
  LeftOutlined,
  MailOutlined,
  ReadOutlined,
  TeamOutlined,
} from "@ant-design/icons";
import { categories, posts, siteInfo } from "../data/site";
import SectionLabel from "../components/SectionLabel";
import FeaturedPostCard from "../components/FeaturedPostCard";
import CategoryCard from "../components/CategoryCard";
import PostCard from "../components/PostCard";

const stats = [
  { value: "+50", label: "مقالة", icon: <ReadOutlined /> },
  { value: "+10ألف", label: "قارئ", icon: <TeamOutlined /> },
  { value: "4", label: "تصنيفات", icon: <FolderOpenOutlined /> },
  { value: "6", label: "كاتب", icon: <EditOutlined /> },
];

const subscribers = [
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=32&h=32&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=32&h=32&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face",
];

function Home() {
  const featuredPosts = posts.filter((post) => post.featured);
  const latestPosts = posts.filter((post) => !post.featured).slice(0, 3);

  return (
    <>
      <section className="relative flex min-h-[90vh] items-center overflow-hidden bg-dark">
        <div className="grid-pattern absolute inset-0" />
        <div className="absolute top-20 left-10 size-72 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute right-10 bottom-20 size-96 rounded-full bg-accent/5 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 size-125 -translate-1/2 rounded-full bg-primary/5 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <div className="section-label mb-8 inline-flex items-center gap-2">
              <span className="relative flex size-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex size-2 rounded-full bg-primary" />
              </span>
              <span className="text-sm font-medium text-neutral-300">مرحباً بك في {siteInfo.name}</span>
            </div>

            <h1 className="mb-6 text-5xl leading-tight font-bold tracking-tight text-white md:text-6xl lg:text-7xl">
              اكتشف <span className="gradient-text">فن</span>
              <br />
              التصوير الفوتوغرافي
            </h1>
            <p className="mx-auto mb-10 max-w-2xl text-xl leading-relaxed text-neutral-400 md:text-2xl">
              انغمس في أسرار المحترفين ونصائح عملية لتطوير مهاراتك في التصوير.
            </p>

            <div className="mb-16 flex flex-col justify-center gap-4 sm:flex-row">
              <Link to="/blog" className="group btn-primary gap-2">
                <span>استكشف المقالات</span>
                <ArrowLeftOutlined className="text-xl transition-transform group-hover:-translate-x-1" />
              </Link>
              <Link to="/about" className="btn-secondary gap-2">
                <InfoCircleOutlined className="text-xl" />
                <span>اعرف المزيد</span>
              </Link>
            </div>

            <div className="mx-auto grid max-w-3xl grid-cols-2 gap-4 md:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.label} className="glass-card p-4 transition-transform duration-300 hover:scale-105">
                  <span className="mb-1 text-2xl text-primary">{stat.icon}</span>
                  <p className="gradient-text text-2xl font-bold md:text-3xl">{stat.value}</p>
                  <p className="text-sm text-neutral-500">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-dark py-24">
        <div className="absolute top-0 right-0 h-full w-1/3 bg-linear-to-l from-primary/5 to-transparent" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
            <div>
              <SectionLabel>مميز</SectionLabel>
              <h2 className="section-title">مقالات مختارة</h2>
              <p className="section-subtitle max-w-lg">محتوى منتقى لبدء رحلة تعلمك</p>
            </div>
            <Link
              to="/blog"
              className="group inline-flex items-center gap-2 rounded-xl bg-linear-to-r from-primary to-primary-dark px-5 py-2.5 font-medium text-white transition-all duration-300 hover:-translate-y-0.5"
            >
              عرض الكل
              <LeftOutlined className="text-sm transition-transform group-hover:-translate-x-1" />
            </Link>
          </div>
          <div className="space-y-8">
            {featuredPosts.map((post) => (
              <FeaturedPostCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </section>

      <section className="relative border-y border-border bg-dark-secondary py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <SectionLabel>التصنيفات</SectionLabel>
            <h2 className="section-title">استكشف حسب الموضوع</h2>
            <p className="section-subtitle mx-auto max-w-lg">اعثر على محتوى مصمم حسب اهتماماتك</p>
          </div>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
            {categories.map((category) => (
              <CategoryCard key={category.name} category={category} />
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-dark py-24">
        <div className="absolute bottom-0 left-0 h-full w-1/3 bg-linear-to-r from-primary/5 to-transparent" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
            <div>
              <SectionLabel>الأحدث</SectionLabel>
              <h2 className="section-title">أحدث المقالات</h2>
              <p className="section-subtitle max-w-lg">محتوى جديد طازج من المطبعة</p>
            </div>
            <Link
              to="/blog"
              className="group inline-flex items-center gap-2 font-semibold text-primary transition-colors hover:text-primary-light"
            >
              عرض جميع المقالات
              <ArrowLeftOutlined className="text-xl transition-transform group-hover:-translate-x-1" />
            </Link>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {latestPosts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-dark py-24">
        <div className="absolute top-0 left-1/2 h-75 w-150 max-w-full -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-border bg-dark-card p-8 text-center md:p-12 lg:p-16">
            <div className="mx-auto mb-6 flex size-16 items-center justify-center rounded-2xl bg-linear-to-br from-primary to-primary-dark text-3xl text-white">
              <MailOutlined />
            </div>
            <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
              اشترك في <span className="gradient-text">نشرتنا الإخبارية</span>
            </h2>
            <p className="mx-auto mb-8 max-w-xl text-lg text-neutral-400">
              احصل على نصائح التصوير الحصرية ودروس جديدة مباشرة في بريدك الإلكتروني
            </p>
            <form
              className="mx-auto mb-6 flex max-w-lg flex-col gap-3 sm:flex-row"
              onSubmit={(event) => event.preventDefault()}
            >
              <input
                type="email"
                placeholder="أدخل بريدك الإلكتروني"
                className="flex-1 rounded-xl border border-border bg-dark px-5 py-4 text-white transition-colors placeholder:text-neutral-500 focus:border-primary/50 focus:outline-none"
              />
              <button
                type="submit"
                className="cursor-pointer rounded-xl bg-linear-to-r from-primary to-primary-dark px-8 py-4 font-semibold text-white transition-all duration-300 hover:from-primary-dark hover:to-primary-dark"
              >
                اشترك الآن
              </button>
            </form>
            <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-neutral-500">
              <div className="flex items-center gap-4">
                <div className="flex -space-x-2 space-x-reverse">
                  {subscribers.map((avatar) => (
                    <img key={avatar} src={avatar} alt="" className="size-8 rounded-full border-2 border-dark-card" />
                  ))}
                </div>
                <span>
                  انضم لـ <span className="font-medium text-white">+10,000</span> مصور
                </span>
              </div>
              <span className="hidden text-border sm:inline">•</span>
              <span>بدون إزعاج</span>
              <span className="hidden text-border sm:inline">•</span>
              <span>إلغاء الاشتراك في أي وقت</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
