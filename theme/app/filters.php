<?php

/**
 * Theme filters.
 */

namespace App;

/**
 * WordPress의 post excerpt가 없을 경우, post의 본문 내용을 가져와서 출력하는 것은 여러가지 방법으로 가능합니다. 아래에서 세 가지 방법을 소개해드리겠습니다.
 * 1. WordPress 테마의 functions.php 파일에 코드 추가
 * WordPress 테마의 functions.php 파일에 아래 코드를 추가하면 post excerpt가 없을 경우, post의 본문 내용이 출력됩니다.
 *
 * 2. WordPress 테마의 single.php 파일에 코드 추가
 * WordPress 테마의 single.php 파일에 아래 코드를 추가하면 post excerpt가 없을 경우, post의 본문 내용이 출력됩니다.
 * <?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>
 *     <?php if (get_the_excerpt()) { ?>
 *         <?php the_excerpt(); ?>
 *     <?php } else { ?>
 *         <?php the_content(); ?>
 *     <?php } ?>
 * <?php endwhile; endif; ?>
 */
function get_the_custom_excerpt($length = 999){
    global $post;
    $text = $post->post_excerpt;
    if(empty($text)){
      $text = $post->post_content;
      $text = strip_shortcodes( $text );
      $text = apply_filters('the_content', $text);
      $text = str_replace(']]>', ']]&gt;', $text);
    }
    $text = strip_tags($text);
    $excerpt_length = $length;
    $words = explode(' ', $text, $excerpt_length + 1);
    if(count($words) > $excerpt_length) :
      array_pop($words);
      array_push($words, '');
      $text = implode(' ', $words);
    endif;
    return $text;
  }
