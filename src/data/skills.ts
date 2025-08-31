// 技能数据配置文件
// 用于管理技能展示页面的数据

export interface Skill {
	id: string;
	name: string;
	description: string;
	icon: string; // Iconify icon name
	category: "frontend" | "backend" | "database" | "tools" | "other";
	level: "beginner" | "intermediate" | "advanced" | "expert";
	experience: {
		years: number;
		months: number;
	};
	projects?: string[]; // 相关项目ID
	certifications?: string[];
	color?: string; // 技能卡片主题色
}

export const skillsData: Skill[] = [
	{
		id: "mysql",
		name: "MySQL",
		description: "世界上最流行的开源关系型数据库管理系统，广泛用于Web应用。",
		icon: "logos:mysql-icon",
		category: "database",
		level: "beginner",
		experience: { years: 0, months: 1 },
		color: "#4479A1",
	},
	{
		id: "astro",
		name: "Astro",
		description: "现代化的静态站点生成器，专注于内容驱动的网站。",
		icon: "logos:astro",
		category: "frontend",
		level: "beginner",
		experience: { years: 0, months: 1 },
		color: "#FF5D01",
	},
	{
		id: "vscode",
		name: "VS Code",
		description: "轻量级但功能强大的代码编辑器，丰富的插件生态。",
		icon: "logos:visual-studio-code",
		category: "tools",
		level: "intermediate",
		experience: { years: 1, months: 6 },
		color: "#007ACC",
	},
	{
		id: "git",
		name: "Git",
		description: "分布式版本控制系统，代码管理和团队协作必备工具。",
		icon: "logos:git-icon",
		category: "tools",
		level: "intermediate",
		experience: { years: 1, months: 0 },
		color: "#F05032",
	},
	{
		id: "github",
		name: "GitHub",
		description: "全球最大的代码托管平台和开发者社区。",
		icon: "logos:github-icon",
		category: "tools",
		level: "intermediate",
		experience: { years: 1, months: 0 },
		color: "#181717",
	},
	{
		id: "latex",
		name: "LaTeX",
		description: "专业的排版系统，广泛用于学术论文和技术文档编写。",
		icon: "simple-icons:latex",
		category: "tools",
		level: "advanced",
		experience: { years: 2, months: 0 },
		color: "#008080",
	},
	{
		id: "python",
		name: "Python",
		description: "通用编程语言，适用于Web开发、数据分析、机器学习等。",
		icon: "logos:python",
		category: "backend",
		level: "intermediate",
		experience: { years: 1, months: 0 },
		color: "#3776AB",
	},
];

// 获取技能统计信息
export const getSkillStats = () => {
	const total = skillsData.length;
	const byLevel = {
		beginner: skillsData.filter((s) => s.level === "beginner").length,
		intermediate: skillsData.filter((s) => s.level === "intermediate").length,
		advanced: skillsData.filter((s) => s.level === "advanced").length,
		expert: skillsData.filter((s) => s.level === "expert").length,
	};
	const byCategory = {
		frontend: skillsData.filter((s) => s.category === "frontend").length,
		backend: skillsData.filter((s) => s.category === "backend").length,
		database: skillsData.filter((s) => s.category === "database").length,
		tools: skillsData.filter((s) => s.category === "tools").length,
		other: skillsData.filter((s) => s.category === "other").length,
	};

	return { total, byLevel, byCategory };
};

// 按分类获取技能
export const getSkillsByCategory = (category?: string) => {
	if (!category || category === "all") {
		return skillsData;
	}
	return skillsData.filter((s) => s.category === category);
};

// 获取高级技能
export const getAdvancedSkills = () => {
	return skillsData.filter(
		(s) => s.level === "advanced" || s.level === "expert",
	);
};

// 计算总经验年数
export const getTotalExperience = () => {
	const totalMonths = skillsData.reduce((total, skill) => {
		return total + skill.experience.years * 12 + skill.experience.months;
	}, 0);
	return {
		years: Math.floor(totalMonths / 12),
		months: totalMonths % 12,
	};
};
