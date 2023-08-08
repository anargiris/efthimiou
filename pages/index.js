import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";
import FadeInWhenVisible from "../utils/fadeIn";
import ScrollToTop from "../components/Scroller";
import Footer from "../components/Footer";
import OpacityFade from "../utils/opacityFade";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ξυλεία Καστανιάς | Ευθυμίου</title>
        <link rel="canonical" href="https://ksiliaefthimiou.gr/" />

        <meta property="og:type" content="website" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1.0"
        ></meta>

        <meta
          name="description"
          content="Η ξυλεία καστανιάς Ευθυμίου επεξεργάζεται ξύλα που προέρχονται από
          την Βόρεια Χαλκιδική και το Άγιο Όρος και τα αποστέλλει σε όλη την Ελλάδα."
        ></meta>
        <meta
          property="og:site_name"
          content="Ξυλεία Καστανιάς Ευθυμίου - Χαλκιδική"
        />
        <meta
          property="og:image"
          content="https://ksiliaefthimiou.gr/bgs/outside.jpg"
        />
        <meta
          property="og:description"
          content="Η ξυλεία καστανιάς Ευθυμίου επεξεργάζεται ξύλα που προέρχονται από
          την Βόρεια Χαλκιδική και το Άγιο Όρος και τα αποστέλλει σε όλη την Ελλάδα."
        />
        <meta property="og:url" content="https://ksiliaefthimiou.gr"></meta>
        <meta name="robots" content="index, follow" />
      </Head>
      <Navbar />
      <header className="w-full h-screen relative bg-cover hero-image font-neohel">
        <div className="absolute w-full h-full top-0 left-0 bg-black bg-opacity-40">
          <div className="md:px-20 px-10 md:py-40 py-20 ">
            <h1
              className="md:text-6xl text-4xl font-bold text-white"
              style={{ textShadow: "1px 1px 10px black" }}
            >
              ΞΥΛΕΙΑ ΚΑΣΤΑΝΙΑΣ ΕΥΘΥΜΙΟΥ
            </h1>
            <motion.h2
              className="md:text-3xl text-xl my-4 text-white"
              initial={{ opacity: 0 }}
              animate={{ opacity: 100 }}
              transition={{ ease: "easeIn", duration: 8 }}
            >
              Επεξεργασία ξύλου καστανιάς Αγίου Όρους και Βόρειας Χαλκιδικής.
            </motion.h2>
            <motion.h3
              className="md:text-3xl text-xl my-4 text-white"
              initial={{ opacity: 0 }}
              animate={{ opacity: 100 }}
              transition={{ ease: "easeIn", duration: 8, delay: 0.5 }}
            >
              Αποστολή σε Θεσσαλονίκη, Αττική και υπόλοιπη Ελλάδα.
            </motion.h3>
            <Link href="/epikoinwnia">
              <button className="bg-white text-lg shadow-xl mt-4 text-black p-4 font-black hover:bg-gray-800 hover:text-white transition duration-200">
                ΕΠΙΚΟΙΝΩΝΗΣΤΕ ΜΑΖΙ ΜΑΣ
              </button>
            </Link>
            <Link href="/proionta">
              <button className="text-yellow-100 block focus:outline-none cursor-pointer hover:text-yellow-300 transition duration-200 underline mt-10">
                ΔΕΙΤΕ ΤΑ ΠΡΟΙΟΝΤΑ ΜΑΣ
              </button>
            </Link>
          </div>
        </div>
      </header>
      <main className="relative">
        <section
          className="min-h-screen flex md:flex-row flex-col-reverse font-neohel"
          style={{ backgroundColor: "#323232" }}
        >
          <div className="relative md:w-1/2 md:h-auto h-screen bg-cover">
            <Image
              src="/bgs/bg-cover.jpg"
              fill
              alt="Ξυλεία Καστανιάς- Εργαστήριο"
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
              <h3 className="text-2xl 2xl:text-5xl text-center font-bold">
                Η ΙΣΤΟΡΙΑ ΜΑΣ
              </h3>
              <p className="text-lg 2xl:text-3xl text-center mt-10">
                Η επιχείρηση μας ιδρύθηκε το 1995 και μέχρι σήμερα επεξεργάζεται
                την ξυλεία καστανιάς.
              </p>
              <p className="text-lg 2xl:text-3xl text-center mt-5">
                Επεξεργαζόμαστε ξύλα που προέρχονται από το Άγιο Όρος και την
                Βόρεια Χαλκιδική.
              </p>
              <p className="text-lg 2xl:text-3xl text-center mt-5">
                Διαθέτουμε Πλάκες καστανιάς, Καστανιά σκεπής, κολώνες,
                φουρούσια, πασσάλους στήριξης, σανίδες ραμποτέ, καδρόνια,
                πέργκολες, μοναστηριακά τραπέζια και πατώματα.
              </p>
            </div>
          </FadeInWhenVisible>
        </section>

        <section className="pt-5 pb-10 border border-gray-300 shadow-md max-w-6xl mx-auto rounded-md mt-4 relative">
          <h3 className="text-3xl text-center font-bold font-neohel text-gray-900">
            Τι είναι το ξύλο καστανιάς;
          </h3>
          <p className="text-center px-10 md:px-20 mt-2 text-xl text-gray-800">
            Η καστανιά είναι ξύλο μεγάλης αντοχής και πανάρχαιο, καθώς υπάρχουν
            ευρήματά της από την εποχή του Χαλκού. Οι καστανιές είναι μεγάλα
            δέντρα, το ύψος τους φτάνει έως και 35 μέτρα.
          </p>
          <p className="text-center px-10 md:px-20 mt-2 text-xl text-gray-800">
            Η ξυλεία καστανιάς Ευθυμίου επεξεργάζεται και αποστέλλει πλάκες,
            σανίδια (τάβλα) και κολώνες καστανιάς. Έχουμε πελάτες απο την
            Θεσσαλονίκη και την Βέροια έως την Κρήτη. Για να επικοινωνήσετε μαζί
            μας και να κάνετε παραγγελία κάντε click{" "}
            <Link href="/epikoinwnia">
              <span className="text-blue-800 cursor-pointer"> εδώ.</span>
            </Link>
          </p>
          <span className="absolute bottom-0 left-0 text-xs text-gray-700">
            Πληροφορίες από{" "}
            <a
              href="https://el.wikipedia.org/wiki/%CE%9A%CE%B1%CF%83%CF%84%CE%B1%CE%BD%CE%B9%CE%AC"
              target="_blank"
              rel="noreferrer"
              className="underline"
            >
              wikipedia.
            </a>
          </span>
        </section>
        <section
          className="min-h-screen mb-4"
          style={{ backgroundColor: "#F6F8FF" }}
        >
          <p className="text-center font-bold text-2xl my-2 font-neohel">
            Φωτογραφίες
          </p>

          <div className="flex flex-wrap md:gap-10 gap-5 mx-auto justify-center">
            <FadeInWhenVisible>
              <Image
                src="/pics/1.jpg"
                width={350}
                height={350}
                alt="Ξυλεία καστανιάς φωτογραφία no.1"
              />
            </FadeInWhenVisible>
            <FadeInWhenVisible>
              <Image
                src="/pics/2.jpg"
                width={350}
                height={350}
                alt="Ξυλεία καστανιάς φωτογραφία no.2"
              />
            </FadeInWhenVisible>
            <FadeInWhenVisible>
              <Image
                src="/pics/3.jpg"
                width={350}
                height={350}
                alt="Ξυλεία καστανιάς φωτογραφία no.3"
              />
            </FadeInWhenVisible>
            <FadeInWhenVisible>
              <Image
                src="/pics/4.jpg"
                width={350}
                height={350}
                alt="Ξυλεία καστανιάς φωτογραφία no.4"
              />
            </FadeInWhenVisible>
            <FadeInWhenVisible>
              <Image
                src="/pics/5.jpg"
                width={350}
                height={350}
                alt="Ξυλεία καστανιάς φωτογραφία no.5"
              />
            </FadeInWhenVisible>
            <FadeInWhenVisible>
              <Image
                src="/pics/6.jpg"
                width={350}
                height={350}
                alt="Ξυλεία καστανιάς φωτογραφία no.6"
              />
            </FadeInWhenVisible>
          </div>
        </section>
        <section className="text-center 2xl:text-3xl mb-4">
          Για πληροφορίες και τιμές επικοινωνήστε μαζί μας
          <Link href="/epikoinwnia">
            <span className="text-blue-700 cursor-pointer"> εδώ.</span>
          </Link>
        </section>
      </main>
      <section className="xl:min-h-full min-h-screen relative pb-2">
        <Image
          src="/bgs/section-bg.jpg"
          fill
          alt="ξύλο καστανιάς background"
          priority={true}
        />
        <div className="relative z-10 py-4">
          <h4 className="text-5xl font-bold text-gray-900 font-neohel text-center">
            Ξυλεία καστανιάς απο την Χαλκιδική.
          </h4>
          <OpacityFade>
            <h5 className="text-center font-neohel font-bold text-gray-800 mt-10 text-2xl">
              Εδώ και δεκαετίες η οικογενειακή επιχείρησή μας επεξεργαζεται ξύλα
              καστανιάς απο το γειτονικό Άγιο Όρος.
            </h5>
          </OpacityFade>
        </div>
        <div className="bg-gray-900 mt-10 text-yellow-200 bg-opacity-90 text-center p-4 relative z-10">
          <p className="text-2xl font-neohel font-bold">
            Υποχρέωση μας είναι η άριστη εξυπηρέτηση των πελατών μας!
          </p>
        </div>
        <div className="relative z-10">
          <p className="text-black text-center font-neohel text-lg mt-12 font-bold">
            Τα ξύλα καστανιάς διακρίνονται για τη μεγάλη αντοχή και διάρκεια
            ζωής τους.
            <br />
            Φτιάχνουμε κολώνες, τάβλα και πλάκες καστανιάς.
          </p>
        </div>
        <div className="flex justify-center items-center">
          <Link href="/epikoinwnia">
            <button className="bg-gray-100 border-2 mt-10 border-gray-600 text-lg shadow-xl text-black p-4 font-black hover:bg-gray-800 hover:text-white transition duration-200 relative z-10">
              ΕΠΙΚΟΙΝΩΝΗΣΤΕ ΜΑΖΙ ΜΑΣ
            </button>
          </Link>
        </div>
      </section>
      <Footer />
      <ScrollToTop />
    </>
  );
}
