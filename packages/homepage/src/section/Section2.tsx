import Img from "components/Img"
import Spacer from "components/Spacer"
import gsap from 'gsap'


export const Section2 = () => {

  return (
    <>
      <section>
        <Row1 />
      </section>
    </>
  )
}

export default Section2

const Row1 = () => {
  return (
    <div tw="relative">
      <div tw="grid grid-cols-2 container xl:max-w-[1920px] absolute top-0 left-1/2 -translate-x-1/2">
        <div tw="relative">
          <Img src="/img/home-001.webp" isSet tw="w-[766px] translate-x-[calc(100%-555px)]" />
          <span tw="absolute left-full top-0 text-[122px] font-bold font-ng uppercase leading-none">Professional</span>
          <div tw="absolute left-full top-[0.6em] h-[0.5em] w-[7.2em] text-[122px] bg-black opacity-[0.05]"></div>
        </div>
      </div>
      <div tw="grid grid-cols-2 container">
        <div />
        <div tw="transform translate-x-[-250px]">
          <Spacer tw="h-[122px]" />
          <Spacer tw="h-[138px]" />
          <div tw="text-[53px] font-extralight text-black">
            탄탄한 30년 노하우의<br />
            디지털 디스플레이 전문기업
          </div>
          <Spacer tw="h-[30px]" />
          <div tw="max-w-[430px]">
            첨단 기술 하나가 전 세계를 움직이는 시대. 전문 연구소와 최첨단 자체 생산시설을 바탕으로 오직 최고만을 지향합니다.
            회로‧기구‧공정기술‧펌웨어 분야의 설계 경험과 혁신적 기술력의 현대아이티는 이 순간도 끊임없이 성장하고 있습니다.
          </div>
        </div>
      </div>
    </div>
  )
}