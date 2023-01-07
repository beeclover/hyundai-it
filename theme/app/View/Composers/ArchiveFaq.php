<?php

namespace App\View\Composers;

use Roots\Acorn\View\Composer;

class ArchiveFaq extends Composer
{
  /**
   * List of views served by this composer.
   *
   * @var array
   */
  protected static $views = ['archive-faq'];

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
