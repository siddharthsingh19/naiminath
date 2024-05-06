"use client";
import React, { useState } from "react";

export const ImportantLink = () => {
  const [isPopupVisible, setPopupVisibility] = useState(false);

  const showPopup = () => {
    setPopupVisibility(true);
  };

  const hidePopup = () => {
    setPopupVisibility(false);
  };

  return (
    <div className="relative">
      <button
        className="fixed bottom-[55vh] right-2 bg-black text-white px-4 py-2 rounded transform origin-bottom-right -rotate-90"
        onMouseEnter={showPopup}
        onMouseLeave={hidePopup}
      >
        Important Links
      </button>

      {isPopupVisible && (
        <div
          className=" overflow-auto  w-[80vw] h-[50vh] md:w-fit md:h-fit fixed bottom-[25vh] right-12 bg-[#ded636] text-[#000000] px-4 py-2 rounded shadow"
          onMouseEnter={showPopup}
          onMouseLeave={hidePopup}
        >
          <div className="modal-window-content flex flex-col gap-1 font-sans">
            <p>
              {" "}
              <span className="text-[20px] md:text-[24px]">Important Links</span>
            </p>
            <p>
              1. Ministry of AYUSH (
              <a href="https://main.ayush.gov.in/" className=" text-[#1e73be]  underline">
                https://main.ayush.gov.in/
              </a>
              )
            </p>
            <p>
              2. National Commission for Indian System of Medicine (
              <a href="https://ncismindia.org/" className=" text-[#1e73be]  underline">https://ncismindia.org/</a>)
            </p>
            <p>
              3. Dr. Bhimrao Ambedkar University, Agra (
              <a href="http://www.dbrau.org.in/" className=" text-[#1e73be]  underline">http://www.dbrau.org.in/</a>)
            </p>
            <p>
              4. Mahayogi Guru Gorakhnath AYUSH University, Uttar Pradesh (
              <a href="https://www.mggaugkp.ac.in/" className=" text-[#1e73be]  underline">www.mggaugkp.ac.in</a>
              )&nbsp;
            </p>
            <p>
              5. Uttar Pradesh PG AYUSH Counselling (
              <a href="https://pgcounselling.ayushup.in/" className=" text-[#1e73be]  underline">
                http://pgcounselling.ayushup.in/)
              </a>
            </p>
            <p>
              6. Uttar Pradesh State AYUSH Society (
              <a href="https://web.archive.org/web/20230922012956/https://ayushup.in/" className=" text-[#1e73be]  underline">
                https://ayushup.in/
              </a>
              )
            </p>
            <p>
              7. Vidya Lakshmi Education Loan Portal (
              <a href="https://web.archive.org/web/20230922012956/https://www.vidyalakshmi.co.in/Students/" className=" text-[#1e73be]  underline">
                https://www.vidyalakshmi.co.in/Students/
              </a>
              )
            </p>
            <p>
              <a href="https://forms.eduqfix.com/namcharcaof/home" className=" font-bold">
               8. FEES PAYMENT: CLICK HERE TO PAY FEES
              </a>
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
