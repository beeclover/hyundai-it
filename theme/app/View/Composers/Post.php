<?php

namespace App\View\Composers;

use Roots\Acorn\View\Composer;

class Post extends Composer
{
  /**
   * List of views served by this composer.
   *
   * @var array
   */
  protected static $views = [
    'partials.page-header',
    'partials.content',
    'partials.content-*',
  ];

  /**
   * Data to be passed to view before rendering, but after merging.
   *
   * @return array
   */
  public function with()
  {
    return [
      'title' => $this->title(),
      'prev_post' => $this->previousPost(),
      'next_post' => $this->nextPost(),
    ];
  }

  /**
   * Returns the post title.
   *
   * @return string
   */
  public function title()
  {
    if ($this->view->name() !== 'partials.page-header') {
      return get_the_title();
    }

    if (is_home()) {
      if ($home = get_option('page_for_posts', true)) {
        return get_the_title($home);
      }

      return __('Latest Posts', 'sage');
    }

    if (is_archive()) {
      return get_the_archive_title();
    }

    if (is_search()) {
      return sprintf(
        /* translators: %s is replaced with the search query */
        __('Search Results for %s', 'sage'),
        get_search_query()
      );
    }

    if (is_404()) {
      return __('Not Found', 'sage');
    }

    return get_the_title();
  }

  public function previousPost()
  {
    $prev_post = get_previous_post();
    $prev_title = '이전 글이 없습니다.';
    $prev_date = '';
    $prev_permalink = null;
    if ($prev_post) {
        $prev_title = strip_tags(str_replace('"', '', $prev_post->post_title));
        $prev_permalink = get_permalink($prev_post->ID);
        $prev_date = get_the_date('Y-m-d', $prev_post->ID);
    }
    return [
        'title' => $prev_title,
        'date' => $prev_date,
        'permalink' => $prev_permalink,
    ];
  }

  public function nextPost()
  {
    $next_post = get_next_post();
    $next_title = '다음 글이 없습니다.';
    $next_date = '';
    $next_permalink = null;
    if ($next_post) {
        $next_title = strip_tags(str_replace('"', '', $next_post->post_title));
        $next_permalink = get_permalink($next_post->ID);
        $next_date = get_the_date('Y-m-d', $next_post->ID);
    }
    return [
        'title' => $next_title,
        'date' => $next_date,
        'permalink' => $next_permalink,
    ];
  }
}
