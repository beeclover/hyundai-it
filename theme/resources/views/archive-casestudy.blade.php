{{--
  page-view: https://hyundai-it.demo.beeclover.pro/support/download
 --}}
@extends('layouts.app')
@section('content')
  <x-page-header title="{!! $title !!}" parentMenu="{!! $parent_menu !!}" />
  <x-spacer class="h-[60px]" />

  <div class="container flex flex-col gap-y-[30px]">
    @while(have_posts()) @php(the_post())
      @include('partials.content-casestudy')
    @endwhile
  </div>
  <div class="container">
    {!! $pagination !!}
  </div>
@endsection
