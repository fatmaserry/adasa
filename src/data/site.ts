import data from "./data.json";

export type Post = (typeof data.posts)[number];
export type Category = (typeof data.categories)[number];

export const { posts, categories, siteInfo } = data;
