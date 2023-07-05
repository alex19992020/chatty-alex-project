import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>New chat</title>
      </Head>
      <div className="grid h-screen grid-cols-[260px_1fr]">
        <div>sidebar</div>
        <div className="flex flex-col bg-gray-700">
          <div className="flex-1">chat window</div>
          <footer className="bg-gray-800 p-10">footer</footer>
        </div>
      </div>
    </>
  );
}
