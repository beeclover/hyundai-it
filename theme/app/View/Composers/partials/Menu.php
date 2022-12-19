<?php

namespace WP\NAV;

class Menu
{
    /**
     * 현재 페이지에서 메뉴 목록의 부모 메뉴 타이틀 가져오기
     *
     * @author       Hansanghyeon
     * @copyright    Hansanghyeon <999@hyeon.pro>
     **/

    public function my_menu_parent($theme_location)
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
            if (empty($breadcrumbs) && !empty($post)) {
                foreach ($menu_items as $menu_item) {
                    if ($menu_item->object === $post->post_type) {
                        $breadcrumbs[] = get_the_title($menu_item->menu_item_parent);
                        break;
                    }
                }
            }

            return $breadcrumbs[0];
        }
        return '';
    }
}
