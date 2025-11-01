import GlareHover from "./GlareHover"

const LanWorks = () => {
  return (
<div className=" bg-[#090909] min-h-screen min-w-screen flex flex-col items-center justify-start p-15 gap-5">
        <div className="bg-[#37BC7E] rounded-4xl p-0.5">
          <button className="bg-[#031D14] rounded-4xl px-7 font-bold py-1 text-[#F5E9CB]">How It Works</button>
        </div>
        <h1 className="relative text-[#FFFFFF] tracking-wider  text-5xl">Get Started In Simple Steps</h1>
        <section className="grid grid-cols-10 grid-rows-2 gap-5">
          <GlareHover
            glareColor="#36b274"
            glareOpacity={0.6}
            glareAngle={-45}
            glareSize={400}
            transitionDuration={1000}
            playOnce={false}
            width=''
            height=""
            background=""
            className=" col-span-4 hover:cursor-default h-auto border-2 w-aut bg-linear-[135deg,#082B1F,#021D11_10%,#083325_25%,#0D492C_30%,#245A42_35%,#071C15_55%,#1B4C35_70%,#021D11_100%]  "
          />
          <GlareHover
            glareColor="#36b274"
            glareOpacity={0.6}
            glareAngle={-45}
            glareSize={400}
            transitionDuration={1000}
            playOnce={false}
            width='500px'
            height='230px'
            background=""
            className="col-span-6 hover:cursor-default h-auto border-2 w-aut bg-linear-[135deg,#082B1F,#021D11_10%,#083325_25%,#0D492C_30%,#245A42_35%,#071C15_55%,#1B4C35_70%,#021D11_100%]  "
          />
          <GlareHover
            glareColor="#36b274"
            glareOpacity={0.6}
            glareAngle={-45}
            glareSize={400}
            transitionDuration={1000}
            playOnce={false}
            width=''
            height=''
            background=""
            className="col-span-5 hover:cursor-default h-auto border-2 w-aut bg-linear-[135deg,#082B1F,#021D11_10%,#083325_25%,#0D492C_30%,#245A42_35%,#071C15_55%,#1B4C35_70%,#021D11_100%]  "
          />
          <GlareHover
            glareColor="#36b274"
            glareOpacity={0.6}
            glareAngle={-45}
            glareSize={400}
            transitionDuration={1000} 
            playOnce={false}
            width=''
            height=''
            background=""
            className="col-span-5 hover:cursor-default h-auto border-2 w-aut bg-linear-[135deg,#082B1F,#021D11_10%,#083325_25%,#0D492C_30%,#245A42_35%,#071C15_55%,#1B4C35_70%,#021D11_100%]  "
          />
        </section>
      </div>  )
}

export default LanWorks