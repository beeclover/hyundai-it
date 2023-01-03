<x-spacer class="h-[30px]" />
<ul
  x-data="{current_term_name: @if(isset($current_term_name)) '{!! $current_term_name !!}' @else '' @endif}"
  class="flex flex-wrap gap-x-[24px] gap-y-[8px] justify-center text-[20px]"
>
  <li>
    <a href="/newsroom/casestudy" class="font-bold hover:text-[#78aff7]" :class="{'text-primary': current_term_name === ''}">#전체</a>
  </li>
  @foreach(get_terms(array(
    'taxonomy' => 'casestudy-tag',
    'hidden-empty' => false,
    'orderby' => 'name',
  )) as $term)
    <li>
      <a href="/newsroom/casestudy/{!! $term->slug !!}" class="font-bold hover:text-[#78aff7]" :class="{'text-primary': current_term_name === '{!! $term->name !!}'}">#{!! $term->name !!}</a>
    </li>
  @endforeach
</ul>
<x-spacer class="h-[40px]" />
<form action="{!! $current_url !!}">
  <div class="relative">
    <input type="text" name="search" placeholder="검색어를 입력하세요" class="w-full border-[#707070]">
    <label for="submit" class="absolute right-0 top-1/2 -translate-y-1/2 -translate-x-full cursor-pointer">
      <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
      <input type="submit" id="submit" hidden>
    </label>
  </div>
</form>
<div class="py-[70px] text-center border-b border-black border-opacity-20">
  <h2 class="text-[44px] font-extrabold text-primary">
    @if(isset($current_term_name))
      #{!! $current_term_name !!}
    @else
      #전체
    @endif
  </h2>
</div>
<x-spacer class="h-[45px]" />
