<div class="relative">
  {{-- background image --}}
  @if(empty($thumbnail) || $thumbnail == '')
    <x-img src="images/header-archive-faq.webp" class="absolute w-full h-full object-cover" />
  @else
    <img src="{!! $thumbnail !!}" />
  @endif
  {{-- content --}}
  <div class="h-[380px] relative">
    <div class="container lg:max-w-screen-lg mx-auto h-full text-center flex items-center justify-center">
      <h1 class="text-white text-[47px] font-extrabold">{!! $title !!}</h1>
    </div>
  </div>
</div>
