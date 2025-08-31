import { defineCollection, z } from "astro:content";

// 检查是否显示归档文章的环境变量
const showArchivedPosts = import.meta.env.SHOW_ARCHIVED_POSTS === "true";

const postsCollection = defineCollection({
	schema: z.object({
		title: z.string(),
		published: z.date(),
		updated: z.date().optional(),
		draft: z.boolean().optional().default(false),
		description: z.string().optional().default(""),
		image: z.string().optional().default(""),
		tags: z.array(z.string()).optional().default([]),
		category: z.string().optional().nullable().default(""),
		lang: z.string().optional().default(""),
		pinned: z.boolean().optional().default(false),
		author: z.string().optional().default(""),
		sourceLink: z.string().optional().default(""),
		licenseName: z.string().optional().default(""),
		licenseUrl: z.string().optional().default(""),

		/* For internal use */
		prevTitle: z.string().default(""),
		prevSlug: z.string().default(""),
		nextTitle: z.string().default(""),
		nextSlug: z.string().default(""),
	}),
	// 添加过滤函数，根据环境变量控制归档文章的显示
	async transform(entry) {
		// 如果环境变量设置为false，则隐藏归档文件夹中的文章
		if (!showArchivedPosts && entry.id.includes("_archived/")) {
			return null; // 返回null会隐藏这篇文章
		}
		return entry;
	},
});

const specCollection = defineCollection({
	schema: z.object({}),
});

export const collections = {
	posts: postsCollection,
	spec: specCollection,
};
