<?php

namespace App\View\Composers;

use Roots\Acorn\View\Composer;

use function App\get_the_custom_excerpt;

class PostCasestudy extends Composer
{
  /**
   * List of views served by this composer.
   *
   * @var array
   */
  protected static $views = ['partials.content-casestudy'];

  /**
   * Data to be passed to view before rendering.
   *
   * @return array
   */
  public function with()
  {
    return [
      'id' => get_the_ID(),
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
      'excerpt' => get_the_custom_excerpt(),
      'tags' => $this->tags(),
    ];
  }

  public function title()
  {
    return get_the_title();
  }

  public function tags()
  {
    global $post;
    $tags = get_the_terms($post, 'casestudy-tag');
    return $tags;
  }
}
