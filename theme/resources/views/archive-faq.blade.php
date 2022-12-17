@extends('layouts.app')

@section('content')
  @include('partials.header-archive')
  @if (!have_posts())
    <x-C404 />
  @else
    <div data-component="spacer" class="h-[90px]"></div>
    <div class="container">
      {{-- header --}}
      <div>{!! $title !!}</div>
      {{-- content --}}
      <div class="">
        <div x-data="faq" class="grid grid-cols-[min-content_max-content_max-content_minmax(367px,1fr)] gap-y-px bg-[#707070] border border-[#707070]">
          {{-- row start --}}
          @while(have_posts()) @php(the_post())
          @includeFirst(['partials.content-faq'])
          @endwhile
          {{-- row end --}}
        </div>
      </div>
    </div>
  @endif
@endsection
