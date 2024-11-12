import { NextRequest } from "next/server";
import { ImageResponse } from "next/og";

export const runtime = "edge"


export async function GET(req: NextRequest) {
	console.log(__dirname)
	try {
		// const fontBold = await interBold;
		const { searchParams } = req.nextUrl;
		const title = searchParams.get("title");
		if (!title) {
			return new Response("No title provided", { status: 500 });
		}

		const heading =
			title.length > 140 ? `${title.substring(0, 140)}...` : title;

		return new ImageResponse(<div
			style={{
				height: '100%',
				width: '100%',
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'flex-start',
				justifyContent: 'flex-start',
				backgroundColor: '#fff',
				fontSize: 32,
				fontWeight: 600,
				padding: 20
			}}
		>
			<div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 30 }}>
				<svg width="80px" height="80px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M22 7.662l1-1V18h-7v4.745L11.255 18H1V2h16.763l-1 1H2v14h9.668L15 20.331V17h7zm1.657-5.192a.965.965 0 0 1 .03 1.385l-9.325 9.324-4.097 1.755a.371.371 0 0 1-.487-.487l1.755-4.097 9.31-9.309a.98.98 0 0 1 1.385 0zm-10.1 9.965l-1.28-1.28-.961 2.24zm7.243-7.11l-1.414-1.413-6.469 6.47 1.414 1.413zm1.865-2.445l-.804-.838a.42.42 0 0 0-.6-.006l-1.168 1.168 1.414 1.415 1.152-1.152a.42.42 0 0 0 .006-.587z" /><path fill="none" d="M0 0h24v24H0z" /></svg>
				<p style={{ fontWeight: 600, fontSize: 24 }}>SagarBlog</p>
			</div>
			<h4 style={{ marginTop: 40 }}>{heading}</h4>
			<div style={{
				position: 'absolute',
				bottom: 0,
				left: 0,
				width: '100%',
				padding: 20,
				fontSize: 17,
				fontWeight: 300,
				display: 'flex',
				flexDirection: 'row',
				justifyContent: 'space-between'
			}}>
				<p>https://sagarrajak.info</p>
				<p>https://github.com/sagarrajak</p>
			</div>
		</div>, {
			width: 1200,
			height: 630,
		})
	} catch (err) {
		return new Response("Failed to generate image", { status: 500 })
	}
}
