@extends('layouts.app')

@section('content')
  <x-page-header title="{!! $title !!}" thumbnail="{!! $thumbnail !!}" parent_menu="{!! $parent_menu !!}" />
  @if (!have_posts())
    <x-C404 />
  @else
    <div data-component="spacer" class="h-[90px]"></div>
    <div class="container">
      {{-- content --}}
      <div x-data="faq" class="grid grid-cols-[min-content_max-content_max-content_minmax(367px,1fr)] gap-y-px bg-[#707070] border border-[#707070]">
        {{-- row start --}}
        @while(have_posts()) @php(the_post())
        @includeFirst(['partials.content-faq'])
        @endwhile
        {{-- row end --}}
      </div>
      <div data-component="spacer" class="h-[60px]"></div>
      {!! $pagination !!}
    </div>
  @endif
@endsection

