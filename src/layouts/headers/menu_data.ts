interface DataType {
	id: number;
	title: string;
	link: string;
	has_dropdown?: boolean;
	sub_menus?: {
		link: string;
		title: string;
	}[];
}
// menu data
const menu_data: DataType[] = [
	{
		id: 1,
		title: "Ana Sayfa",
		link: "/",
		has_dropdown: false,
	},
	{
		id: 2,
		title: "Hakkında",
		link: "/about",
		has_dropdown: false,
	},
	{
		id: 3,
		title: "Hİzmetler",
		link: "/service",
		has_dropdown: false,
	},
	{
		id: 4,
		title: "ProJeler",
		link: "#",
		has_dropdown: true,
		sub_menus: [
			{ link: "/projects", title: "Projects List" },
			{ link: "/single-project", title: "Single Portfolio" },
		],
	},
	{
		id: 5,
		title: "Blog",
		link: "/blog",
		has_dropdown: false,
	},
	{
		id: 6,
		title: "İLETİŞİM",
		link: "/contact",
		has_dropdown: false,
	},
];
export default menu_data;
