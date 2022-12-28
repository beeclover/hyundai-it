{{--
  Template Name: Forms
--}}

@extends('layouts.app')

@section('content')
  <x-page-header />
  <div class="container">
    <div class="h-[90px]"></div>
    <div id="root"></div>
    <div class="h-[60px]"></div>
    <div class="bg-[#f5f5f5]">
      <div class="flex gap-x-[28px] items-center px-[78px] py-[56px]">
        <a href="tel:1566-7713" class="text-[32px] font-extrabold">1566-7713</a>
        <div>
          <span>궁금하신 점이 있으시면 전화로 문의주세요.</span>
          <span>평일 09:00 - 18:00 / 주말 및 공휴일 휴무</span>
        </div>
      </div>
    </div>
  </div>
@endsection
