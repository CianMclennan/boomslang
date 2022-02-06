module.exports = {
	async up(db, client) {
	  await db
		.collection("screens")
		.insertMany([
		  	{ 
				screen_id: "screen_1",
				component: "Layout",
				child: {
					component: "Text",
					text: "test 1"
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
					component: "Text",
					text: "test 3"
				},
			},
		]);
	},
  
	async down(db, client) {
	  await db.collection("screens").deleteMany({
		screen_id: {
		  $in: ["screen_1", "screen_2", "screen_3"],
		},
	  });
	},
  };
  