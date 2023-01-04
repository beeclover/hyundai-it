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
    {{-- head --}}
    @include('partials.header-howwedo')
    <x-spacer class="h-[30px]" />
    {{-- head end --}}
    {{-- content --}}
    <div class="grid grid-cols-4 gap-x-[20px] gap-y-[50px]">
      {{-- row start --}}
      @if (!have_posts())
        <div class="col-sapn-4 bg-white flex">
          <x-C404 />
        </div>
      @endif
      @while(have_posts()) @php(the_post())
        @includeFirst(['partials.content-howwedo'])
      @endwhile
      {{-- row end --}}
    </div>
    <x-spacer class="h-[60px]" />
    {!! $pagination !!}
  </div>
@endsection

