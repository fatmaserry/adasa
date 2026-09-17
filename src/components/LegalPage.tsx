import type { ReactNode } from "react";
import { Link } from "react-router";
import { LeftOutlined, MailOutlined } from "@ant-design/icons";
import { siteInfo } from "../data/site";

type Section = {
  title: string;
  content?: string;
  itemsLabel?: string;
  items?: ReactNode[];
};

type LegalPageProps = {
  title: string;
  icon: ReactNode;
  tone: "primary" | "accent";
  notice: { icon: ReactNode; title: string; text: string };
  sections: Section[];
  itemIcon: ReactNode;
  contactTitle: string;
  contactText: string;
  footerText: string;
  related: { to: string; label: string };
};

const tones = {
  primary: {
    glow: "top-20 right-20 bg-primary/20",
    notice: "border-primary/20 bg-primary/10",
    title: "text-primary",
    text: "text-primary-light/80",
  },
  accent: {
    glow: "bottom-20 left-20 bg-accent/20",
    notice: "border-accent/20 bg-accent/10",
    title: "text-accent",
    text: "text-accent/80",
  },
};

function SectionTitle({ number, title }: { number: number; title: string }) {
  return (
    <h2 className="mb-4 flex items-center gap-3 text-2xl font-bold text-white">
      <span className="flex size-8 items-center justify-center rounded-lg bg-linear-to-br from-primary to-accent text-sm font-bold text-white">
        {number}
      </span>
      {title}
    </h2>
  );
}

function LegalPage({
  title,
  icon,
  tone,
  notice,
  sections,
  itemIcon,
  contactTitle,
  contactText,
  footerText,
  related,
}: LegalPageProps) {
  const colors = tones[tone];

  return (
    <div className="bg-dark">
      <header className="relative overflow-hidden py-20">
        <div className="grid-pattern absolute inset-0" />
        <div className="absolute inset-0 opacity-30">
          <div className={`absolute size-72 rounded-full blur-[100px] ${colors.glow}`} />
        </div>
        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <nav className="mb-8 flex items-center justify-center gap-2 text-sm">
            <Link to="/" className="text-neutral-400 transition-colors hover:text-white">
              الرئيسية
            </Link>
            <LeftOutlined className="text-neutral-600" />
            <span className="font-medium text-primary">{title}</span>
          </nav>
          <div className="mb-6 inline-flex size-16 items-center justify-center rounded-2xl border border-primary/30 bg-primary/10 text-3xl text-primary backdrop-blur-sm">
            {icon}
          </div>
          <h1 className="mb-4 text-4xl font-bold text-white md:text-5xl">{title}</h1>
          <p className="text-lg text-neutral-400">آخر تحديث: 15 يناير 2026</p>
        </div>
      </header>

      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <div className={`mb-12 rounded-2xl border p-6 ${colors.notice}`}>
          <div className="flex gap-4">
            <div className={`shrink-0 text-2xl ${colors.title}`}>{notice.icon}</div>
            <div>
              <h3 className={`mb-1 font-semibold ${colors.title}`}>{notice.title}</h3>
              <p className={`text-sm ${colors.text}`}>{notice.text}</p>
            </div>
          </div>
        </div>

        <div className="space-y-12">
          {sections.map((section, index) => (
            <section key={section.title}>
              <SectionTitle number={index + 1} title={section.title} />
              <div className="pr-11">
                {section.content && (
                  <p className={`leading-relaxed text-neutral-400 ${section.items ? "mb-4" : ""}`}>
                    {section.content}
                  </p>
                )}
                {section.itemsLabel && (
                  <p className="mb-3 font-medium text-neutral-300">{section.itemsLabel}</p>
                )}
                {section.items && (
                  <ul className="space-y-3">
                    {section.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-3 text-neutral-400">
                        <span className="mt-0.5 shrink-0 text-xl">{itemIcon}</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </section>
          ))}

          <section>
            <SectionTitle number={sections.length + 1} title={contactTitle} />
            <div className="pr-11">
              <p className="mb-4 leading-relaxed text-neutral-400">{contactText}</p>
              <a
                href={`mailto:${siteInfo.email}`}
                className="inline-flex items-center gap-2 font-medium text-primary hover:text-primary-light"
              >
                <MailOutlined className="text-xl" />
                {siteInfo.email}
              </a>
            </div>
          </section>
        </div>

        <div className="mt-16 border-t border-border pt-8">
          <p className="text-center text-sm text-neutral-500">
            {footerText}{" "}
            <Link to={related.to} className="font-medium text-primary hover:text-primary-light">
              {related.label}
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
}

export default LegalPage;
