{{--
  Template Name: whatwedo
  Template Post Type: about
--}}

@extends('layouts.app')

@section('content')
  <x-page-header postType="about" title="소개" parent_menu="회사소개" />
  <section>
    <div class="container flex justify-end">
      <div class="relative">
        <x-img src="images/about-whatwedo-001.svg" />
        <div class="absolute bottom-[37px] w-full text-center">
          <div class="text-[95px] font-extrabold bg-gradient-to-b from-[#ae91f6] to-[#1c66cc] text-transparent bg-clip-text">
            기술<div class="inline-block w-[68px]"></div>성장
          </div>
        </div>
      </div>
    </div>
  </section>
  <section>
    <div class="container xl:max-w-[1582px]">
      <div class="leading-[1.1] text-[189px] font-ng text-opacity-10 text-black font-black tracking-[-3.78px]">
        Evelopment
      </div>
    </div>
    <div class="relative">
      <x-spacer class="h-[165px]" />
      <div class="container absolute left-1/2 -translate-x-1/2 top-0 -translate-y-[1em] text-[53px]">
        <div class="font-extrabold leading-[1.25] tracking-[-1.06px]">
          진보한 기술력으로<br/>
          세상에 없던 가치를 창조합니다.
        </div>
      </div>
    </div>
  </section>
  <x-spacer class="h-[20px]" />
  <section class="relative z-10">
    <div class="overflow-hidden">
      <div class="container relative min-h-[420px] py-[40px] flex justify-center items-center">
        <div class="max-w-[1580px] w-screen absolute left-0 top-0 h-full">
          <x-img src="images/about-001.webp" class="absolute w-full h-full object-cover" />
        </div>
        <div class="relative z-20 text-white max-w-[600px] text-[20px]">
          올곧은 신념과 노력으로 쌓아 올린 30여 년. 현대아이티는 산업용 디스플레이를 개발하고 생산하는 전문 기업으로 성장했습니다.<br/>
          과감하리만큼 새로운 기술과 디자인적 시도에 세계가 주목했고, 국내를 넘어 미국, 프랑스, 일본 등 세계 30여 개국에 제품을 수출하고 있습니다.
        </div>
      </div>
    </div>
  </section>
  <section>
    <div class="container flex justify-end mt-[-20px]">
      <div class="relative">
        <x-img src="images/about-whatwedo-001.svg" />
        <div class="absolute bottom-[37px] w-full text-center">
          <div class="text-[95px] font-extrabold bg-gradient-to-b from-[#ae91f6] to-[#1c66cc] text-transparent bg-clip-text">
            최소<div class="inline-block w-[68px]"></div>최고
          </div>
        </div>
      </div>
    </div>
  </section>
  <x-spacer class="h-[45px]" />
  <section>
    <div class="container xl:max-w-[1582px]">
      <div class="leading-[1.1] text-[189px] font-ng text-opacity-10 text-black font-black tracking-[-3.78px]">
        Made in Korea
      </div>
    </div>
    <div class="relative">
      <x-spacer class="h-[108px]" />
      <div class="container absolute left-1/2 -translate-x-1/2 top-0 -translate-y-[1.6em] text-[53px]">
        <div class="font-extrabold leading-[1.25] tracking-[-1.06px]">
          그 자체로 충분한 ‘메이드인코리아’<br />
          비교불가한 가치를 향해
        </div>
      </div>
    </div>
  </section>
  <section class="overflow-hidden">
    <div class="container relative min-h-[420px] flex justify-center items-center">
      <div class="max-w-[1920px] w-screen absolute left-1/2 -translate-x-1/2 bottom-0 h-full max-h-[420px]">
        <x-img src="images/about-002.webp" class="absolute w-full h-full object-cover" />
      </div>
      <div class="relative z-20 text-[20px] grid grid-cols-[1fr,minmax(650px,1fr)] pb-[calc(280px-25px)]">
        <div></div>
        <div class="grid gap-y-[50px] leading-[1.7]">
          <div>
            현대아이티의 역사는 수많은 ‘최초’와 ‘최고’로 설명됩니다. 세계 최초로 3D TV를 상용화했고, 최고 수준의 옥외용 디지털 사이니지 기술력을 완성했으며, 기업용 스마트보드로 스마트 오피스 구축을 주도하고 있습니다.
          </div>
          <div class="text-white">
            올곧은 신념과 노력으로 쌓아 올린 30여 년. 현대아이티는 산업용 디스플레이를 개발하고 생산하는 전문 기업으로 성장했습니다.<br/>
            과감하리만큼 새로운 기술과 디자인적 시도에 세계가 주목했고, 국내를 넘어 미국, 프랑스, 일본 등 세계 30여 개국에 제품을 수출하고 있습니다.
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="z-10 relative">
    <div class="container xl:max-w-[1582px] mt-[-60px]">
      <div class="leading-[0.9] text-[189px] font-ng text-opacity-10 text-black font-black tracking-[-3.78px]">
        User-<br/>
        oriented
      </div>
    </div>
    <div class="relative">
      <x-spacer class="h-[108px]" />
      <div class="container absolute left-1/2 -translate-x-1/2 top-0 -translate-y-[1em] text-[53px]">
        <div class="font-extrabold leading-[1.25] tracking-[-1.06px]">
          사람이 중심이라는 진리만큼은 결코 변하지 않습니다.
        </div>
      </div>
    </div>
    <div class="container flex justify-center">
      <div class="max-w-[680px] text-[20px] font-bold">
        <div>
          이 시대의 패러다임은 예측이 어려울 만큼 빠르게 변화하고 있습니다.<br/>
          그러나 사람이 중심이라는 진리만큼은 결코 변하지 않습니다.<br/>
          현대아이티가 최첨단 기술에 사용자의 감성을 녹여내고, 당장 ‘어떤
          제품을 만들까’보다 ‘어떤 가치를 창조할까’에 초점을 맞추는 이유입니다.
        </div>
        <div class="text-[#3c92ff] mt-[50px]">
          단순한 디스플레이 전문 기업을 넘어서는 현대아이티.<br/>
          일상을 진화시키는 세계 초일류 기업으로 나아가겠습니다.<br/>
          감사합니다.
        </div>
      </div>
    </div>
  </section>
  <x-spacer class="h-[100px]" />
@endsection
