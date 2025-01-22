import { ImageResponse } from 'next/og';
import { env } from '../../../../env';

const geistResponse = fetch(
    new URL('public/Geist-Regular.woff2', env.BASE_URL)
).then((res) => res.arrayBuffer());
export async function GET(request: Request) {
    const geist = await geistResponse;
    try {
        const { searchParams } = new URL(request.url);

        // ?title=<title>
        const hasTitle = searchParams.has('title');
        const title = hasTitle
            ? searchParams.get('title')?.slice(0, 100)
            : 'My default title';

        return new ImageResponse(
            (
                <div
                    style={{
                        backgroundColor: 'black',
                        backgroundSize: '150px 150px',
                        height: '100%',
                        width: '100%',
                        display: 'flex',
                        textAlign: 'center',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexDirection: 'column',
                        flexWrap: 'nowrap',
                    }}
                >
                    <div
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            justifyItems: 'center',
                        }}
                    >
                        <img
                            alt="Vercel"
                            height={200}
                            src="https://custom.typingmind.com/assets/models/deepseek.png"
                            style={{ margin: '0 30px' }}
                            width={232}
                        />
                    </div>
                    <div
                        style={{
                            fontSize: 60,
                            fontStyle: 'normal',
                            letterSpacing: '-0.025em',
                            color: 'white',
                            marginTop: 30,
                            padding: '0 120px',
                            lineHeight: 1.4,
                            whiteSpace: 'pre-wrap',
                        }}
                    >
                        {title}
                    </div>
                    <div
                        style={{
                            fontSize: 32,
                            fontStyle: 'normal',
                            letterSpacing: '-0.025em',
                            color: 'white',
                            marginTop: 30,
                            padding: '0 120px',
                            lineHeight: 1.4,
                            whiteSpace: 'pre-wrap',
                        }}
                    >
                        Next.js 15 Project V0
                    </div>
                </div>
            ),
            {
                width: 1200,
                height: 630,
                // fonts: [
                //     {
                //         name: 'Geist',
                //         data: geist,
                //         style: 'normal',
                //     },
                // ],
            }
        );
    } catch (e: any) {
        for (let i = 0; i < 100; i++) {
            console.log('\n');
        }
        console.log(`${e.message}`);
        for (let i = 0; i < 100; i++) {
            console.log('\n');
        }
        return new Response(`Failed to generate the image`, {
            status: 500,
        });
    }
}
