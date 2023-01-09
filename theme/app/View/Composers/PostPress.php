<?php

namespace App\View\Composers;

use Roots\Acorn\View\Composer;

class PostPress extends Composer
{
  /**
   * List of views served by this composer.
   *
   * @var array
   */
  protected static $views = ['partials.content-press'];

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
    ];
  }

  public function title()
  {
    return get_the_title();
  }
}
