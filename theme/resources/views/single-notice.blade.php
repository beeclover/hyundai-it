@extends('layouts.app')

@section('content')
  <x-page-header title="{!! $header_title !!}" parentMenu="{!! $parent_menu !!}"
    postType="{!! $post_type !!}" />
  @while (have_posts())
    @php(the_post())
    @includeFirst(['partials.content-single-notice'])
  @endwhile
@endsection
