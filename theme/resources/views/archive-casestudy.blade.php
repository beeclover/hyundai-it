{{--
  page-view: https://hyundai-it.demo.beeclover.pro/support/download
 --}}
@extends('layouts.app')
@section('content')
  <x-page-header
    title="{!! $title !!}"
    parentMenu="{!! $parent_menu !!}"
    postType="{!! $post_type !!}"
  />
  <x-spacer class="h-[60px]" />
  <div class="container">
    @include('partials.header-casestudy')
  </div>
  <div class="container flex flex-col gap-y-[30px]">
    @if (!have_posts())
      <x-C404 />
    @endif
    @while(have_posts()) @php(the_post())
      @include('partials.content-casestudy')
    @endwhile
  </div>
  <x-spacer class="h-[60px]" />
  <div class="container">
    {!! $pagination !!}
  </div>
@endsection
