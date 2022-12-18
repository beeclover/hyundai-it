<?php

namespace App\View\Components;

use Roots\Acorn\View\Component;

class Logo extends Component
{
  public $class;

  /**
   * Create the component instance.
   *
   * @param  string  $type
   * @param  string  $message
   * @return void
   */
  public function __construct($class = '')
  {
    $this->class = $class;
  }


  /**
   * Get the view / contents that represent the component.
   *
   * @return \Illuminate\View\View|string
   */
  public function render()
  {
    return $this->view('components.logo');
  }
}
