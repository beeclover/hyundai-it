<?php

namespace App\View\Composers;

use Roots\Acorn\View\Composer;

class PostNotice extends Composer
{
  /**
   * List of views served by this composer.
   *
   * @var array
   */
  protected static $views = ['partials.content-notice'];

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
      'date' => $this->date(),
    ];
  }

  public function title()
  {
    return get_the_title();
  }

    public function date()
    {
        return get_the_date('Y.m.d');
    }
}
