<?php

namespace App\View\Composers;

use Roots\Acorn\View\Composer;

class FaqArchive extends Composer
{
  /**
   * List of views served by this composer.
   *
   * @var array
   */
  protected static $views = ['archive-faq'];

  /**
   * Data to be passed to view before rendering.
   *
   * @return array
   */
  public function with()
  {
    return [
      'title' => $this->title(),
      'thumbnail' => $this->thumbnail(),
    ];
  }

  public function title()
  {
    return get_the_archive_title();
  }

  public function thumbnail()
  {
    // acf option 페이지에서 background-image 필드를 가져온다.
    $options = get_field(get_post_type(), 'option');
    if ($options['background-image']['url'] ?? false) {
      return $options['background-image']['url'];
    }
  }
}
