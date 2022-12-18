{{--
  webp 확장자인 이미지를 받을떄는 항상 png 이미지도 받아야한다.
  why? webp 이미지가 지원되지 않는 브라우저에서는 png 이미지를 사용한다.
 --}}

{{--
어떠한 경우라도 webp이면 png까지 소스로 묶어야 하기 때문에
picture로 묶어야 한다.
 --}}

@if (count($sources) > 0)
  <picture>
    @foreach ($sources as $source)
      <source srcset="{{ $source['srcset'] }}" type="{{ $source['type'] }}">
    @endforeach
@endif
    <img src="{{ $src }}" alt="{{ $alt }}" class="{{ $class }}">
@if (count($sources) > 0) </picture> @endif
