import React from "react";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollToTop from "../components/Scroller";
import Image from "next/image";

const proionta = () => {
  return (
    <>
      <Head>
        <title>Ξυλεία Ευθυμίου - Προιόντα</title>
        <meta
          property="og:title"
          content="Ξυλεία Καστανιάς | Ευθυμίου | Προιόντα"
        />
        <link rel="canonical" href="http://ksiliaefthimiou.gr/proionta" />
        <meta property="og:type" content="website" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1.0"
        ></meta>
        <meta
          name="description"
          content="Η ξυλεία καστανιάς Ευθυμίου επεξεργάζεται ξύλα που προέρχονται από
          την Βόρεια Χαλκιδική και το Άγιο Όρος και τα αποστέλλει σε όλη την Ελλάδα κατόπιν παραγγελίας."
        />
        <meta
          property="og:description"
          content="Η ξυλεία καστανιάς Ευθυμίου επεξεργάζεται ξύλα που προέρχονται από
          την Βόρεια Χαλκιδική και το Άγιο Όρος και τα αποστέλλει σε όλη την Ελλάδα κατόπιν παραγγελίας."
        />
        <meta property="og:url" content="ksiliaefthimiou.gr/proionta"></meta>
        <meta name="robots" content="index, follow" />
      </Head>
      <Navbar />
      <section
        className="min-h-screen font-neohel"
        style={{ backgroundColor: "#23CE6B" }}
      >
        <h2 className="text-center text-2xl font-bold py-2">
          ΚΟΛΩΝΕΣ ΚΑΣΤΑΝΙΑΣ
        </h2>
        <p className="text-center font-mono">
          Οι κολώνες καστανιάς χρησιμοποιούνται κυρίως για πέργολες. Οι
          διαστάσεις τους ξεκινάνε από 8x8 και φτάνουν έως 20x20.
        </p>
        <div className="flex md:flex-row flex-col md:gap-20 md:justify-center gap-5 flex-wrap mt-8 md:ml-3">
          <div>
            <Image
              src="/pics/5.jpg"
              height={400}
              width={400}
              alt="Photo of Product `ΚΟΛΩΝΕΣ` no.1"
            />
          </div>
          <Image
            src="/pics/kolones1.jpg"
            height={400}
            width={400}
            alt="Photo of Product `ΚΟΛΩΝΕΣ` no.2"
          />
          <Image
            src="/pics/kolones2.jpg"
            height={400}
            width={400}
            alt="Photo of Product `ΚΟΛΩΝΕΣ` no.3"
          />
        </div>
      </section>
      <section
        className="min-h-screen font-neohel"
        style={{ backgroundColor: "#50514F" }}
      >
        <h2 className="text-center text-2xl font-bold py-2">ΠΛΑΚΑ ΚΑΣΤΑΝΙΑΣ</h2>
        <p className="text-center font-mono">
          Η κύρια χρήση της πλάκας καστανιάς είναι για κουφώματα και ιδιαίτερα
          για τραπέζια λόγω της μεγάλης αντοχής της.
        </p>

        <div className="flex md:flex-row flex-col md:gap-20 md:justify-center gap-5 flex-wrap mt-8 md:ml-3">
          <Image
            src="/pics/2.jpg"
            height={400}
            width={400}
            alt="Photo of product `ΠΛΑΚΑ` no.1"
          />
          <Image
            src="/pics/plaka1.jpg"
            height={400}
            width={400}
            alt="Photo of product `ΠΛΑΚΑ` no.2"
          />
          <Image
            src="/pics/plaka2.jpg"
            height={400}
            width={400}
            alt="Photo of product `ΠΛΑΚΑ` no.3"
          />
        </div>
      </section>
      <section
        className="min-h-screen font-neohel"
        style={{ backgroundColor: "#F6F8FF" }}
      >
        <h2 className="text-center text-2xl font-bold py-2">
          ΤΑΒΛΑ (ΣΑΝΙΔΙΑ) ΚΑΣΤΑΝΙΑΣ
        </h2>
        <p className="text-center font-mono">
          Τα σανίδια καστανιάς χρησιμοποιούνται κυρίως για πατώματα, οροφές,
          πατώματα παραλίας και κουφώματα.
        </p>
        <div className="flex md:flex-row flex-col md:gap-20 md:justify-center gap-5 flex-wrap mt-8 md:ml-3">
          <Image
            src="/pics/1.jpg"
            height={400}
            width={400}
            alt="photo of product `ΤΑΒΛΑ` no.1"
          />
          <Image
            src="/pics/tavla1.jpg"
            height={400}
            width={400}
            alt="photo of product `ΤΑΒΛΑ` no.2"
          />
          <Image
            src="/pics/tavla2.jpg"
            height={400}
            width={400}
            alt="photo of product `ΤΑΒΛΑ` no.3"
          />
        </div>
      </section>
      <Footer />
      <ScrollToTop />
    </>
  );
};

export default proionta;
