/* eslint-disable react/no-unescaped-entities */
import {Image, Tooltip, Card, CardBody} from "@nextui-org/react";
import DSC_3799 from './New folder/DSC_3799.jpg'
import Navmenu from "./Navmenu";
import Wave from "./New folder/clean-hands-svgrepo-com.svg"

function Cover() {
  return (
    <>
      <Navmenu />
      <div className="flex justify-center items-center p-5 pt-10 mt-10">
        <Tooltip
          content={
            <div className="w-full max-w-3xl px-1 py-2">
              <p className="font-abc text-2xl text-black opacity-90">Chrysilla volupe<br/><p className="font-abc text-lg text-black opacity-60">Also known as the Elegant Golden Jumping Spider</p></p>
            </div>
          }
          placement="bottom"
        >
          <Image
            width={1080}
            alt="Chrysilla volupe"
            className='w-full max-w-6xl'
            src={DSC_3799}
          />
        </Tooltip>
      </div>

      <div className="flex justify-center items-center">
      <Card className="mt-14 w-lg max-w-2xl min-w-lg">
        <CardBody>
          <div className=" flex flex-row justify-center items-end">
            <p className="font-abc text-xl md:text-md">&nbsp;&nbsp;Hello there!&nbsp;</p><p className="font-abc text-xl md:text-md">I'm&nbsp;</p><p className="font-abc text-xl md:text-md">Muhtadee Taron&nbsp;</p><img width="40px" src={Wave} alt="hand wave"/>
          </div>
          <div className=" h-10 flex flex-col justify-center items-center">
            <p className="font-abc text-xs md:text-s">A passionate Photographer and Digital Artist from Dhaka, Bangladesh.</p>
          </div>
        </CardBody>
      </Card>
      </div>
    </>
  )
}

export default Cover
