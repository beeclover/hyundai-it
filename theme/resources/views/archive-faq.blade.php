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
    @include('partials.header-search')
    <x-spacer class="h-[30px]" />
    {{-- head end --}}
    {{-- content --}}
    <div x-data="faq" class="grid grid-cols-[min-content_max-content_max-content_minmax(367px,1fr)] gap-y-px bg-[#707070] border border-[#707070]">
      {{-- row start --}}
      @if (!have_posts())
        <div class="col-sapn-3 bg-white flex">
          <x-C404 />
        </div>
      @endif
      @while(have_posts()) @php(the_post())
        @includeFirst(['partials.content-faq'])
      @endwhile
      {{-- row end --}}
    </div>
    <x-spacer class="h-[60px]" />
    {!! $pagination !!}
  </div>
@endsection

