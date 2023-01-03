<div
  x-data="{hasThumnail: @if(has_post_thumbnail()) true @else false @endif}"
  class="grid mt-[30px] bg-white"
  :class="{'grid-cols-[1fr] ml-0': !hasThumnail, 'grid-cols-[220px,1fr] ml-[40px]': hasThumnail}"
>
  {{-- thumbnail --}}
  @if (has_post_thumbnail())
    <div>
      <div class="w-[220px] h-[220px] bg-red-500 -translate-x-[40px] -translate-y-[30px]">
        {!! the_post_thumbnail(
          'medium',
          ['class' => 'object-cover w-full h-full']
        ) !!}
      </div>
    </div>
  @endif
  {{-- thumbnail end --}}
  {{-- content --}}
  <div class="pt-[50px] h-[220px] pr-[75px]" :class="{'px-[50px]': !hasThumnail}">
    <div class="text-[20px] font-semibold">
      <a href="{!! the_permalink() !!}">
        {!! the_title() !!}
      </a>
    </div>
    <x-spacer class="h-[13px]" />
    <div class="line-clamp-2">
      {!! $excerpt !!}
    </div>
    <x-spacer class="h-[24px]" />
    {{-- tags --}}
    <ul class="flex gap-x-[2px]">
      @foreach ($tags as $tag)
        <li>
          <a href="{!! $tag->link !!}" class="text-[14px] text-primary font-bold">
            #{!! $tag->name !!}
          </a>
        </li>
      @endforeach
    </ul>
  </div>
  {{-- content end --}}
</div>
