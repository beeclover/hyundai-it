<?php

namespace App\View\Composers;

use Roots\Acorn\View\Composer;

class ArchiveHowwedo extends Composer
{
  /**
   * List of views served by this composer.
   *
   * @var array
   */
  protected static $views = ['archive-howwedo'];

  /**
   * Data to be passed to view before rendering, but after merging.
   *
   * @return array
   */
  public function override()
  {
    return [
    ];
  }

}
