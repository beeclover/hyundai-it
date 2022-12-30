<footer class="bg-black text-white">
  <x-spacer class="h-[57px]" />
  <div class="container xl:max-w-[1580px] grid grid-cols-[1fr,auto]">
    <ul class="flex gap-x-[16px] col-span-2">
      @foreach (wp_get_nav_menu_items(19) as $menu_list)
        <li>
          {!! $menu_list->title !!}
        </li>
      @endforeach
    </ul>
    <x-spacer class="h-[12px] col-span-2" />
    <div>
      <ul class="flex gap-x-[16px] text-white text-opacity-50">
        @foreach (wp_get_nav_menu_items(20) as $menu_list)
          <li>
            {!! $menu_list->title !!}
          </li>
        @endforeach
      </ul>
      <div class="opacity-50">Copyright ⓒ Hyundai IT Co., Ltd. All rights reserved.</div>
    </div>
    <div>
      <x-logo class="text-white text-opacity-50"></x-logo>
    </div>
  </div>
  <x-spacer class="h-[57px]" />
</footer>
