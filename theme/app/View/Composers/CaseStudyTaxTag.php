<?php

namespace App\View\Composers;

use Roots\Acorn\View\Composer;

use WP\NAV;

class CaseStudyTaxTag extends Composer
{
  /**
   * List of views served by this composer.
   *
   * @var array
   */
  protected static $views = ['taxonomy-casestudy-tag'];

  /**
   * Data to be passed to view before rendering.
   *
   * @return array
   */
  public function with()
  {
    return [
        'current_term_name' => $this->current_term_name(),
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
      'post_type' => 'casestudy',
      'parent_menu' => (new NAV\Menu())->my_menu_parent('casestudy'),
    ];
  }

  public function title()
  {
    $post_type = get_post_type_object( 'casestudy' );
    return $post_type->label;
  }

  public function current_term_name ()
  {
    $term = get_queried_object();
    return $term->name;
  }
}
