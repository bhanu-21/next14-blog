import { ImageResponse } from 'next/og'

export const contentType = 'image/png'
// Image metadata
export const alt = 'About Acme'
export const size = { width: 1200, height: 630, }

const titles = {
    'first': 'Hello First!',
    'second': 'Hello Second!'
}

// Image generation
export default async function Image({ params }) {
    const { slug } = await params;
    const interSemiBold = fetch(new URL('./inter.ttf', import.meta.url)).then((res) => res.arrayBuffer())  // Font

    return new ImageResponse((
        <div style={{
            fontSize: 84,
            background: 'white',
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
        }}>
            <div style={{ margin: 25 }}>{titles[slug]}</div>
            <div style={{ margin: 25, fontSize: 32 }}>This is a desc of the blog post</div>
        </div>
    ),
        // ImageResponse options
        {
            ...size,  // For convenience, we can re-use the exported opengraph-image size config to also set the ImageResponse's width and height.
            fonts: [
                {
                    name: 'Inter',
                    data: await interSemiBold,
                    style: 'normal',
                    weight: 400,
                },
            ],
        }
    )
}