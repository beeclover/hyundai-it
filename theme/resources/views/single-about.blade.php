@extends('layouts.app')

@section('content')
  <x-page-header title="{!! get_the_title() !!}" parentMenu="{!! $parent_menu !!}"
    postType="{!! $post_type !!}" />
  @while (have_posts())
    @php(the_post())
    @includeFirst([
        'partials.content-single-about-' . get_queried_object()->post_name,
        'partials.content-single-about',
    ])
  @endwhile
@endsection
