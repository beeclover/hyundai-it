<?php

namespace WP\NAV;

class Menu
{
    /**
     * 현재 페이지에서 메뉴 목록의 부모 메뉴 타이틀 가져오기
     *
     * @param
     * @author       Hansanghyeon
     * @copyright    Hansanghyeon <999@hyeon.pro>
     **/

     /**
      * 현재 페이지에서 메뉴 목록의 부모 메뉴 타이틀 가져오기
      *
      * @param string $post_type 포스트타입을 전달합니다.
      * @param string $theme_location 기본 위치는 primary_navigation
      * @return void
      * @author       Hansanghyeon
      * @copyright    Hansanghyeon <999@hyeon.pro>
      */
    public function my_menu_parent($post_type = '', $theme_location = 'primary_navigation')
    {
        global $post;
        $locations = get_nav_menu_locations();
        if (isset($locations[$theme_location])) {
            $menu = wp_get_nav_menu_object($locations[$theme_location]);
            $menu_items = wp_get_nav_menu_items($menu->term_id);
            _wp_menu_item_classes_by_context($menu_items);
            $breadcrumbs = array();

            foreach ($menu_items as $menu_item) {
                if ($menu_item->current_item_ancestor) {
                    $breadcrumbs[] = $menu_item->title;
                    break;
                }
            }

            $post_type = !empty($post) ? $post->post_type : $post_type;

            if (empty($breadcrumbs) && $post_type) {
                foreach ($menu_items as $menu_item) {
                    if ($menu_item->object === $post_type) {
                        $breadcrumbs[] = get_the_title($menu_item->menu_item_parent);
                        break;
                    }
                }
            }

            // 메뉴에 포함되어있지 않을때
            if (empty($breadcrumbs)) {
                return '';
            }

            return $breadcrumbs[0];
        }
        return '';
    }
}
