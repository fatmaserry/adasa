import { useRef, useState } from "react";
import { useSearchParams } from "react-router";
import {
  AppstoreOutlined,
  BarsOutlined,
  CloseOutlined,
  FrownOutlined,
  LeftOutlined,
  ReadOutlined,
  ReloadOutlined,
  RightOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import { categories, posts } from "../data/site";
import PostCard from "../components/PostCard";
import PostListItem from "../components/PostListItem";

const POSTS_PER_PAGE = 6;

function getPages(current: number, total: number) {
  if (total <= 5) return Array.from({ length: total }, (_, i) => i + 1);
  if (current <= 3) return [1, 2, 3, 4, "...", total];
  if (current >= total - 2) return [1, "...", total - 3, total - 2, total - 1, total];
  return [1, "...", current - 1, current, current + 1, "...", total];
}

function filterButtonClass(active: boolean) {
  return `cursor-pointer rounded-xl px-4 py-2 text-sm font-medium transition-all duration-300 ${
    active
      ? "bg-linear-to-r from-primary to-primary-dark text-white"
      : "border border-border bg-dark-card text-neutral-400 hover:border-primary/30"
  }`;
}

function pageArrowClass(disabled: boolean) {
  return `rounded-xl border border-border p-3 transition-all duration-300 ${
    disabled
      ? "cursor-not-allowed bg-dark text-neutral-600"
      : "cursor-pointer bg-dark-card text-white hover:border-primary/50 hover:bg-dark-tertiary"
  }`;
}

function Blog() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [view, setView] = useState<"grid" | "list">("grid");
  const resultsRef = useRef<HTMLDivElement>(null);

  const category = searchParams.get("category") ?? "all";

  const filteredPosts = posts.filter((post) => {
    const query = search.toLowerCase();
    const matchesCategory = category === "all" || post.category === category;
    const matchesSearch =
      post.title.toLowerCase().includes(query) || post.excerpt.toLowerCase().includes(query);
    return matchesCategory && matchesSearch;
  });

  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
  const currentPage = Math.min(page, Math.max(totalPages, 1));
  const pagePosts = filteredPosts.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE,
  );

  const changeCategory = (name: string) => {
    setSearchParams(name === "all" ? {} : { category: name });
    setPage(1);
  };

  const changeSearch = (value: string) => {
    setSearch(value);
    setPage(1);
  };

  const resetFilters = () => {
    changeSearch("");
    changeCategory("all");
  };

  const goToPage = (value: number) => {
    setPage(value);
    resultsRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen bg-dark">
      <div className="relative overflow-hidden py-20">
        <div className="grid-pattern absolute inset-0" />
        <div className="absolute top-0 left-1/4 size-96 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute right-1/4 bottom-0 size-96 rounded-full bg-accent/5 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <span className="section-label mb-6 inline-flex items-center gap-2">
            <ReadOutlined />
            مدونتنا
          </span>
          <h1 className="mb-6 text-4xl font-bold text-white md:text-5xl lg:text-6xl">
            استكشف <span className="gradient-text">مقالاتنا</span>
          </h1>
          <p className="mx-auto max-w-2xl text-xl text-neutral-400">
            اكتشف الدروس والرؤى وأفضل الممارسات للتطوير الحديث
          </p>
        </div>
      </div>

      <div className="sticky top-20 z-40 border-b border-border bg-dark/90 backdrop-blur-xl">
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="relative w-full md:w-80">
              <input
                type="text"
                placeholder="ابحث في المقالات..."
                value={search}
                onChange={(event) => changeSearch(event.target.value)}
                className="input-dark py-3 pr-12"
              />
              <SearchOutlined className="absolute top-1/2 left-4 -translate-y-1/2 text-xl text-neutral-500" />
            </div>
            <div className="flex flex-wrap justify-center gap-2">
              <button onClick={() => changeCategory("all")} className={filterButtonClass(category === "all")}>
                جميع المقالات
              </button>
              {categories.map((item) => (
                <button
                  key={item.name}
                  onClick={() => changeCategory(item.name)}
                  className={filterButtonClass(category === item.name)}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div ref={resultsRef} className="mx-auto max-w-7xl scroll-mt-36.5 px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-center justify-between">
          <p className="text-neutral-400">
            عرض <span className="font-bold text-white">{filteredPosts.length}</span>{" "}
            {filteredPosts.length === 1 ? "مقالة" : "مقالات"}
            {category !== "all" && (
              <span>
                {" "}
                في <span className="font-bold text-primary">{category}</span>
              </span>
            )}
          </p>
          <div className="flex items-center gap-2">
            <div className="flex items-center rounded-xl border border-border bg-dark-card p-1">
              <button
                onClick={() => setView("grid")}
                title="عرض شبكي"
                className={`cursor-pointer rounded-lg p-2 text-xl transition-all duration-300 ${
                  view === "grid" ? "bg-primary text-white" : "text-neutral-400 hover:text-white"
                }`}
              >
                <AppstoreOutlined className="flex" />
              </button>
              <button
                onClick={() => setView("list")}
                title="عرض قائمة"
                className={`cursor-pointer rounded-lg p-2 text-xl transition-all duration-300 ${
                  view === "list" ? "bg-primary text-white" : "text-neutral-400 hover:text-white"
                }`}
              >
                <BarsOutlined className="flex" />
              </button>
            </div>
            {(search || category !== "all") && (
              <button
                onClick={resetFilters}
                className="flex cursor-pointer items-center gap-1 text-sm text-neutral-500 transition-colors hover:text-primary"
              >
                <CloseOutlined />
                مسح الفلاتر
              </button>
            )}
          </div>
        </div>

        {pagePosts.length > 0 ? (
          <>
            {view === "grid" ? (
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {pagePosts.map((post) => (
                  <PostCard key={post.id} post={post} />
                ))}
              </div>
            ) : (
              <div className="flex flex-col gap-6">
                {pagePosts.map((post) => (
                  <PostListItem key={post.id} post={post} />
                ))}
              </div>
            )}

            {totalPages > 1 && (
              <>
                <div className="mt-12 flex items-center justify-center gap-2">
                  <button
                    onClick={() => goToPage(currentPage - 1)}
                    disabled={currentPage === 1}
                    className={pageArrowClass(currentPage === 1)}
                  >
                    <RightOutlined className="flex text-xl" />
                  </button>
                  <div className="flex items-center gap-1">
                    {getPages(currentPage, totalPages).map((item, index) =>
                      item === "..." ? (
                        <span key={`ellipsis-${index}`} className="px-3 py-2 text-neutral-500">
                          ...
                        </span>
                      ) : (
                        <button
                          key={item}
                          onClick={() => goToPage(Number(item))}
                          className={`h-11 min-w-11 cursor-pointer rounded-xl text-sm font-medium transition-all duration-300 ${
                            currentPage === item
                              ? "bg-linear-to-r from-primary to-primary-dark text-white"
                              : "border border-border bg-dark-card text-neutral-400 hover:border-primary/50 hover:text-white"
                          }`}
                        >
                          {item}
                        </button>
                      ),
                    )}
                  </div>
                  <button
                    onClick={() => goToPage(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className={pageArrowClass(currentPage === totalPages)}
                  >
                    <LeftOutlined className="flex text-xl" />
                  </button>
                </div>
                <p className="mt-4 text-center text-sm text-neutral-500">
                  صفحة {currentPage} من {totalPages}
                </p>
              </>
            )}
          </>
        ) : (
          <div className="py-20 text-center">
            <div className="mx-auto mb-6 flex size-24 items-center justify-center rounded-full border border-border bg-dark-card text-5xl text-neutral-500">
              <FrownOutlined />
            </div>
            <h3 className="mb-3 text-2xl font-bold text-white">لا توجد مقالات</h3>
            <p className="mb-6 text-neutral-400">حاول تعديل البحث أو الفلتر للعثور على ما تبحث عنه.</p>
            <button onClick={resetFilters} className="btn-primary gap-2">
              <ReloadOutlined className="text-xl" />
              إعادة تعيين الفلاتر
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Blog;
