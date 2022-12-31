{{--
  page-view: https://hyundai-it.demo.beeclover.pro/support/download
 --}}
@extends('layouts.app')
@section('content')
  <x-page-header title="{!! $title !!}" parentMenu="{!! $parent_menu !!}" />
  <x-spacer class="h-[60px]" />

  <div class="container">
    {!! $pagination !!}
  </div>
@endsection
