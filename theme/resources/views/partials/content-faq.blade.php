<div class="h-[70px]"
  x-init="add({!! $id !!})"
></div>
<div
  class="pl-[68px] flex items-center"
  :class="isExpanded({!! $id !!}) ? 'bg-[#f5f5f5]' : 'bg-white'"
>
  <b>{!! $제품 !!}</b>
</div>
<div
  class="px-[50px] flex items-center"
  :class="isExpanded({!! $id !!}) ? 'bg-[#f5f5f5]' : 'bg-white'"
>
  <b>{!! $분류 !!}</b>
</div>
<div
  class="flex relative items-center pr-[30px]"
  :class="isExpanded({!! $id !!}) ? 'bg-[#f5f5f5]' : 'bg-white'"
>
  <button
    @click="() => toggle({!! $id !!})"
    class="text-left w-full"
  >
    {!! $title !!}
  </button>
  <button
    :class="isExpanded({!! $id !!}) ? 'rotate-[90deg]' : '-rotate-90'"
    @click="() => toggle({!! $id !!})"
  >
    <i class="uit uit-angle-left-b text-[24px]"></i>
  </button>
</div>
<div
  x-show="isExpanded({!! $id !!})"
  x-collapse.duration.1000ms
  class="col-span-4"
  :class="isExpanded({!! $id !!}) ? 'bg-[#f5f5f5]' : 'bg-white'"
>
  <div class="px-[71px] py-[49px]">
    @php(the_content())
  </div>
</div>
