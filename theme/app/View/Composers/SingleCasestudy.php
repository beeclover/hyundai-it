<?php

namespace App\View\Composers;

use Roots\Acorn\View\Composer;

class SingleCasestudy extends Composer
{
  protected static $views = [
    'partials.content-single-casestudy'
  ];

  public function with()
  {
    return [
      'id' => get_the_ID(),
      'title' => get_the_title(),
      'tag' => $this->term('casestudy-tag'),
    ];
  }

  public function term($slug)
  {
    global $post;
    $term = get_the_terms($post, $slug)[0];
    return $term;
  }

  public function tags()
  {
    global $post;
    $tags = get_the_terms($post, 'casestudy-tag');
    return $tags;
  }
}
