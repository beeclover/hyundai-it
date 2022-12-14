<?php

/**
 * Theme setup.
 */

namespace App;

use function Roots\bundle;

/**
 * Register the theme assets.
 *
 * @return void
 */
add_action('wp_enqueue_scripts', function () {
    bundle('app')->enqueue();

    wp_enqueue_style('niveau-grotesk', 'https://use.typekit.net/txi1zak.css', false, null);
    wp_enqueue_style('pretendard', asset('fonts/pretendard/dist/web/static/pretendard.css')->uri(), false, null);
    wp_enqueue_style('iconscout-font', 'https://unicons.iconscout.com/release-pro/v4.0.0/css/thinline.css?key=283fbb00-218c-11ec-92db-0242ac140003', false, null);
}, 100);

/**
 * Register the theme assets. Footer
 *
 * @return void
 */
add_action( 'wp_footer', function () {
} );

add_action('wp_head', function () {
    // Specific page
    global $post;
    if (!empty($post->ID) && $post->ID === 920) {
      echo '<script type="module" crossorigin src="'. asset('dist/forms/app-purchase-inquiry.js')->uri() .'"></script>';
    }
    if (!empty($post->ID) && $post->ID === 917) {
      echo '<script type="module" crossorigin src="'. asset('dist/forms/app-as-inquiry.js')->uri() .'"></script>';
    }
    // chunk
    if (!empty($post->ID) && ($post->ID === 920 || $post->ID === 917)) {
      echo '<link rel="modulepreload" crossorigin href="'. asset('dist/forms/chunk-PrivacyPolicy.js')->uri() .'">';
    }

    if (!empty($post->ID) && $post->ID === 1127) {
      echo '<script src="//dapi.kakao.com/v2/maps/sdk.js?appkey=eb2d12b8c1717deba19fa7e7c1c9e32f"></script>';
    }
});

/**
 * Register the theme assets with the block editor.
 *
 * @return void
 */
add_action('enqueue_block_editor_assets', function () {
    bundle('editor')->enqueue();
}, 100);

/**
 * Register the initial theme setup.
 *
 * @return void
 */
add_action('after_setup_theme', function () {
    /**
     * Enable features from the Soil plugin if activated.
     *
     * @link https://roots.io/plugins/soil/
     */
    add_theme_support('soil', [
        'clean-up',
        'nav-walker',
        'nice-search',
        'relative-urls',
    ]);

    /**
     * Disable full-site editing support.
     *
     * @link https://wptavern.com/gutenberg-10-5-embeds-pdfs-adds-verse-block-color-options-and-introduces-new-patterns
     */
    remove_theme_support('block-templates');

    /**
     * Register the navigation menus.
     *
     * @link https://developer.wordpress.org/reference/functions/register_nav_menus/
     */
    register_nav_menus([
        'primary_navigation' => __('Primary Navigation', 'sage'),
    ]);

    /**
     * Disable the default block patterns.
     *
     * @link https://developer.wordpress.org/block-editor/developers/themes/theme-support/#disabling-the-default-block-patterns
     */
    remove_theme_support('core-block-patterns');

    /**
     * Enable plugins to manage the document title.
     *
     * @link https://developer.wordpress.org/reference/functions/add_theme_support/#title-tag
     */
    add_theme_support('title-tag');

    /**
     * Enable post thumbnail support.
     *
     * @link https://developer.wordpress.org/themes/functionality/featured-images-post-thumbnails/
     */
    add_theme_support('post-thumbnails');

    /**
     * Enable responsive embed support.
     *
     * @link https://wordpress.org/gutenberg/handbook/designers-developers/developers/themes/theme-support/#responsive-embedded-content
     */
    add_theme_support('responsive-embeds');

    /**
     * Enable HTML5 markup support.
     *
     * @link https://developer.wordpress.org/reference/functions/add_theme_support/#html5
     */
    add_theme_support('html5', [
        'caption',
        'comment-form',
        'comment-list',
        'gallery',
        'search-form',
        'script',
        'style',
    ]);

    /**
     * Enable selective refresh for widgets in customizer.
     *
     * @link https://developer.wordpress.org/themes/advanced-topics/customizer-api/#theme-support-in-sidebars
     */
    add_theme_support('customize-selective-refresh-widgets');
}, 20);

/**
 * Register the theme sidebars.
 *
 * @return void
 */
add_action('widgets_init', function () {
    $config = [
        'before_widget' => '<section class="widget %1$s %2$s">',
        'after_widget' => '</section>',
        'before_title' => '<h3>',
        'after_title' => '</h3>',
    ];

    register_sidebar([
        'name' => __('Primary', 'sage'),
        'id' => 'sidebar-primary',
    ] + $config);

    register_sidebar([
        'name' => __('Footer', 'sage'),
        'id' => 'sidebar-footer',
    ] + $config);
});

// acf
// faq acf ??????????????? ??????
if( function_exists('acf_add_options_sub_page') ) {
	acf_add_options_sub_page(array(
		'page_title' 	=> 'faq',
		'menu_title'	=> 'faq',
		'parent_slug'	=> 'edit.php?post_type=faq',
	));
	acf_add_options_sub_page(array(
		'page_title' 	=> 'casestudy',
		'menu_title'	=> 'casestudy',
		'parent_slug'	=> 'edit.php?post_type=casestudy',
	));
}
