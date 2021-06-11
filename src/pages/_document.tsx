import Document, { Html, Head, Main, NextScript } from "next/document";

export default class Site extends Document {
	static async getInitialProps(document) {
		const title = document.pathname.split("/")[1];

		return {
			html: "",
			location: document.pathname,
			title: title.charAt(0).toUpperCase() + title.slice(1)
		};
	}

	render() {
		return (
			<Html>
				<Head>
					<meta name="title" content={(this.props as any).title + " • CallumDEV"} />
					<meta name="description" content="Full stack developer working with NodeJS, TypeScript and NextJS!" />
					<meta property="og:image" content="/avatar.png" />
					<meta name="keywords" content="developer,discord,fullstack,nextjs,typescript,botdeveloper,botdev,discordbots" />
					<meta name="robots" content="index, follow" />
					<meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
					<meta name="language" content="English" />
					<meta name="theme-color" content="#0073a1" />
					<meta name="revisit-after" content="1 days" />
					<link rel="preconnect" href="https://fonts.gstatic.com" />
					<link href="https://fonts.googleapis.com/css2?family=Inter&display=swap" rel="stylesheet" />
					<link rel="icon" href="favicon.png" />
					<link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.15.3/css/all.css" />
				</Head>

				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}
