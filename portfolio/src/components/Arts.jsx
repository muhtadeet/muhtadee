/* eslint-disable react/no-unescaped-entities */
import {Image, Tooltip, Card, CardFooter} from "@nextui-org/react";
import Navmenu from "./Navmenu";
import art1 from "./New folder/shin v2.jpg"
import art2 from "./New folder/one last time.jpg"
import art3 from "./New folder/swords.jpg"
import art4 from "./New folder/forest oda.jpg"
import art5 from "./New folder/shin v3 sign.jpg"
import art6 from "./New folder/tanjiro fireworks.jpg"

function Arts() {
  return (
    <div>
      <Navmenu />
      <h1 className='font-reem font-bold text-7xl p-2 m-3 mb-7 sm:flex justify-center'>Arts</h1>

    <div className="w-full max-w-5xl p-5 pb-10 mx-auto mb-10 gap-5 columns-3 space-y-5">
      <Tooltip
        content={
          <div className="w-full max-w-lg px-1 py-2">
            <Card>
            <Image src={art1} />
            <CardFooter className="gap-1">
              <div className="flex gap-1">
                <p className="font-semibold text-default-600 text-small">This world is cruel but I'll still love you,</p>
              </div>
              <div className="flex gap-1">
                <p className="font-semibold text-default-600 text-small">Shin</p>
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
        alt="art1"
        className="w-full object-cover"
        src={art1}
      />
      </Tooltip>

      <Tooltip
        content={
          <div className="w-full max-w-lg px-1 py-2">
            <Card>
            <Image src={art2} />
            <CardFooter className="gap-1">
              <div className="flex gap-1">
                <p className="font-semibold text-default-600 text-small">One last time,</p>
              </div>
              <div className="flex gap-1">
                <p className="font-semibold text-default-600 text-small">Namikaze Minato</p>
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
          alt="art2"
          className="w-full object-cover"
          src={art2}
        />
      </Tooltip>

      <Tooltip
        content={
          <div className="w-full max-w-lg px-1 py-2">
            <Card>
            <Image src={art3} />
            <CardFooter className="gap-1">
              <div className="flex gap-1">
                <p className="font-semibold text-default-600 text-small">Swords of the devil,</p>
              </div>
              <div className="flex gap-1">
                <p className="font-semibold text-default-600 text-small">Asta</p>
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
          alt="art3"
          className="w-full object-cover"
          src={art3}
        />
      </Tooltip>

      <Tooltip
        content={
          <div className="w-full max-w-lg px-1 py-2">
            <Card>
            <Image src={art4} />
            <CardFooter className="gap-1">
              <div className="flex gap-1">
                <p className="font-semibold text-default-600 text-small">Be on the side that saves people,</p>
              </div>
              <div className="flex gap-1">
                <p className="font-semibold text-default-600 text-small">Oda Sakunosuke</p>
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
          alt="art4"
          className="w-full object-cover"
          src={art4}
        />
      </Tooltip>

      <Tooltip
        content={
          <div className="w-full max-w-lg px-1 py-2">
            <Card>
            <Image src={art5} />
            <CardFooter className="gap-1">
              <div className="flex gap-1">
                <p className="font-semibold text-default-600 text-small">Ghost in a flower,</p>
              </div>
              <div className="flex gap-1">
                <p className="font-semibold text-default-600 text-small">Shin</p>
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
          alt="art5"
          className="w-full object-cover"
          src={art5}
        />
      </Tooltip>

      <Tooltip
        content={
          <div className="w-full max-w-lg px-1 py-2">
            <Card>
            <Image src={art6} />
            <CardFooter className="gap-1">
              <div className="flex gap-1">
                <p className="font-semibold text-default-600 text-small">Zankyou Sanka (Reverberation),</p>
              </div>
              <div className="flex gap-1">
                <p className="font-semibold text-default-600 text-small">Kamado Tanjiro</p>
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
          alt="art6"
          className="w-full object-cover"
          src={art6}
        />
      </Tooltip>
    </div>
  </div>
  )
}

export default Arts
