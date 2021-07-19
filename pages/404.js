import Head from "next/head";
import Link from "next/link";
import Navbar from "../components/Navbar";

const NotFound = () => {
  return (
    <>
      <Head>
        <meta name="googlebot" content="noindex" />
        <meta name="googlebot" content="nofollow" />
        <title>404</title>
      </Head>
      <Navbar />
      <main className="text-center">
        <p className="text-7xl font-bold text-yellow-800">404</p>
        <h1>Η σελίδα δεν υπάρχει!</h1>
        <p>Παρακαλώ συνεχίστε στην αρχική σελίδα.</p>
        <Link href="/">
          <span className="cursor-pointer text-xl text-yellow-700 mt-20">
            Αρχική σελίδα.
          </span>
        </Link>
      </main>
    </>
  );
};

export default NotFound;
