import type { ReactNode } from "react";
import { Link } from "react-router";
import {
  ControlOutlined,
  LeftOutlined,
  PictureOutlined,
  SunOutlined,
  UserOutlined,
} from "@ant-design/icons";
import type { Category } from "../data/site";

const styles: Record<string, { bg: string; icon: ReactNode }> = {
  emerald: { bg: "from-primary to-accent", icon: <SunOutlined /> },
  purple: { bg: "from-primary-dark to-primary-light", icon: <UserOutlined /> },
  blue: { bg: "from-primary to-accent", icon: <PictureOutlined /> },
  orange: { bg: "from-primary to-accent", icon: <ControlOutlined /> },
};

function CategoryCard({ category }: { category: Category }) {
  const style = styles[category.color] ?? styles.orange;

  return (
    <Link
      to={`/blog?category=${category.name}`}
      className="group relative block overflow-hidden rounded-2xl border border-border bg-dark-card p-6 transition-all duration-500 hover:-translate-y-1 hover:border-primary/30"
    >
      <div
        className={`absolute inset-0 bg-linear-to-br ${style.bg} opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
      />
      <div className="relative z-10">
        <div className="mb-4 flex size-12 items-center justify-center rounded-xl border border-primary/20 bg-primary/10 text-xl text-primary transition-colors duration-300 group-hover:border-transparent group-hover:bg-white/20 group-hover:text-white">
          {style.icon}
        </div>
        <h3 className="mb-1 text-lg font-bold text-white">{category.name}</h3>
        <p className="text-sm text-neutral-500 transition-colors duration-300 group-hover:text-white/80">
          {category.count} مقالة
        </p>
        <div className="absolute top-6 left-6 flex size-8 items-center justify-center rounded-full bg-border text-white opacity-0 transition-all duration-300 group-hover:bg-white/20 group-hover:opacity-100">
          <LeftOutlined className="text-sm" />
        </div>
      </div>
    </Link>
  );
}

export default CategoryCard;
