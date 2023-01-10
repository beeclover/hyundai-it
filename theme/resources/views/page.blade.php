@extends('layouts.app')

@section('content')
  @while (have_posts())
    @php(the_post())
    <x-page-header title="{!! get_the_title() !!}" post_type="{!! get_post_type() !!}" />
    @includeFirst([
        'partials.content-page-' . get_queried_object()->post_name,
        'partials.content-page',
        'partials.content',
    ])
  @endwhile
@endsection
