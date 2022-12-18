<?php

namespace App\View\Composers;

use Roots\Acorn\View\Composer;

use WP\Archive\UI;

class Archive extends Composer
{
  /**
   * List of views served by this composer.
   *
   * @var array
   */
  protected static $views = [
    'archive',
    'archive-*'
    ];

  /**
   * Data to be passed to view before rendering.
   *
   * @return array
   */
  public function with()
  {
    return [
      'title' => $this->title(),
      'pagination' => (new UI\Pagination())->render(),
    ];
  }

  public function title()
  {
    return get_the_archive_title();
  }
}
