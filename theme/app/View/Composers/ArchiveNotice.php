<?php

namespace App\View\Composers;

use Roots\Acorn\View\Composer;

class ArchiveNotice extends Composer
{
  /**
   * List of views served by this composer.
   *
   * @var array
   */
  protected static $views = ['archive-notice'];

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

  /**
   * Data to be passed to view before rendering.
   *
   * @return array
   */
  public function with()
  {
    return [
      'adjusted_count' => $this->adjusted_count(),
    ];
  }

  public function adjusted_count()
  {
    // 게시된 충 포스트의 갯수
    $post_count = wp_count_posts( 'notice' )->publish;

    // 페이지 넘버 - 1
    $paged = ( get_query_var( 'paged' ) ) ? get_query_var( 'paged' ) : 1;
    $paged = $paged - 1;

    // 페이지당 게시물수 가져오기
    $posts_per_page = get_option( 'posts_per_page' );

    // 조정된 포스트의 번호
    $adjusted_count = $post_count - ( $paged * $posts_per_page );
    return $adjusted_count;
  }
}
