import type { GetStaticPathsResult } from "next";

export async function getStaticProps() {
  return {
    props: { time: Date.now() },
    revalidate: 10,
  };
}

export function getStaticPaths(): Promise<GetStaticPathsResult> {
  return Promise.resolve({
    paths: [{ params: { slug: "should-work" } }],
    fallback: false,
  });
}

export default function Page({ time }: { time: number }) {
  return <div>{time}</div>;
}
