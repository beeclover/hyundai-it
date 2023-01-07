<?php

namespace App\View\Composers;

use Roots\Acorn\View\Composer;

class PostFaq extends Composer
{
  /**
   * List of views served by this composer.
   *
   * @var array
   */
  protected static $views = ['partials.content-faq'];

  /**
   * Data to be passed to view before rendering.
   *
   * @return array
   */
  public function with()
  {
    return [
      'id' => get_the_ID(),
      '분류' => $this->term('faq-taxonomy'),
      '제품' => $this->term('product'),
    ];
  }

  /**
   * Data to be passed to view before rendering, but after merging.
   *
   * @return array
   */
  public function override()
  {
    return [
      'title' => $this->title(),
    ];
  }

  public function title()
  {
    return get_the_title();
  }

  public function term($slug)
  {
    global $post;
    $term = get_the_terms($post, $slug)[0];
    return $term->name;
  }
}
