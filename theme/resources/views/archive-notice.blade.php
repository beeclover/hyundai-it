@extends('layouts.app')

@section('content')
  <x-page-header
    title="{!! $title !!}"
    thumbnail="{!! $thumbnail !!}"
    parentMenu="{!! $parent_menu !!}"
    postType="{!! $post_type !!}"
  />
  <x-spacer class="h-[90px]" />
  <div class="container">
    <x-spacer class="h-[30px]" />
    <div>
      {{-- row start --}}
      @if (!have_posts())
          <x-C404 />
      @else
        @php($number = $adjusted_count)
        @while(have_posts()) @php(the_post())
          @include("partials.content-notice", ["number" => $number])
          @php($number--)
        @endwhile
      @endif
      {{-- row end --}}
    </div>
    <x-spacer class="h-[60px]" />
    {!! $pagination !!}
  </div>
@endsection

