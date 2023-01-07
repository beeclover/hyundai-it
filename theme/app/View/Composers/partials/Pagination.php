<?php

namespace WP\Archive\UI;

use function Roots\view;

class Pagination
{
    public function render($range = 5, $anchor = '')
    {
        $showitems = ($range * 2);

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
            $prevlink = $paged > 1 ? get_pagenum_link($paged - 1) : '';
            $nextlink = $paged < $pages ? get_pagenum_link($paged + 1) : '';
            $lastlink = [
                "link" => get_pagenum_link($pages),
                "paged" => $pages
            ];
            $firstlink = [
                "link" => get_pagenum_link(1),
                "paged" => 1
            ];
            $of = $paged + $showitems;

            // 맨마지막 페이지일때 비활성화
            if ($paged == $lastlink['paged']) {
                $nextlink = '';
                $lastlink["link"] = '';
            }

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
