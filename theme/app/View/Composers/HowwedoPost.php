<?php

namespace App\View\Composers;

use Roots\Acorn\View\Composer;

class HowwedoPost extends Composer
{
  /**
   * List of views served by this composer.
   *
   * @var array
   */
  protected static $views = ['partials.content-howwedo'];

  /**
   * Data to be passed to view before rendering.
   *
   * @return array
   */
  public function with()
  {
    return [
      'id' => $this->id(),
      'content' => $this->content(),
      'info' => $this->info(),
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
      'thumbnail' => $this->thumbnail(),
    ];
  }

  public function id()
  {
    return get_the_ID();
  }

  public function title()
  {
    return get_the_title();
  }

  public function content()
  {
    return get_the_content();
  }

  public function thumbnail()
  {
    return get_the_post_thumbnail_url();
  }

  public function info()
  {
    $info = [
        'from' => get_field('from', $this->id()),
        'date' => get_field('date', $this->id()),
    ];
    return $info;
  }
}
