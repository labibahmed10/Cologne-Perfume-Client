import React from "react";

const FAQ = () => {
  return (
    <div className="my-20 md:px-28 px-4 md:py-16 py-10 md:flex-row flex-col flex items-center justify-center gap-5 bg-[#F3F3F3]">
      <div className="">
        <img
          className="md:w-[60rem]"
          src="https://static.vecteezy.com/system/resources/previews/002/517/142/large_2x/the-person-asks-a-question-and-wants-to-get-an-answer-flat-character-illustration-vector.jpg"
          alt=""
        />
      </div>
      <div className="accordion w-full " id="accordionFlushExample">
        <div className="accordion-item border-t-0 border-l-0 border-r-0 rounded-none bg-white border border-gray-200">
          <h2 className="accordion-header mb-0 " id="flush-headingOne">
            <button
              className="accordion-buttonrelative flex items-center w-full py-4 px-5 text-base text-gray-800 text-left bg-white border-0 rounded-none transition focus:outline-none font-semibold"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseOne"
              aria-expanded="false"
              aria-controls="flush-collapseOne"
            >
              How quickly does it load?
            </button>
          </h2>
          <div
            id="flush-collapseOne"
            className="accordion-collapse border-0 collapse show"
            aria-labelledby="flush-headingOne"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body py-4 px-5">
              Start with something fairly obvious: Does your website content populate fairly quickly, or does
              it take several seconds? A fast loading time is key to grabbing your visitors and holding their
              interest, especially mobile users.
            </div>
          </div>
        </div>
        <div className="accordion-item border-l-0 border-r-0 rounded-none bg-white border border-gray-200">
          <h2 className="accordion-header mb-0" id="flush-headingTwo">
            <button
              className="accordion-button
    collapsed
    relative
    flex
    items-center
    w-full
    py-4
    px-5
    text-base text-gray-800 text-left
    bg-white
    border-0
    rounded-none
    transition
    focus:outline-none font-semibold"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseTwo"
              aria-expanded="false"
              aria-controls="flush-collapseTwo"
            >
              Is the website welcoming?
            </button>
          </h2>
          <div
            id="flush-collapseTwo"
            className="accordion-collapse border-0 collapse"
            aria-labelledby="flush-headingTwo"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body py-4 px-5">
              When people come to your dealership, you want them to feel at home. Ideally, your site will help
              potential buyers feel more comfortable picking up the phone and calling you—and some ways you
              can make that happen is to include a warm.
            </div>
          </div>
        </div>
        <div className="accordion-item border-l-0 border-r-0 border-b-0 rounded-none bg-white border border-gray-200">
          <h2 className="accordion-header mb-0" id="flush-headingThree">
            <button
              className="accordion-button
    collapsed
    relative
    flex
    items-center
    w-full
    py-4
    px-5
    text-base text-gray-800 text-left
    bg-white
    border-0
    rounded-none
    transition
    focus:outline-none font-semibold"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseThree"
              aria-expanded="false"
              aria-controls="flush-collapseThree"
            >
              When was the last content update?
            </button>
          </h2>
          <div
            id="flush-collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingThree"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body py-4 px-5">
              Google’s algorithms need to be fed—constantly! What this means is that, for SEO purposes, it’s
              important to regularly add content to your site. .
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
