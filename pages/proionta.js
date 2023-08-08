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
        <title>Ξυλεία Καστανιάς Ευθυμίου - Προιόντα</title>
        <meta
          property="og:title"
          content="Ξυλεία Καστανιάς | Ευθυμίου | Προιόντα"
        />
        <link rel="canonical" href="https://ksiliaefthimiou.gr/proionta" />
        <meta property="og:type" content="website" />
        <meta
          property="og:site_name"
          content="Ξυλεία Καστανιάς Ευθυμίου - Χαλκιδική"
        />
        <meta
          property="og:image"
          content="https://ksiliaefthimiou.gr/bgs/outside.jpg"
        />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1.0"
        ></meta>
        <meta
          name="description"
          content="Φωτογραφίες προιόντων απο την ξυλεία καστανιάς Ευθυμίου. Ξύλα σε Πλάκα, κολώνες, τάβλα καστανιάς. Από το Άγιο Όρος."
        />
        <meta
          property="og:description"
          content="Φωτογραφίες προιόντων απο την ξυλεία καστανιάς Ευθυμίου. Ξύλα σε Πλάκα, κολώνες, τάβλα καστανιάς. Από το Άγιο Όρος."
        />
        <meta
          property="og:url"
          content="https://ksiliaefthimiou.gr/proionta"
        ></meta>
        <meta name="robots" content="index, follow" />
      </Head>
      <Navbar />
      <header
        className="p-5 text-gray-100 border-b-8 border-black"
        style={{ backgroundColor: "#323232" }}
      >
        <h1 className="font-neohel text-center font-bold text-3xl">
          ΠΡΟΙΟΝΤΑ ΞΥΛΕΙΑΣ ΚΑΣΤΑΝΙΑΣ
        </h1>
        <h2 className="text-center mt-4 text-lg">
          Επεξεργαζόμαστε ξύλα καστανιάς από το Άγιο Όρος και την Βόρεια
          Χαλκιδική. Φτιάχνουμε κολώνες, τάβλα και πλάκες καστανιάς.
        </h2>
        <p className="mt-4 text-center">
          Παρακάτω μπορείτε να δείτε φωτογραφίες από τα προιόντα μας.
        </p>
      </header>
      <section
        className="min-h-screen font-neohel py-2"
        style={{ backgroundColor: "#F6F8FF" }}
      >
        <h3 className="text-center underline text-4xl font-bold py-2">
          ΚΟΛΩΝΕΣ ΚΑΣΤΑΝΙΑΣ
        </h3>
        <p className="text-center font-mono">
          Οι κολώνες καστανιάς χρησιμοποιούνται κυρίως για πέργκολες. Οι
          διαστάσεις τους ξεκινάνε από 8x8 και φτάνουν έως 20x20. Το ξύλο της
          καστανιάς έχει χρησιμοποιηθεί παραδοσιακά στην Ελλάδα για διάφορους
          αρχιτεκτονικούς και κατασκευαστικούς σκοπούς λόγω της αντοχής και της
          ελκυστικής εμφάνισης του. Ο όρος μπορεί να αναφέρεται ειδικά σε
          αρχιτεκτονικά στοιχεία που είναι φτιαγμένα από καστανιά, όπως κολώνες
          ή πυλώνες. Το ξύλο της καστανιάς είναι διάσημο για την αντοχή του στη
          φθορά και την ικανότητά του να αντέχει σε διαφορετικές καιρικές
          συνθήκες, καθιστώντας το προτιμώμενο υλικό για εξωτερικές κατασκευές.
        </p>
        <div className="flex md:flex-row flex-col md:gap-12 md:justify-center gap-5 flex-wrap mt-8 md:ml-3">
          <div>
            <Image
              src="/pics/5.jpg"
              height={400}
              width={400}
              alt="Photo of Product `ΚΟΛΩΝΕΣ ΚΑΣΤΑΝΙΑΣ` no.1"
            />
          </div>
          <Image
            src="/pics/kolones1.jpg"
            height={400}
            width={400}
            alt="Photo of Product `ΚΟΛΩΝΕΣ ΚΑΣΤΑΝΙΑΣ` no.2"
          />
          <Image
            src="/pics/kolones2.jpg"
            height={400}
            width={400}
            alt="Photo of Product `ΚΟΛΩΝΕΣ ΚΑΣΤΑΝΙΑΣ` no.3"
          />
          <Image
            src="/pics/kolones3.jpg"
            height={400}
            width={400}
            alt="Photo of Product `ΚΟΛΩΝΕΣ ΚΑΣΤΑΝΙΑΣ` no.4"
          />
          <Image
            src="/pics/kolones4.jpg"
            height={400}
            width={400}
            alt="Photo of Product `ΚΟΛΩΝΕΣ ΚΑΣΤΑΝΙΑΣ` no.5"
          />
          <Image
            src="/pics/kolones5.jpg"
            height={400}
            width={400}
            alt="Photo of Product `ΚΟΛΩΝΕΣ ΚΑΣΤΑΝΙΑΣ` no.6"
          />
          <Image
            src="/pics/kolones6.jpg"
            height={400}
            width={400}
            alt="Photo of Product `ΚΟΛΩΝΕΣ ΚΑΣΤΑΝΙΑΣ` no.7"
          />

          <Image
            src="/pics/kolones8.jpg"
            height={400}
            width={400}
            alt="Photo of Product `ΚΟΛΩΝΕΣ ΚΑΣΤΑΝΙΑΣ` no.9"
          />
          <Image
            src="/pics/kolones9.jpg"
            height={400}
            width={400}
            alt="Photo of Product `ΚΟΛΩΝΕΣ ΚΑΣΤΑΝΙΑΣ` no.10"
          />
        </div>
      </section>
      <section className="min-h-screen font-neohel py-2">
        <h3 className="text-center text-4xl underline font-bold py-2">
          ΠΛΑΚΑ ΚΑΣΤΑΝΙΑΣ
        </h3>
        <p className="text-center font-mono">
          Η κύρια χρήση της πλάκας καστανιάς είναι για κουφώματα και ιδιαίτερα
          για τραπέζια λόγω της μεγάλης αντοχής της.
        </p>

        <div className="flex md:flex-row flex-col md:gap-20 md:justify-center gap-5 flex-wrap mt-8 md:ml-3">
          <Image
            src="/pics/2.jpg"
            height={400}
            width={400}
            alt="Photo of product `ΠΛΑΚΑ ΚΑΣΤΑΝΙΑΣ` no.1"
          />
          <Image
            src="/pics/plaka1.jpg"
            height={400}
            width={400}
            alt="Photo of product `ΠΛΑΚΑ ΚΑΣΤΑΝΙΑΣ` no.2"
          />
          <Image
            src="/pics/plaka2.jpg"
            height={400}
            width={400}
            alt="Photo of product `ΠΛΑΚΑ ΚΑΣΤΑΝΙΑΣ` no.3"
          />
          <Image
            src="/pics/plaka1.webp"
            height={400}
            width={400}
            alt="Photo of product `ΠΛΑΚΑ ΚΑΣΤΑΝΙΑΣ` no.4"
          />
          <Image
            src="/pics/plaka2.webp"
            height={400}
            width={400}
            alt="Photo of product `ΠΛΑΚΑ ΚΑΣΤΑΝΙΑΣ` no.5"
          />
        </div>
      </section>
      <section
        className="min-h-screen font-neohel py-2"
        style={{ backgroundColor: "#F6F8FF" }}
      >
        <h3 className="text-center text-4xl underline font-bold py-2">
          ΤΑΒΛΑ (ΣΑΝΙΔΙΑ) ΚΑΣΤΑΝΙΑΣ
        </h3>
        <p className="text-center font-mono">
          Τα σανίδια καστανιάς χρησιμοποιούνται κυρίως για πατώματα, οροφές,
          πατώματα παραλίας και κουφώματα.
        </p>
        <div className="flex md:flex-row flex-col md:gap-20 md:justify-center gap-5 flex-wrap mt-8 md:ml-3">
          <Image
            src="/pics/1.jpg"
            height={400}
            width={400}
            alt="photo of product `ΤΑΒΛΑ ΚΑΣΤΑΝΙΑΣ` no.1"
          />
          <Image
            src="/pics/tavla1.jpg"
            height={400}
            width={400}
            alt="photo of product `ΤΑΒΛΑ ΚΑΣΤΑΝΙΑΣ` no.2"
          />
          <Image
            src="/pics/tavla2.jpg"
            height={400}
            width={400}
            alt="photo of product `ΤΑΒΛΑ ΚΑΣΤΑΝΙΑΣ` no.3"
          />
          <Image
            src="/pics/sanidia1.webp"
            height={400}
            width={400}
            alt="photo of product `ΤΑΒΛΑ ΚΑΣΤΑΝΙΑΣ` no.4"
          />
          <Image
            src="/pics/sanidia2.webp"
            height={400}
            width={400}
            alt="photo of product `ΤΑΒΛΑ ΚΑΣΤΑΝΙΑΣ` no.5"
          />
          <Image
            src="/pics/sanidia3.webp"
            height={400}
            width={400}
            alt="photo of product `ΤΑΒΛΑ ΚΑΣΤΑΝΙΑΣ` no.6"
          />
        </div>
      </section>{" "}
      <section
        className="min-h-screen font-neohel py-2 mb-10"
        style={{ backgroundColor: "#F6F8FF" }}
      >
        <h3 className="text-center text-4xl underline font-bold py-2">
          ΣΤΡΟΓΓΥΛΗ ΞΥΛΕΙΑ
        </h3>
        <p className="text-center font-mono">
          Η στρογγυλή ξυλεία είναι ξύλινα κομμάτια κομμένα σε στρογγυλή μορφή,
          χρησιμοποιούμενα συχνά σε κατασκευές και διακοσμητικά.
        </p>
        <div className="flex md:flex-row flex-col md:gap-20 md:justify-center gap-5 flex-wrap mt-8 md:ml-3">
          <Image
            src="/pics/round-wood/1.jpg"
            height={400}
            width={400}
            alt="photo of product `ΣΤΡΟΓΓΥΛΗ ΞΥΛΕΙΑ` no.1"
          />
          <Image
            src="/pics/round-wood/2.jpg"
            height={400}
            width={400}
            alt="photo of product `ΣΤΡΟΓΓΥΛΗ ΞΥΛΕΙΑ` no.2"
          />
          <Image
            src="/pics/round-wood/3.jpg"
            height={400}
            width={400}
            alt="photo of product `ΣΤΡΟΓΓΥΛΗ ΞΥΛΕΙΑ` no.3"
          />

          <Image
            src="/pics/round-wood/4.jpg"
            height={400}
            width={400}
            alt="photo of product `ΣΤΡΟΓΓΥΛΗ ΞΥΛΕΙΑ` no.4"
          />
          <Image
            src="/pics/round-wood/5.jpg"
            height={400}
            width={400}
            alt="photo of product `ΣΤΡΟΓΓΥΛΗ ΞΥΛΕΙΑ` no.5"
          />
          <Image
            src="/pics/round-wood/6.jpg"
            height={400}
            width={400}
            alt="photo of product `ΣΤΡΟΓΓΥΛΗ ΞΥΛΕΙΑ` no.6"
          />
          <Image
            src="/pics/round-wood/7.jpg"
            height={400}
            width={400}
            alt="photo of product `ΣΤΡΟΓΓΥΛΗ ΞΥΛΕΙΑ` no.7"
          />
        </div>
      </section>
      <Footer />
      <ScrollToTop />
    </>
  );
};

export default proionta;
