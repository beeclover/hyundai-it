<?php

namespace App\View\Components;

use Roots\Acorn\View\Component;

class PageHeader extends Component
{

    public $parent_menu;
    public $title;
    public $post_type;

  /**
   * Create the component instance.
   *
   * @param  string  $type
   * @param  string  $message
   * @return void
   */
  public function __construct($parentMenu = '', $title = '', $postType = '')
  {
        $this->parent_menu = $parentMenu;
        $this->title = $title;
        $this->post_type = $postType;
  }

  public function render()
  {
      return $this->view('components.page-header');
  }
}
