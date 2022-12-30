<?php

namespace App\View\Components;

use Roots\Acorn\View\Component;

class PageHeader extends Component
{

    public $parent_menu;
    public $title;

  /**
   * Create the component instance.
   *
   * @param  string  $type
   * @param  string  $message
   * @return void
   */
  public function __construct($parentMenu = '', $title = '')
  {
        $this->parent_menu = $parentMenu;
        $this->title = $title;
  }

  public function render()
  {
      return $this->view('components.page-header');
  }
}