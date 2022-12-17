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
  <i class="uit uit-angle-left-b text-[24px]" :class="isExpanded({!! $id !!}) ? 'rotate-[90deg]' : '-rotate-90'"></i>
</div>
<div
  x-cloak
  x-show="isExpanded({!! $id !!})"
  x-collapse
  class="col-span-4 px-[71px] py-[49px]"
  :class="isExpanded({!! $id !!}) ? 'bg-[#f5f5f5]' : 'bg-white'"
>
  @php(the_content())
</div>
