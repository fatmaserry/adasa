import { Link } from "react-router";
import {
  AimOutlined,
  BookOutlined,
  CheckOutlined,
  EditOutlined,
  GithubFilled,
  LinkedinFilled,
  MailOutlined,
  ReadOutlined,
  SyncOutlined,
  TeamOutlined,
  ThunderboltOutlined,
  XOutlined,
} from "@ant-design/icons";
import { posts, siteInfo } from "../data/site";

const stats = [
  { value: "+2مليون", label: "قارئ شهرياً", icon: <TeamOutlined /> },
  { value: "+500", label: "مقالة منشورة", icon: <ReadOutlined /> },
  { value: "+50", label: "كاتب خبير", icon: <EditOutlined /> },
  { value: "+15", label: "تصنيف", icon: <BookOutlined /> },
];

const values = [
  { icon: <AimOutlined />, title: "الجودة أولاً", description: "محتوى مدروس ومكتوب بخبرة", color: "from-primary to-accent" },
  { icon: <ThunderboltOutlined />, title: "تركيز عملي", description: "أمثلة واقعية يمكنك تطبيقها اليوم", color: "from-primary-dark to-primary-light" },
  { icon: <TeamOutlined />, title: "المجتمع", description: "تعلم مع آلاف المصورين", color: "from-primary to-accent" },
  { icon: <SyncOutlined />, title: "دائماً محدث", description: "أحدث الاتجاهات وأفضل الممارسات", color: "from-primary-dark to-primary-light" },
];

const socials = [
  { label: "X", icon: <XOutlined />, hover: "hover:bg-primary" },
  { label: "GitHub", icon: <GithubFilled />, hover: "hover:bg-neutral-700" },
  { label: "LinkedIn", icon: <LinkedinFilled />, hover: "hover:bg-blue-600" },
];

const authors = [...new Map(posts.map((post) => [post.author.name, post.author])).values()];

function About() {
  return (
    <div className="bg-dark">
      <section className="relative overflow-hidden py-24">
        <div className="grid-pattern absolute inset-0" />
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-20 size-72 rounded-full bg-primary/20 blur-[100px]" />
          <div className="absolute right-20 bottom-20 size-96 rounded-full bg-accent/10 blur-[120px]" />
        </div>
        <div className="relative mx-auto max-w-6xl px-4 text-center sm:px-6 lg:px-8">
          <span className="section-label mb-6 inline-flex items-center gap-2">
            <span className="size-2 animate-pulse rounded-full bg-primary" />
            من نحن
          </span>
          <h1 className="mb-6 text-4xl font-bold text-white md:text-5xl lg:text-6xl">
            مهمتنا هي <span className="gradient-text">الإعلام والإلهام</span>
          </h1>
          <p className="mx-auto mb-12 max-w-3xl text-xl leading-relaxed text-neutral-400">
            {siteInfo.description} نحن شغوفون بمشاركة المعرفة ومساعدة المصورين على تنمية مهاراتهم من خلال
            محتوى عالي الجودة.
          </p>
          <div className="mx-auto grid max-w-4xl grid-cols-2 gap-4 md:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="glass-card p-6">
                <div className="mb-2 text-2xl text-primary">{stat.icon}</div>
                <div className="gradient-text mb-1 text-3xl font-bold">{stat.value}</div>
                <div className="text-sm text-neutral-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-dark-secondary py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-4 flex items-center justify-center gap-3 text-3xl font-bold text-white md:text-4xl">
              <span className="h-8 w-1.5 rounded-full bg-linear-to-b from-primary to-accent" />
              قيمنا
              <span className="h-8 w-1.5 rounded-full bg-linear-to-b from-accent to-primary" />
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-neutral-400">المبادئ التي توجه كل ما نقوم بإنشائه</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <div
                key={value.title}
                className="group relative overflow-hidden rounded-2xl border border-border bg-dark-card p-6 text-center transition-all duration-300 hover:border-primary/30"
              >
                <div
                  className={`absolute inset-0 bg-linear-to-br ${value.color} opacity-0 transition-opacity duration-300 group-hover:opacity-10`}
                />
                <div className="relative">
                  <div className="mb-4 text-4xl text-primary">{value.icon}</div>
                  <h3 className="mb-2 text-lg font-bold text-white transition-colors group-hover:text-primary">
                    {value.title}
                  </h3>
                  <p className="text-sm text-neutral-400">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-dark py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <span className="section-label mb-4">فريقنا</span>
            <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">تعرف على كتابنا</h2>
            <p className="mx-auto max-w-2xl text-lg text-neutral-400">
              فريقنا من المصورين والكتاب ذوي الخبرة شغوفون بمشاركة معرفتهم مع المجتمع.
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {authors.map((author) => (
              <div
                key={author.name}
                className="group rounded-2xl border border-border bg-dark-card p-6 text-center transition-all duration-300 hover:border-primary/30"
              >
                <div className="relative mb-4 inline-block">
                  <img
                    src={author.avatar}
                    alt={author.name}
                    className="size-24 rounded-full object-cover ring-4 ring-border transition-all group-hover:ring-primary/30"
                  />
                  <div className="absolute -right-1 -bottom-1 flex size-6 items-center justify-center rounded-full border-2 border-dark-card bg-primary text-xs text-white">
                    <CheckOutlined />
                  </div>
                </div>
                <h3 className="text-lg font-bold text-white">{author.name}</h3>
                <p className="mb-4 text-sm font-medium text-primary">{author.role}</p>
                <div className="flex justify-center gap-3">
                  {socials.map((social) => (
                    <a
                      key={social.label}
                      href="#"
                      aria-label={social.label}
                      className={`flex size-9 items-center justify-center rounded-lg bg-border text-neutral-500 transition-colors hover:text-white ${social.hover}`}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-linear-to-br from-primary-dark via-primary to-accent py-20">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-10 right-10 size-64 rounded-full bg-white/20 blur-[100px]" />
          <div className="absolute bottom-10 left-10 size-48 rounded-full bg-white/20 blur-[80px]" />
        </div>
        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="mb-6 text-3xl font-bold text-white md:text-4xl">لديك أسئلة؟ دعنا نتحدث!</h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-white/80">
            نحب أن نسمع منك. سواء كان لديك سؤال حول محتوانا، أو تريد المساهمة، أو تريد فقط إلقاء التحية، لا تتردد
            في التواصل.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href={`mailto:${siteInfo.email}`}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-dark px-8 py-4 font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-neutral-900"
            >
              <MailOutlined className="text-xl" />
              تواصل معنا
            </a>
            <Link
              to="/blog"
              className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-white/40 bg-transparent px-8 py-4 font-semibold text-white transition-all duration-300 hover:bg-white hover:text-dark"
            >
              تصفح المقالات
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
