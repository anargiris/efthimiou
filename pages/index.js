import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";
import FadeInWhenVisible from "../utils/fadeIn";
import ScrollToTop from "../components/Scroller";
import Footer from "../components/Footer";
export default function Home() {
  return (
    <>
      <Head>
        <title>Ξυλεία Καστανιάς Ευθυμίου</title>
        <meta property="og:title" content="Ξυλεία Καστανιάς - Ευθυμίου" />
        <link rel="canonical" href="https://ksiliaefthimiou.gr/" />

        <meta property="og:type" content="website" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1.0"
        ></meta>
        <meta
          name="google-site-verification"
          content="urJ3emJOxOwYJiDZAeEguHShYRqdbUVrJXwxIfp2r1k"
        />
        <meta
          name="description"
          content="Η ξυλεία καστανιάς Ευθυμίου επεξεργάζεται ξύλα που προέρχονται από
          την Βόρεια Χαλκιδική και το Άγιο Όρος και τα αποστέλλει σε όλη την Ελλάδα κατόπιν παραγγελίας."
        ></meta>
        <meta
          property="og:description"
          content="Η ξυλεία καστανιάς Ευθυμίου επεξεργάζεται ξύλα που προέρχονται από
          την Βόρεια Χαλκιδική και το Άγιο Όρος και τα αποστέλλει σε όλη την Ελλάδα κατόπιν παραγγελίας."
        />
        <meta property="og:url" content="ksiliaefthimiou.gr"></meta>
        <meta name="robots" content="index, follow" />
      </Head>
      <Navbar />
      <header className="w-full h-screen relative bg-cover hero-image font-neohel">
        <div className="absolute w-full h-full top-0 left-0 bg-black bg-opacity-40">
          <div className="md:px-20 px-10 md:py-40 py-20 text-white">
            <h1
              className="text-6xl font-bold"
              style={{ textShadow: "1px 1px 10px black" }}
            >
              ΞΥΛΕΙΑ ΕΥΘΥΜΙΟΥ
            </h1>
            <motion.h2
              className="text-3xl my-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 100 }}
              transition={{ ease: "easeIn", duration: 8 }}
            >
              Επεξεργασία ξύλου καστανίας, αποστολή σε όλη την Ελλάδα.
            </motion.h2>
            <Link href="/epikoinwnia">
              <button className="bg-gray-100 text-lg shadow-xl mt-4 text-black p-4 font-black hover:bg-gray-800 hover:text-white transition duration-200">
                ΕΠΙΚΟΙΝΩΝΗΣΤΕ ΜΑΖΙ ΜΑΣ
              </button>
            </Link>
          </div>
        </div>
      </header>
      <main className="relative">
        <section
          className="min-h-screen flex md:flex-row flex-col-reverse font-neohel"
          style={{ backgroundColor: "#23CE6B" }}
        >
          <div className="relative md:w-1/2 md:h-auto h-screen bg-cover">
            <Image
              src="/bgs/outside.jpg"
              alt="outside of work station"
              layout="fill"
              alt="Image of the main work station"
            />
          </div>
          <FadeInWhenVisible styles="md:w-1/2 p-10">
            <div
              className="rounded-lg p-10 shadow-lg h-full relative"
              style={{ zIndex: 2, backgroundColor: "#F6F8FF" }}
            >
              <svg
                className="absolute opacity-20 top-0 right-0 w-20"
                viewBox="0 0 200 200"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="#24A148"
                  d="M52,-14.1C60.8,10.1,56.7,41.2,39,54.2C21.3,67.3,-10.1,62.1,-29.7,46.6C-49.3,31,-57.2,4.9,-50.3,-16.7C-43.4,-38.4,-21.7,-55.6,0,-55.6C21.6,-55.6,43.3,-38.3,52,-14.1Z"
                  transform="translate(100 100)"
                />
              </svg>
              <h2 className="text-2xl text-center font-bold">Η ΙΣΤΟΡΙΑ ΜΑΣ</h2>
              <p className="text-lg text-center mt-10">
                Η επιχείρηση μας ιδρύθηκε το 1996 και μέχρι σήμερα επεξεργάζεται
                την ξυλεία καστανιάς.
              </p>
              <p className="text-lg text-center mt-5">
                Επεξεργαζόμαστε ξύλα που προέρχονται από το Άγιο Όρος και την
                Βόρεια Χαλκιδική.
              </p>
              <p className="text-lg text-center mt-5">
                Διαθέτουμε Πλάκες καστανιάς, Καστανιά σκεπής, κολόνες,
                φουρούσια, πασσάλους στήριξης, σανίδες ραμποτέ, καδρόνια,
                πέργκολες, μοναστηριακά τραπέζια και πατώματα.
              </p>
            </div>
          </FadeInWhenVisible>
        </section>

        <section
          className="min-h-screen mb-4"
          style={{ backgroundColor: "#F6F8FF" }}
        >
          <h3 className="text-center font-bold text-2xl my-2 font-neohel">
            Φωτογραφίες
          </h3>

          <div className="flex flex-wrap md:gap-10 gap-5 mx-auto justify-center">
            <FadeInWhenVisible>
              <Image
                src="/pics/1.jpg"
                width={350}
                height={350}
                alt="Photographs from work no.1"
              />
            </FadeInWhenVisible>
            <FadeInWhenVisible>
              <Image
                src="/pics/2.jpg"
                width={350}
                height={350}
                alt="Photographs from work no.2"
              />
            </FadeInWhenVisible>
            <FadeInWhenVisible>
              <Image
                src="/pics/3.jpg"
                width={350}
                height={350}
                alt="Photographs from work no.3"
              />
            </FadeInWhenVisible>
            <FadeInWhenVisible>
              <Image
                src="/pics/4.jpg"
                width={350}
                height={350}
                alt="Photographs from work no.4"
              />
            </FadeInWhenVisible>
            <FadeInWhenVisible>
              <Image
                src="/pics/5.jpg"
                width={350}
                height={350}
                alt="Photographs from work no.5"
              />
            </FadeInWhenVisible>
            <FadeInWhenVisible>
              <Image
                src="/pics/6.jpg"
                width={350}
                height={350}
                alt="Photographs from work no.6"
              />
            </FadeInWhenVisible>
          </div>
        </section>
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}
