<div>
  <div class="p-[25px] pt-[35px] bg-white">
    <div class="text-[18px] font-bold">{!! $title !!}</div>
    <x-spacer class="h-[10px]" />
    <div class="line-clamp-2 min-h-[3em]">
      {!! $content !!}
    </div>
    <x-spacer class="h-[30px]" />
    <div class="h-[328px] border border-[#c6c6c6]">
      <img src="{!! $thumbnail !!}" alt="" />
    </div>
  </div>
  <x-spacer class="h-[10px]" />
  <div class="text-[#999999]">
    <div>{!! $info['from'] !!}</div>
    <div>2019.05.20</div>
  </div>
</div>
