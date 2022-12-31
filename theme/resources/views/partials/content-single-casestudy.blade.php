<x-spacer class="h-[100px]" />
<article @php(post_class())>
  <div class="container">
    <header class="border-[10px] border-[#eee] h-[240px] flex justify-center flex-col items-center text-center">
      @if($tag)
        <a class="font-bold underline text-[20px] hover:text-primary" href="{!! get_term_link($tag) !!}">{!! $tag->name !!}</a>
      @endif
      <x-spacer class="h-[12px]" />
      <h1 class="text-[44px] font-extrabold">{!! $title !!}</h1>
    </header>
  </div>
  <x-spacer class="h-[50px]" />
  <div class="content-signle-casestudy">
    <div class="entry-content prose-xl max-w-none">
      @php(the_content())
    </div>
    <footer>
      {!! wp_link_pages(['echo' => 0, 'before' => '<nav class="page-nav"><p>' . __('Pages:', 'sage'), 'after' => '</p></nav>']) !!}
    </footer>
  </div>
</article>
<x-spacer class="h-[100px]" />
