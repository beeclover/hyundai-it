<?php

namespace WP\Archive\UI;

use function Roots\view;

class Pagination
{
    public function render($range = 8, $anchor = '')
    {
        $showitems = ($range * 2) + 1;

        global $paged;
        if (empty($paged)) {
            $paged = 1;
        }

        global $wp_query;
        $pages = $wp_query->max_num_pages;
        if (!$pages) {
            $pages = 1;
        }

        if ($pages > 1) {
            $prevlink = $paged > 1 && $showitems < $pages ? get_pagenum_link($paged - 1) : '';
            $nextlink = $paged < $pages && $showitems < $pages ? get_pagenum_link($paged + 1) : '';
            $lastlink = [
                "link" => get_pagenum_link($pages),
                "paged" => $pages
            ];
            $firstlink = [
                "link" => get_pagenum_link(1),
                "paged" => 1
            ];
            $of = $paged + $showitems;

            return view('partials.pagination', [
                'pages' => $pages,
                'range' => $range,
                'of' => $of,
                'paged' => $paged,
                'prevlink' => $prevlink,
                'nextlink' => $nextlink,
                'lastlink' => $lastlink,
                'firstlink' => $firstlink,
                'showitems' => $showitems,
                'anchor' => $anchor,
            ]);
        }
    }
}
