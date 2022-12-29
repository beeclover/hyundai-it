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

// FAQ, 다운로드 taxonomy, 키워드 검색

add_filter('query_vars', function ($vars) {
    $vars[] = 'download-taxonomy';
    $vars[] = 'search';
    return $vars;
});

add_action( 'pre_get_posts', function ( $query ) {
    if (
        $query->is_main_query()
        && !is_admin()
        && is_archive()
        && get_query_var('product')
    ) {
        $query->set('tax_query', array(
            array(
                'taxonomy' => 'product',
                'field' => 'slug',
                'terms' => get_query_var('product'),
            ),
        ));
    }

    if (
        $query->is_main_query()
        && !is_admin()
        && is_archive()
        && get_query_var('search')
    ) {
        $query->set('s', get_query_var('search'));
    }
} );
