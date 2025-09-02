// 项目数据配置文件
// 用于管理项目展示页面的数据

export interface Project {
	id: string;
	title: string;
	description: string;
	image: string;
	category: "web" | "mobile" | "desktop" | "other";
	techStack: string[];
	status: "completed" | "in-progress" | "planned";
	liveDemo?: string;
	sourceCode?: string;
	startDate: string;
	endDate?: string;
	featured?: boolean;
	tags?: string[];
}

export const projectsData: Project[] = [
	{
		id: "personal-blog",
		title: "个人博客构建",
		description:
			"基于Astro框架开发的现代化个人博客，支持多语言、暗黑模式、响应式设计等功能。",
		image: "",
		category: "web",
		techStack: ["Astro", "TypeScript", "Tailwind CSS", "Svelte"],
		status: "completed",
		startDate: "2024-01-01",
		endDate: "2024-12-01",
		featured: true,
		tags: ["Blog", "Personal", "Web Development"],
	},
	{
		id: "day-trading-handbook",
		title: "日内交易员技术手册",
		description:
			"专为日内交易员编写的技术手册，涵盖交易策略、风险管理、技术分析等核心内容。",
		image: "",
		category: "other",
		techStack: ["Writing", "Research", "Financial Analysis"],
		status: "completed",
		startDate: "2024-06-01",
		endDate: "2024-12-01",
		featured: true,
		tags: ["金融", "交易", "Technical Analysis", "Risk Management"],
	},
];

// 获取项目统计信息
export const getProjectStats = () => {
	const total = projectsData.length;
	const completed = projectsData.filter((p) => p.status === "completed").length;
	const inProgress = projectsData.filter(
		(p) => p.status === "in-progress",
	).length;
	const planned = projectsData.filter((p) => p.status === "planned").length;

	return {
		total,
		byStatus: {
			completed,
			inProgress,
			planned,
		},
	};
};

// 按分类获取项目
export const getProjectsByCategory = (category?: string) => {
	if (!category || category === "all") {
		return projectsData;
	}
	return projectsData.filter((p) => p.category === category);
};

// 获取特色项目
export const getFeaturedProjects = () => {
	return projectsData.filter((p) => p.featured);
};

// 获取所有技术栈
export const getAllTechStack = () => {
	const techSet = new Set<string>();
	projectsData.forEach((project) => {
		project.techStack.forEach((tech) => techSet.add(tech));
	});
	return Array.from(techSet).sort();
};
