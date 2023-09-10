/* eslint-disable react/no-unescaped-entities */
import {Image, Tooltip, Card, CardFooter} from "@nextui-org/react";
import photo1 from './New folder/20210914-DSC_0652.jpg'
import photo2 from './New folder/DSC_0695gfv.jpg'
import photo3 from './New folder/DSC_0090.jpg'
import photo4 from './New folder/DSC_2467.jpg'
import photo5 from './New folder/DSC_0094.jpg'
import photo6 from './New folder/the house.jpg'
import Navmenu from './Navmenu'

function Photos() {

  return (
    <div>
      <Navmenu />
      <h1 className='font-reem font-bold text-7xl p-2 m-3 mb-7 sm:flex justify-center'>Photos</h1>

    <div className="w-full max-w-5xl p-5 pb-10 mx-auto mb-10 gap-5 columns-3 space-y-5">
      <Tooltip
        content={
          <div className="w-full max-w-unit-3xl px-1 py-2">
            <Card>
            <Image src={photo1} />
            <CardFooter className="gap-1">
              <div className="flex gap-1">
                <p className="font-semibold text-default-600 text-small">Ukhia,</p>
              </div>
              <div className="flex gap-1">
                <p className="font-semibold text-default-600 text-small">Cox's Bazaar</p>
              </div>
            </CardFooter>
            </Card>
          </div>
        }
        placement="right"
        className="w-[55%]"
        delay={100}
        closeDelay={100}
      >
      <Image
        width={300}
        alt="photo1"
        className="w-full object-cover"
        src={photo1}
      />
      </Tooltip>

      <Tooltip
        content={
          <div className="w-full max-w-3xl px-1 py-2">
            <Card>
            <Image src={photo2} />
            <CardFooter className="gap-1">
              <div className="flex gap-1">
                <p className="font-semibold text-default-600 text-small">Boga Lake,</p>
              </div>
              <div className="flex gap-1">
                <p className="font-semibold text-default-600 text-small">Bandorban</p>
              </div>
            </CardFooter>
            </Card>
          </div>
        }
        placement="right"
        className="w-[55%]"
        delay={100}
        closeDelay={100}
      >
        <Image
          width={300}
          alt="photo2"
          className="w-full object-cover"
          src={photo2}
        />
      </Tooltip>

      <Tooltip
        content={
          <div className="w-full max-w-3xl px-1 py-2">
            <Card>
            <Image src={photo3} />
            <CardFooter className="gap-1">
              <div className="flex gap-1">
                <p className="font-semibold text-default-600 text-small">National Botanical Gardens,</p>
              </div>
              <div className="flex gap-1">
                <p className="font-semibold text-default-600 text-small">Dhaka</p>
              </div>
            </CardFooter>
            </Card>
          </div>
        }
        placement="left"
        className="w-[55%]"
        delay={100}
        closeDelay={100}
      >
        <Image
          width={300}
          alt="photo3"
          className="w-full object-cover"
          src={photo3}
        />
      </Tooltip>

      <Tooltip
        content={
          <div className="w-full max-w-3xl px-1 py-2">
            <Card>
            <Image src={photo4} />
            <CardFooter className="gap-1">
              <div className="flex gap-1">
                <p className="font-semibold text-default-600 text-small">Padma Bridge,</p>
              </div>
              <div className="flex gap-1">
                <p className="font-semibold text-default-600 text-small">Mawa</p>
              </div>
            </CardFooter>
            </Card>
          </div>
        }
        placement="top"
        className="w-[55%]"
        delay={100}
        closeDelay={100}
      >
        <Image
          width={300}
          alt="photo4"
          className="w-full object-cover"
          src={photo4}
        />
      </Tooltip>

      <Tooltip
        content={
          <div className="w-full max-w-3xl px-1 py-2">
            <Card>
            <Image src={photo5} />
            <CardFooter className="gap-1">
              <div className="flex gap-1">
                <p className="font-semibold text-default-600 text-small">Pallabi,</p>
              </div>
              <div className="flex gap-1">
                <p className="font-semibold text-default-600 text-small">Dhaka</p>
              </div>
            </CardFooter>
            </Card>
          </div>
        }
        placement="left"
        className="w-[55%]"
        delay={100}
        closeDelay={100}
      >
        <Image
          width={300}
          alt="photo5"
          className="w-full object-cover"
          src={photo5}
        />
      </Tooltip>

      <Tooltip
        content={
          <div className="w-full max-w-3xl px-1 py-2">
            <Card>
            <Image src={photo6} />
            <CardFooter className="gap-1">
              <div className="flex gap-1">
                <p className="font-semibold text-default-600 text-small">Pallabi,</p>
              </div>
              <div className="flex gap-1">
                <p className="font-semibold text-default-600 text-small">Dhaka</p>
              </div>
            </CardFooter>
            </Card>
          </div>
        }
        placement="left"
        className="w-[55%]"
        delay={100}
        closeDelay={100}
      >
        <Image
          width={300}
          alt="photo6"
          className="w-full object-cover"
          src={photo6}
        />
      </Tooltip>
    </div>
  </div>
  )
}

export default Photos
