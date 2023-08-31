import Navmenu from "./Navmenu";

function Contact() {
  return (
    <div>
      <Navmenu />
      <h1 className='font-reem font-bold text-7xl p-2 m-3 mb-7 sm:flex justify-center'>Contact</h1>
        <div className="font-reem text-3xl w-full h-[70vh] max-h-full flex flex-col flex-wrap justify-center leading-loose text-center items-center ">
          <a target="_blank" href="mailto: muhtadeetaron@gmail.com" rel="noreferrer">muhtadeetaron@gmail.com</a>
          <a target="_blank" href="tel: +8801746554925    " rel="noreferrer">+8801746554925</a>
          <a target="_blank" href="https://www.instagram.com/_.muhtadeee._/" rel="noreferrer">Instagram</a>
          <a target="_blank" href="https://www.facebook.com/muhtadeee.taaron" rel="noreferrer">Facebook</a>
        </div>
    </div>
  )
}

export default Contact
