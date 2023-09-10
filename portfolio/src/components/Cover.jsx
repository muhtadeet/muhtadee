/* eslint-disable react/no-unescaped-entities */
import { Image, Tooltip, Card, CardBody } from "@nextui-org/react";
import DSC_3799 from "./New folder/DSC_3799.jpg";
import Navmenu from "./Navmenu";
import Wave from "./New folder/clean-hands-svgrepo-com.svg";

function Cover() {
  return (
    <>
      <Navmenu />
      <div className="flex justify-center items-center p-5 pt-10 mt-10">
        <Tooltip
          content={
            <div className="w-full max-w-3xl px-1 py-2">
              <p className="font-abc text-2xl text-black opacity-90">
                Chrysilla volupe
                <br />
                <p className="font-abc text-lg text-black opacity-60">
                  Also known as the Elegant Golden Jumping Spider
                </p>
              </p>
            </div>
          }
          placement="bottom"
          delay={100}
          closeDelay={100}
        >
          <Image
            width={1080}
            alt="Chrysilla volupe"
            className="w-full max-w-4xl"
            src={DSC_3799}
          />
        </Tooltip>
      </div>

      <div className="flex justify-center items-center">
        <Card className="mt-14 mx-5 w-lg md:w-unit-9xl max-w-2xl">
          <CardBody>
            <div className=" flex flex-row justify-center items-end">
              <p className="font-abc text-lg  md:text-3xl">
                &nbsp;&nbsp;Hello there!&nbsp;
              </p>
              <p className="font-abc text-lg md:text-3xl">I'm&nbsp;</p>
              <p className="font-abc text-lg md:text-3xl">
                Muhtadee Taron&nbsp;
              </p>
              <img
                width="30px"
                className="md:w-[40px]"
                src={Wave}
                alt="hand wave"
              />
            </div>
            <div className=" h-10 flex flex-col justify-center items-center">
              <p className="font-abc text-xs md:text-lg">
                A passionate Photographer and Digital Artist from Dhaka,
                Bangladesh.
              </p>
            </div>
          </CardBody>
        </Card>
      </div>
    </>
  );
}

export default Cover;
