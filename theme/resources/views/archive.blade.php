@extends('layouts.app')

@section('content')
  <x-page-header
    title="{!! $title !!}"
    parentMenu="{!! $parent_menu !!}"
    postType="{!! $post_type !!}"
  />
  @if (!have_posts())
    <x-C404 />
  @else
  content
  @endif
@endsection
