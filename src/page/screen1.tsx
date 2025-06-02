import Image from "next/image";

export default function Screen1() {
  return (
    <div className="grid grid-cols-4 gap-4 p-4 text-white">
      {/* Web Design */}
      <div className="bg-black p-4 rounded-lg col-span-2 row-span-1 flex items-center">
          <div className="relative w-full aspect-[16/9]">
              <Image
                  src="/screen1/1_web_design.webp"
                  alt="Monitor"
                  fill
                  className="object-contain"
              />
          </div>
      </div>

      {/* Good Listener */}
      <div className="bg-black p-4 rounded-lg col-span-1 row-span-1 flex items-center justify-center">
          <div className="relative w-full aspect-[4/3]">
              <Image
                  src="/screen1/5_good_listener.webp"
                  alt="Good_Listener"
                  fill
                  className="object-contain"
              />
          </div>
      </div>

      {/* Tech Stack */}
      <div className="bg-black p-4 rounded-lg col-span-1 row-span-1 flex items-center justify-center">
          <div className="relative w-full aspect-[4/3]">
              <Image
                  src="/screen1/6_tech_stack.webp"
                  alt="Tech_Stack"
                  fill
                  className="object-contain"
              />
          </div>
      </div>

      {/* Profile */}
      <div className="bg-black rounded-lg overflow-hidden col-span-1 row-span-1 flex items-center justify-center">
          <div className="relative w-full aspect-[3/4]">
              <Image
                  src="/screen1/2_selfie.jpg"
                  alt="Profile"
                  fill
                  className="object-fill"
              />
          </div>
      </div>


      {/* Container with vertical layout */}
      <div className="flex flex-col col-span-1 row-span-1 gap-4">
          <div className="relative w-full aspect-[16/16]">
              {/* Front End */}
              <div className="bg-black p-4 rounded-lg flex items-center justify-center w-full h-full">
                  <Image
                      src="/screen1/3_front_end.webp"
                      alt="front_end"
                      fill
                      className="object-contain"
                  />
              </div>
          </div>
          <div className="relative w-full aspect-[16/4]">
              {/* Name */}
              <div className="bg-black p-4 rounded-lg flex items-center justify-center w-full h-full">
                  <Image
                      src="/screen1/4_name.webp"
                      alt="front_end"
                      fill
                      className="object-contain"
                  />
              </div>
          </div>
      </div>


      {/* App Developer */}
      <div className="bg-black p-4 rounded-lg col-span-2 row-span-1 flex items-center">
          <div className="relative w-full aspect-[16/9]">
              <Image
                  src="/screen1/7_app_developer.webp"
                  alt="app_developer"
                  fill
                  className="object-contain"
              />
          </div>
      </div>
  </div>
  )
}