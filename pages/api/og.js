import { ImageResponse } from '@vercel/og';

export const config = {
  runtime: 'experimental-edge',
};

const handler = () => {
  return new ImageResponse(
    (
      <div tw="flex flex-col w-full h-full bg-white justify-center items-center gap-8">
        <div tw="text-9xl" style={{ fontWeight: 900 }}>
          WCC
        </div>
        <div tw="text-2xl">Wisdom Coaching Classes</div>
      </div>
    )
  );
};

export default handler;
