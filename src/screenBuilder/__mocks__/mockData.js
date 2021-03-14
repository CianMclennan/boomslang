export default {
	component: 'Layout',
	child: {
		component: 'Accordian',
		data: [
			{
				title: {
					component: 'Text',
					text: 'title1',
				},
				content: {
					component: 'Text',
					text:
						'Nibh inceptos amet laoreet lobortis facilisi sapien sit varius interdum',
				},
			},
			{
				title: 'title2',
				content:
					'PraesentAliquam turpis viverra sem aenean neque orci amet dolor porta',
			},
			{
				title: 'title3',
				content:
					'Sollicitudin scelerisque nisl eu laoreet torquent accumsan proin urna tortor',
			},
			{
				title: 'title4',
				content:
					'Quam nam tortor lorem odio sed posuere pharetra volutpat feugiat',
			},
			{
				title: 'title5',
				content:
					'Nascetur torquent ligula vel aliquam habitant dignissim malesuada nullam accumsan',
			},
		],
	},
};
