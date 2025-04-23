import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>BSSAJ - Website Under Construction</title>
        <meta
          name="description"
          content="Bangladeshi Student’s Support Association in Japan"
        />
      </Head>
      <div className="max-w-2xl mx-auto text-center mt-20 p-20 card bg-base-200 shadow-xl">
        <div className="card-body">
          <h1 className="text-3xl font-bold mb-4">
            🚧 Website Under Construction 🚧
          </h1>
          <p className="mb-6 text-lg">
            We're working hard to bring you a new digital platform for BSSAJ.
            Meanwhile, stay connected with us through our social channels below.
          </p>
          <div className="space-y-2">
            <p>
              📘 Facebook:{" "}
              <a
                href="https://facebook.com/bssajapan"
                className="text-primary underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                facebook.com/bssajapan
              </a>
            </p>
            <p>
              📧 Email:{" "}
              <a
                href="mailto:info@bssaj.org"
                className="text-primary underline"
              >
                info@bssaj.org
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
