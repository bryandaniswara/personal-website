module.exports = {
	siteMetadata: {
		title: `bryandaniswara's blog`,
		name: `bryandaniswara`,
		siteUrl: `https://bryandaniswara.com`,
		description: `bryandaniswara's thougts on technology, programming, and life`,
		hero: {
			heading: `Hi, I'm Bryan Daniswara. Fullstack Javascript Developer`,
			maxWidth: 652,
		},
		social: [
			{
				name: `twitter`,
				url: `https://twitter.com/bryandaniswara`,
			},
			{
				name: `github`,
				url: `https://github.com/bryandaniswara`,
			},
			{
				name: `instagram`,
				url: `https://instagram.com/bryan.daniswara`,
			},
			{
				name: `linkedin`,
				url: `https://linkedin.com/in/bryandaniswara`,
			},
		],
	},
	plugins: [
		{
			resolve: '@narative/gatsby-theme-novela',
			options: {
				contentPosts: 'content/posts',
				contentAuthors: 'content/authors',
				basePath: '/',
				authorsPage: true,
				sources: {
					local: true,
					// contentful: true,
				},
			},
		},
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `bryandaniswara's blog`,
				start_url: `/`,
				background_color: `#323232`,
				theme_color: `#323232`,
				display: `standalone`,
				icon: `src/assets/favicon.png`,
			},
		},
		{
			resolve: `gatsby-plugin-google-analytics`,
			options: {
				trackingId: 'UA-173403977-1',
			},
		},
		{
			resolve: `gatsby-plugin-netlify-cms`,
			options: {},
		},
	],
};
