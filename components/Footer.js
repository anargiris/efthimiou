import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer
      className=" font-neohel relative overflow-x-auto"
      style={{ backgroundColor: "#272D2D", color: "#F6F8FF" }}
    >
      <div className="flex gap-20">
        <div className="p-5">
          <h6 className="text-lg font-bold mb-2">Ξυλέια Ευθυμίου</h6>
          <div className="flex mb-1">
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1"
                d="M4.75 6.75L9.25 4.75V17.25L4.75 19.25V6.75Z"
              ></path>
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                d="M14.75 6.75L19.25 4.75V17.25L14.75 19.25V6.75Z"
              ></path>
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                d="M14.75 6.75L9.25 4.75V17.25L14.75 19.25V6.75Z"
              ></path>
            </svg>

            <p>Ιερισσός Χαλκιδικής, Τ.Κ 63075</p>
          </div>
          <div className="flex mb-1">
            <svg width="24" height="24" fill="" viewBox="0 0 24 24">
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1"
                d="M8.89286 4.75H6.06818C5.34017 4.75 4.75 5.34017 4.75 6.06818C4.75 13.3483 10.6517 19.25 17.9318 19.25C18.6598 19.25 19.25 18.6598 19.25 17.9318V15.1071L16.1429 13.0357L14.5317 14.6468C14.2519 14.9267 13.8337 15.0137 13.4821 14.8321C12.8858 14.524 11.9181 13.9452 10.9643 13.0357C9.98768 12.1045 9.41548 11.1011 9.12829 10.494C8.96734 10.1537 9.06052 9.76091 9.32669 9.49474L10.9643 7.85714L8.89286 4.75Z"
              />
            </svg>
            <p>697 777 8689, 6978922242</p>
          </div>
          <div className="flex">
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1"
                d="M4.75 7.75C4.75 6.64543 5.64543 5.75 6.75 5.75H17.25C18.3546 5.75 19.25 6.64543 19.25 7.75V16.25C19.25 17.3546 18.3546 18.25 17.25 18.25H6.75C5.64543 18.25 4.75 17.3546 4.75 16.25V7.75Z"
              ></path>
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                d="M5.5 6.5L12 12.25L18.5 6.5"
              ></path>
            </svg>
            <p>
              <a href="mailto:ksiliaefthimiou@hotmail.com">
                ksiliaefthimiou@hotmail.com
              </a>
            </p>
          </div>
        </div>

        <div className="p-5">
          <h6 className="font-bold mb-2">Social Media:</h6>
          <div className="flex">
            <Link
              href="https://www.facebook.com/%CE%9E%CF%85%CE%BB%CE%B5%CE%B9%CE%B1-%CE%9A%CE%B1%CF%83%CF%84%CE%B1%CE%BD%CE%B9%CE%B1%CF%82-726980901021504"
              rel="noreferrer"
            >
              <a className="cursor-pointer" target="_blank" rel="noreferrer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-brand-facebook"
                  width="25"
                  height="25"
                  viewBox="0 0 24 24"
                  stroke-width="1"
                  stroke="#fff"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
                </svg>
              </a>
            </Link>
          </div>
        </div>
        <div className="p-5">
          <Link href="/proionta">
            <a className="font-bold">ΠΡΟΙΟΝΤΑ</a>
          </Link>
        </div>
        <div className="p-5">
          <Link href="/epikoinwnia">
            <a className="font-bold">ΕΠΙΚΟΙΝΩΝΙΑ</a>
          </Link>
        </div>
      </div>
      <div className="absolute right-0 bottom-0 md:mr-20 mr-4">
        <p> &copy; Copyright 2021, Ευθυμίου</p>
        <p className="text-xs">Developed by Anargyros Stylidis</p>
      </div>
    </footer>
  );
};

export default Footer;
