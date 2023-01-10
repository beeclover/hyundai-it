<x-spacer class="h-[100px]" />
<section class="content-page">
  <div class="container">
    <div class="max-h-[900px] overflow-y-auto scroll-custom-type1 px-[62px] py-[61px] border border-[#707070]">
      <article @php(post_class('prose max-w-none entry-content leading-[1.7]'))>
        {!! get_the_content() !!}
      </article>
    </div>
  </div>
</section>
