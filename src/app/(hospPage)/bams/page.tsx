"use client";
import { useGlobalContext } from "@/app/context/store";
import React, { useEffect } from "react";
import Image from "next/image";

const Bams = () => {
    
    const { setImageSlide } = useGlobalContext();
  
    useEffect(() => {
      console.log('Page loaded');
      setImageSlide(false);
    }, [setImageSlide]);


  return (
    <div className=" flex flex-col justify-center items-center">
        
        <Image src="/images/up_bams.png"
         width={0}
         height={0}
         sizes="100vw"
         style={{ width: '38%', height: 'auto' }} 
         alt="up bams"
         className=" my-6"/>

      <div className="max-w-[70vw] mx-auto font-serif text-justify mb-14 text-[#7f7f7f]">

        <h1 className="text-[34px] text-[#54595f] mb-6 text-center font-extrabold font-sans">
          UP BAMS Counselling Process: A Step-by-Step Guide
        </h1>

        <p>
          If you aspire to pursue a Bachelor of Ayurvedic Medicine and Surgery
          (BAMS) in Uttar Pradesh, you’re likely aware of the rigorous admission
          process that lies ahead. One crucial aspect of this journey is the
          counselling process, which determines your college and course
          allotment. In this blog, we’ll take you through the step-by-step guide
          to the UP BAMS counselling process, helping you navigate it
          successfully.
        </p>

        <h2 className="text-lg font-bold mt-6">Step 1: Registration</h2>
        <p>
          The first and most crucial step in the UP BAMS counselling process is
          registration. You must register on the official website of the Uttar
          Pradesh State Ayush Counselling Authority (UPSACA). Ensure you have
          all the necessary documents, including your mark sheets, identity
          proof, and other relevant certificates, ready for uploading during
          this step.
        </p>

        <h2 className="text-lg font-bold mt-6">
          Step 2: Document Verification
        </h2>
        <p>
          After successful registration, you’ll be invited to participate in the
          document verification process. This step ensures the authenticity of
          your credentials and academic qualifications. You’ll need to visit a
          designated verification center, where officials will verify your
          documents and provide you with a verification slip.
        </p>

        <h2 className="text-lg font-bold mt-6">Step 3: Choice Filling</h2>
        <p>
          Once your documents are verified, it’s time to fill in your college
          and course preferences. You’ll be given access to a list of available
          colleges and courses. Make your choices wisely, as this will directly
          impact your future academic journey. Ensure you prioritize your
          preferred options and have backup choices in case you don’t secure
          your top preferences.
        </p>

        <h2 className="text-lg font-bold mt-6">Step 4: Seat Allotment</h2>
        <p>
          After submitting your choices, the authorities will conduct the seat
          allotment process based on your rank and choices. You’ll be informed
          of your allotted college and course through the official website. If
          you’re satisfied with the allotment, you can proceed to the next step.
          However, if you’re not content, you have the option to participate in
          subsequent rounds of counselling.
        </p>

        <h2 className="text-lg font-bold mt-6">
          Step 5: Fee Payment and Reporting
        </h2>
        <p>
          If you’re happy with your seat allotment, the next step is to pay the
          required admission fee. This fee may vary depending on the college and
          course. After payment, you must report to the allotted college within
          the specified time frame to complete the admission process. Failure to
          do so may result in the cancellation of your seat.
        </p>

        <h2 className="text-lg font-bold mt-6">
          Step 6: Subsequent Rounds (If Necessary)
        </h2>
        <p>
          If you aren’t satisfied with your initial seat allotment or missed the
          first counselling round, don’t worry. There are subsequent rounds of
          counselling where you can participate and modify your choices. Keep an
          eye on the official website for updates on these rounds.
        </p>

        <h2 className="text-lg font-bold mt-6">Step 7: Final Admission</h2>
        <p>
          Once you have successfully completed all the above steps, you can
          consider your admission process complete. You are now officially a
          part of the UP BAMS program. Ensure you follow the college’s
          guidelines for the commencement of classes and other relevant
          instructions.
        </p>

        <h2 className="text-lg font-bold mt-6">Conclusion</h2>
        <p>
          The UP BAMS counselling process may seem daunting, but with careful
          preparation and adherence to these steps, you can navigate it
          smoothly. Remember to stay updated with the official UPSACA website
          for any changes or announcements regarding the counselling process.
          Your determination and commitment will ultimately lead you to a
          rewarding journey in the field of Ayurvedic Medicine and Surgery in
          Uttar Pradesh.
        </p>

        <h2 className="text-[32px] font-sans mt-6 mb-3 text-black">
          About UP AYUSH Counselling 2023
        </h2>
        <p>
          The UP AYUSH Counselling 2023 aims to streamline the admission process
          for AYUSH courses in both government and private AYUSH colleges in
          Uttar Pradesh. These courses include BAMS, BUMS, BSMS, and BHMS
          programs. The Directorate General of Medical Education and Training in
          Uttar Pradesh is responsible for overseeing the UP AYUSH Counselling
          2023.
        </p>
        <br/>

        <p>
          In the previous academic year, there were a total of 689 available
          seats for BAMS, 505 seats for BUMS, and 400 seats for BHMS across
          various Ayurveda, Unani, and Homeopathic colleges in Uttar Pradesh.
          However, please note that the seat matrix for the current academic
          year will be made available soon, so stay tuned for updates. This
          information is crucial for aspirants looking to pursue these AYUSH
          programs in Uttar Pradesh and provides insight into the available
          opportunities for the upcoming academic session.
        </p>

        <h2 className="text-[32px] font-sans mt-6 mb-2 text-black">
          Documents Required UP AYUSH Counselling 2023
        </h2>
        <p>Below is the list of documents essential for verification during UP AYUSH Counselling 2023:</p>
        <ol className="mt-3 list-decimal pl-8">
          <li>Class 10 Marksheet and Certificate</li>
          <li>Class 12 Marksheet and Certificate</li>
          <li>NEET UG 2023 admit card and result/scorecard.</li>
          <li>UP state domicile certificate (for UP candidates only).</li>
          <li>Category certificate (if required)</li>
          <li>Sub Category Certificate (If required)</li>
          <li>ID proof such as Aadhaar, Voter card</li>
        </ol>
      </div>
    </div>
  );
};

export default Bams;