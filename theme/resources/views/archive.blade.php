@extends('layouts.app')

@section('content')
  @include('partials.header-archive')
  @if (!have_posts())
    <x-C404 />
  @else
  content
  @endif
@endsection
