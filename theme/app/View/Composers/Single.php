<?php

namespace App\View\Composers;

use Roots\Acorn\View\Composer;

use WP\NAV;

class Single extends Composer
{
  /**
   * List of views served by this composer.
   *
   * @var array
   */
  protected static $views = ['single', 'single-*'];

  /**
   * Data to be passed to view before rendering.
   *
   * @return array
   */
  public function with()
  {
    return [
      'header_title' => get_post_type_object( get_post_type() )->label,
      'parent_menu' => (new NAV\Menu())->my_menu_parent(),
      'post_type' => get_post_type(),
    ];
  }
}
