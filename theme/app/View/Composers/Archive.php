<?php

namespace App\View\Composers;

use Roots\Acorn\View\Composer;

use WP\Archive\UI;
use WP\NAV;

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
      'post_type' => get_post_type(),
      'pagination' => (new UI\Pagination())->render(),
      'current_url' => $this->current_url(),
      'parent_menu' => (new NAV\Menu())->my_menu_parent(),
      'thumbnail' => $this->thumbnail(),
    ];
  }

  public function title()
  {
    return get_the_archive_title();
  }

  public function current_url()
  {
    global $wp;
    $current_url = home_url( add_query_arg( array(), $wp->request ) );
    return $current_url;
  }

  public function thumbnail()
  {
    // acf option 페이지에서 background-image 필드를 가져온다.
    $options = get_field(get_post_type(), 'option');
    if ($options['background-image']['url'] ?? false) {
      return $options['background-image']['url'];
    }
    return '';
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
