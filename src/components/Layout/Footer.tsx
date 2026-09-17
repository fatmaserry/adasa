import type { ReactNode } from "react";
import { Link } from "react-router";
import {
  GithubFilled,
  HeartFilled,
  LeftOutlined,
  LinkedinFilled,
  XOutlined,
  YoutubeFilled,
} from "@ant-design/icons";
import { categories, siteInfo } from "../../data/site";

type FooterLink = {
  name: string;
  path: string;
};

const footerLinks: Record<"explore" | "categories" | "legal", FooterLink[]> = {
  explore: [
    { name: "الرئيسية", path: "/" },
    { name: "المدونة", path: "/blog" },
    { name: "من نحن", path: "/about" },
  ],
  categories: categories.slice(0, 4).map((category) => ({
    name: category.name,
    path: `/blog?category=${category.name.toLowerCase()}`,
  })),
  legal: [
    { name: "سياسة الخصوصية", path: "/privacy" },
    { name: "شروط الخدمة", path: "/terms" },
  ],
};

const socialLinks: { name: string; url: string; icon: ReactNode }[] = [
  { name: "twitter", url: siteInfo.social.twitter, icon: <XOutlined /> },
  { name: "github", url: siteInfo.social.github, icon: <GithubFilled /> },
  { name: "linkedin", url: siteInfo.social.linkedin, icon: <LinkedinFilled /> },
  { name: "youtube", url: siteInfo.social.youtube, icon: <YoutubeFilled /> },
];

function FooterHeading({ children }: { children: ReactNode }) {
  return (
    <h3 className="mb-6 flex items-center gap-2 font-semibold text-white">
      <span className="h-0.5 w-8 rounded-full bg-linear-to-r from-primary to-accent" />
      {children}
    </h3>
  );
}

function FooterLinkList({ links }: { links: FooterLink[] }) {
  return (
    <ul className="space-y-4">
      {links.map((link) => (
        <li key={link.path}>
          <Link
            to={link.path}
            className="group flex items-center gap-2 text-sm text-neutral-500 transition-colors duration-300 hover:text-primary"
          >
            <LeftOutlined className="-mr-4 text-xs text-primary opacity-0 transition-all duration-300 group-hover:mr-0 group-hover:opacity-100" />
            {link.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-border bg-dark text-neutral-300">
      <div className="absolute top-0 left-1/4 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute right-1/4 bottom-0 h-96 w-96 rounded-full bg-accent/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Link to="/" className="group mb-6 flex items-center gap-3">
              <div
                className="flex h-11 w-11 items-center justify-center rounded-xl bg-linear-to-br from-primary to-primary-dark transition-all duration-300 group-hover:scale-105"
                style={{
                  boxShadow:
                    "0 4px 20px color-mix(in srgb, var(--color-primary) 30%, transparent)",
                }}
              >
                <span className="text-xl font-bold text-white">ع</span>
              </div>
              <span className="text-xl font-bold text-white">
                {siteInfo.name}
              </span>
            </Link>
            <p className="mb-6 text-sm leading-relaxed text-neutral-500">
              {siteInfo.description}
            </p>
            <div className="flex gap-2">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-dark-card text-lg text-neutral-500 transition-all duration-300 hover:scale-110 hover:border-transparent hover:bg-linear-to-br hover:from-primary hover:to-primary-dark hover:text-white"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div>
            <FooterHeading>استكشف</FooterHeading>
            <FooterLinkList links={footerLinks.explore} />
          </div>

          <div>
            <FooterHeading>التصنيفات</FooterHeading>
            <FooterLinkList links={footerLinks.categories} />
          </div>

          <div>
            <FooterHeading>ابقى على اطلاع</FooterHeading>
            <p className="mb-4 text-sm text-neutral-500">
              اشترك للحصول على أحدث المقالات والتحديثات.
            </p>
            <form
              className="space-y-3"
              onSubmit={(event) => event.preventDefault()}
            >
              <div className="relative">
                <input
                  type="email"
                  placeholder="أدخل بريدك الإلكتروني"
                  className="w-full rounded-xl border border-border bg-dark-card px-4 py-3 text-sm text-white placeholder:text-neutral-600 transition-all duration-300 focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none"
                />
              </div>
              <button type="submit" className="btn-primary w-full text-sm">
                اشترك
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="relative border-t border-border">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-neutral-600">
              © {year} {siteInfo.name}. صنع بكل{" "}
              <HeartFilled className="text-primary" /> جميع الحقوق محفوظة.
            </p>
            <div className="flex gap-6">
              {footerLinks.legal.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-sm text-neutral-600 transition-colors duration-300 hover:text-primary"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
