// 时间线数据配置文件
// 用于管理时间线页面的数据

export interface TimelineItem {
	id: string;
	title: string;
	description: string;
	type: "education" | "work" | "project" | "achievement";
	startDate: string;
	endDate?: string; // 如果为空表示至今
	location?: string;
	organization?: string;
	position?: string;
	skills?: string[];
	achievements?: string[];
	links?: {
		name: string;
		url: string;
		type: "website" | "certificate" | "project" | "other";
	}[];
	icon?: string; // Iconify icon name
	color?: string;
	featured?: boolean;
}

export const timelineData: TimelineItem[] = [
	{
		id: "current-finance-study",
		title: "金融学专业在读（数智金融方向）",
		description: "山东大学威海校区商学院",
		type: "education",
		startDate: "2025-09-01",
		location: "山东威海",
		organization: "山东大学威海校区商学院",
		icon: "material-symbols:account-balance",
		color: "#059669",
		featured: true,
	},
	{
		id: "physics-major-transfer",
		title: "空间科学与技术物理学专业",
		description: "山东大学威海校区空间科学与物理学院",
		type: "education",
		startDate: "2024-09-01",
		endDate: "2025-08-31",
		location: "山东威海",
		organization: "山东大学威海校区空间科学与物理学院",
		icon: "material-symbols:science",
		color: "#7C3AED",
	},
	{
		id: "academic-break",
		title: "休学一年",
		description: "为了更好地规划未来发展方向",
		type: "education",
		startDate: "2023-09-01",
		endDate: "2024-08-31",
		location: "河南",
		icon: "material-symbols:pause-circle",
		color: "#DC2626",
	},
	{
		id: "chemistry-major-start",
		title: "应用化学专业入学",
		description: "山东大学威海校区联合理学院",
		type: "education",
		startDate: "2023-09-01",
		endDate: "2023-12-31",
		location: "山东威海",
		organization: "山东大学威海校区联合理学院",
		icon: "material-symbols:science",
		color: "#2563EB",
		featured: true,
	},
	{
		id: "henan-gaokao-2023",
		title: "2023年河南高考",
		description: "考入山东大学威海校区",
		type: "achievement",
		startDate: "2023-06-07",
		endDate: "2023-06-08",
		location: "河南",
		organization: "河南省教育考试院",
		icon: "material-symbols:school",
		color: "#EA580C",
		featured: true,
	},
	{
		id: "olympiad-competition-2022",
		title: "第三十八届全国中学生物理竞赛河南省赛区二等奖",
		description: "物理学科竞赛",
		type: "achievement",
		startDate: "2022-10-15",
		endDate: "2022-10-16",
		location: "河南",
		organization: "全国中学生物理竞赛委员会",
		icon: "material-symbols:emoji-events",
		color: "#7C3AED",
		featured: true,
	},
	{
		id: "high-school-preparation",
		title: "高中学习阶段",
		description: "河南省焦作市第一中学",
		type: "education",
		startDate: "2020-09-01",
		endDate: "2023-06-06",
		location: "河南",
		organization: "河南省焦作市第一中学",
		icon: "material-symbols:school",
		color: "#059669",
	},
];

// 获取时间线统计信息
export const getTimelineStats = () => {
	const total = timelineData.length;
	const byType = {
		education: timelineData.filter((item) => item.type === "education").length,
		work: timelineData.filter((item) => item.type === "work").length,
		project: timelineData.filter((item) => item.type === "project").length,
		achievement: timelineData.filter((item) => item.type === "achievement")
			.length,
	};

	return { total, byType };
};

// 按类型获取时间线项目
export const getTimelineByType = (type?: string) => {
	if (!type || type === "all") {
		return timelineData.sort(
			(a, b) =>
				new Date(b.startDate).getTime() - new Date(a.startDate).getTime(),
		);
	}
	return timelineData
		.filter((item) => item.type === type)
		.sort(
			(a, b) =>
				new Date(b.startDate).getTime() - new Date(a.startDate).getTime(),
		);
};

// 获取特色时间线项目
export const getFeaturedTimeline = () => {
	return timelineData
		.filter((item) => item.featured)
		.sort(
			(a, b) =>
				new Date(b.startDate).getTime() - new Date(a.startDate).getTime(),
		);
};

// 获取当前进行中的项目
export const getCurrentItems = () => {
	return timelineData.filter((item) => !item.endDate);
};
