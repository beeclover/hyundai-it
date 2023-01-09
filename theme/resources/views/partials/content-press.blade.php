<div class="grid grid-cols-[auto,1fr,auto] gap-x-[52px] border-x border-t last:border-b py-[42px] px-[63px]">
  <div class="font-black text-black text-opacity-10">
    <div class="text-[52px] leading-[1.1]">23</div>
    <div class="">{!! get_the_date('Y.m') !!}</div>
  </div>
  <div class="pt-[0.2em]">
    <a href="{!! the_permalink() !!}" class="text-[20px] font-semibold">{!! $title !!}</a>
    <x-spacer class="h-[13px]" />
    <div class="line-clamp-2 text-[14px]">{!! $excerpt !!}</div>
  </div>
</div>
