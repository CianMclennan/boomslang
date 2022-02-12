const defaultScreens = [
	{
		screen_id: "screen_1",
		component: "Layout",
		child: {
			component: "Accordian",
			data: [{
				title: {
					component: "Text",
					text: "title text"
				},
				content: {
					component: "Text",
					text: "Main text"
				}
			}]
		},
	},
	{
		screen_id: "screen_2",
		component: "Layout",
		child: {
			component: "Text",
			text: "test 2"
		},
	},
	{
		screen_id: "screen_3",
		component: "Layout",
		child: {
			component: "Accordian",
			data: [{
				title: {
					component: "Text",
					text: "title text"
				},
				content: {
					component: "Text",
					text: "Main text"
				}
			}]
		},
	},
];

module.exports = {
	async up(db, client) {
	  	await db
		.collection("screens")
		.insertMany(defaultScreens);
	},
  
	async down(db, client) {
	  await db.collection("screens").deleteMany({
		screen_id: {
		  $in: defaultScreens.map(screen => screen.screen_id),
		},
	  });
	},
  };
  