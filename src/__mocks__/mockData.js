export const AccordianData = [
	{
		title: {
			component: 'Text',
			text: 'title1',
		},
		content: {
			component: 'Text',
			text: 'Nibh inceptos amet laoreet lobortis facilisi sapien sit varius interdum',
		},
	},
	{
		title: 'title2',
		content:
			'PraesentAliquam turpis viverra sem aenean neque orci amet dolor porta',
	},
];

export default {
	screen_id: 'mock_screen_id',
	component: 'Layout',
	child: {
		component: 'Accordian',
		data: AccordianData,
	},
};
