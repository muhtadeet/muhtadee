import sky from "./Photos/DSC_2166.png";
import MilkyWay from "./Photos/20210914-DSC_0652cln.png";
import House from "./Photos/the house.png"
import Cloud from "./Photos/DSC_4838.png"
import FramerMgBtn from "./FramerMgBtn";
import Navmenu from "./Navmenu";
// import Collage from "./Collage";
// import Footer from "./Footer";

function Landscapes() {
  return (
    <>
      <Navmenu />
      <div className="bg-black w-screen h-[110vh] relative -left-2 -mb-5">
        <div className="flex justify-center items-center -mt-20">
          <p className="text-center flex justify-center items-center text-4xl text-white transition-all ease-in-out h-80 font-lato">
            Landscape
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 mx-80 bg-black">
          <div className="grid gap-4">
            <div>
              <img
                className="h-auto max-w-full rounded-lg object-cover object-center"
                src={sky}
              />
            </div>
          </div>
          <div className="grid gap-4">
            <div>
              <img
                className="h-auto max-w-full rounded-lg object-cover object-center"
                src={MilkyWay}
              />
            </div>
          </div>
          <div className="grid gap-4">
            <div>
              <img
                className="h-auto max-w-full rounded-lg object-cover object-center"
                src={House}
              />
            </div>
          </div>
          <div className="grid gap-4">
            <div>
              <img
                className="h-auto max-w-full rounded-lg object-cover object-center"
                src={Cloud}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-5 mt-[500px] ml-7 sm:mt-0 sm:ml-0 md:justify-center z-40 md:m-1 xl:m-10 xl:justify-center xl:-mt-[28.6rem] fixed">
        <FramerMgBtn>
          <a
            target="_blank"
            href="https://www.facebook.com/muhtadeee.taaron"
            rel="noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-brand-facebook transition ease-in-out hover:stroke-gray-600 stroke-white"
              width="30"
              height="30"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
            </svg>
          </a>
        </FramerMgBtn>
        <FramerMgBtn>
          <a
            target="_blank"
            href="https://www.instagram.com/_.muhtadeee._/"
            rel="noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-brand-instagram transition ease-in-out hover:stroke-gray-600 stroke-white"
              width="30"
              height="30"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" />
              <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
              <path d="M16.5 7.5l0 .01" />
            </svg>
          </a>
        </FramerMgBtn>
      </div>

      <div className="cursor-pointer z-40 fixed left-[45%] top-[90%] hover:-ml-3 ml-1 transition-all ease-in-out">
        <a
          target="_blank"
          href="mailto: muhtadeetaron@gmail.com"
          rel="noreferrer"
          className="button font-ubuntu no-underline text-black"
        >
          Get in touch
          <div className="icon">
            <span className="span">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="36"
                viewBox="0 0 36 36"
                fill="none"
              >
                <path
                  d="M1.05403 31.6175C0.271626 32.3972 0.271626 33.6614 1.05403 34.441C1.83644 35.2207 3.10497 35.2207 3.88737 34.441L1.05403 31.6175ZM35.5599 2.05152C35.5599 0.948871 34.6629 0.0549994 33.5564 0.0549994L15.5251 0.0549994C14.4187 0.0549994 13.5217 0.948871 13.5217 2.05152C13.5217 3.15416 14.4187 4.04804 15.5251 4.04804H31.5529V20.0202C31.5529 21.1228 32.4499 22.0167 33.5564 22.0167C34.6629 22.0167 35.5599 21.1228 35.5599 20.0202L35.5599 2.05152ZM3.88737 34.441L34.9731 3.46327L32.1397 0.639766L1.05403 31.6175L3.88737 34.441Z"
                  fill="black"
                />
              </svg>
            </span>
          </div>
        </a>
      </div>
    </>
  );
}

export default Landscapes;
