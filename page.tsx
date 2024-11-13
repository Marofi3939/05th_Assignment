import Image from "next/image";

export default function Home() {
  return (
    <div className=" bg-white h-screen">
      <div className=" text-[40px] font-bold  bg-bgheader
                          p-[10px] flex-col justify-center
                         ">
        MANZZARI
      </div>
      
      <div className="flex">
        <div className="w-1/2 flex justify-center items-center">
          <div className=" fontweight-[700] text-black">
            <h1 className="text-[40px] mt-[130px] ml-[176px]  "
            >IMPECCABLE<br />
              CRAFTSMANSHIP AND<br />
              FINESSE</h1>
            <div className="m-[20px] pl-[155px] ">
              <p white-spacing className="text-[25px] w-[500px] text-texthero  " >
                An example of intricate workmanship and detail,
                elegant necklaces and long and short chains form
                a part of our desirable collection.
              </p>

            </div>
            <button className="text-[30px] ml-[176px] mt-[5px] bg-bgfooter rounded px-[20px] "
            >Explore Now
            </button>
          </div>
        </div>

        <div className="w-1/2 flex justify-center items-center ">
          <Image
            src={"/image/figma_image_2.jpg"}
            alt="Hero Image"
            width={442}
            height={611}
            className="mr-[24px] mt-[28px]"
          />
        </div>
      </div>
    </div>
  );
}