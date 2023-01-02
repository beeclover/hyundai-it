<div class="relative">
  {{-- background image --}}
  @if(empty($thumbnail) || $thumbnail == '')
    @php($post_type = !empty($post_type) ? $post_type : 'faq')
    <x-img src="images/header-archive-{!! $post_type !!}.webp" class="absolute w-full h-full object-cover" />
  @else
    <img src="{!! $thumbnail !!}" />
  @endif
  {{-- content --}}
  <div class="h-[380px] relative">
    <div class="container lg:max-w-screen-lg mx-auto h-full flex items-center justify-center">
      <div class="leading-none text-center text-white">
        <div class="text-[26px] font-extrabold">{!! $parent_menu !!}</div>
        <div class="h-[12px]"></div>
        <h1 class="text-[47px] font-extrabold uppercase">{!! $title !!}</h1>
      </div>
    </div>
  </div>
</div>
