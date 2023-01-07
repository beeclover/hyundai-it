<x-spacer class="h-[100px]" />
<article @php(post_class())>
  <div class="container">
    <header class="border-[10px] border-[#eee] h-[240px] flex justify-center flex-col items-center text-center">
      <h1 class="text-[44px] font-extrabold">{!! $title !!}</h1>
    </header>
  </div>
  <x-spacer class="h-[50px]" />
  <div class="content-signle content-signle-{!! get_post_type() !!}">
    <div class="entry-content prose-xl max-w-none">
      @php(the_content())
    </div>
  </div>
</article>
<x-spacer class="h-[100px]" />
<footer class="container">
  <div class="grid border border-[#707070]">
    <div class="flex gap-x-[50px] h-[70px] items-center px-[50px]">
      <div class="text-[#aaaaaa] font-bold">이전</div>
      <div class="line-clamp-1">
        @if (isset($prev_post['permalink'])) <a href="{!! $prev_post['permalink'] !!}"> @endif
          {!! $prev_post['title'] !!}
        @if (isset($prev_post['permalink'])) </a> @endif
      </div>
    </div>
    <div class="relative h-px bg-[#707070]">
      <a href="{!! get_post_type_archive_link(get_post_type()) !!}" class="absolute right-0 top-1/2 -translate-y-1/2 bg-white w-[155px] text-center font-bold text-[#aaaaaa]">목록보기</a>
    </div>
    <div class="flex gap-x-[50px] h-[70px] items-center px-[50px]">
      <div class="text-[#aaaaaa] font-bold">다음</div>
      <div class="line-clamp-1">
        @if (isset($next_post['permalink'])) <a href="{!! $next_post['permalink'] !!}"> @endif
          {!! $next_post['title'] !!}
        @if (isset($next_post['permalink'])) </a> @endif
      </div>
    </div>
  </div>
</footer>
