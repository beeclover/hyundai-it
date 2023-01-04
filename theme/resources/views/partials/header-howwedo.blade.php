<form action="{!! $current_url !!}">
  <div class="grid grid-cols-[auto,1fr] gap-x-[5px]">
    @php(wp_dropdown_categories( array(
        'taxonomy' => 'product',
        'name' => 'product',
        'value_field' => 'slug',
        'show_option_all' => '제품군',
    )))
    <div class="relative">
      <input type="text" name="search" placeholder="검색어를 입력하세요" class="w-full border-[#707070]">
      <label for="submit" class="absolute right-0 top-1/2 -translate-y-1/2 -translate-x-full cursor-pointer">
        <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
        <input type="submit" id="submit" hidden>
      </label>
    </div>
  </div>
</form>
