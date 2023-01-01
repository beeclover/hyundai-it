<?php

namespace App\View\Components;

use Roots\Acorn\View\Component;

class Img extends Component
{
  /**
   * the webp image
   *
   * @var boolean
   */
  public $isWebp;

  /**
   * the png image
   *
   * @var public
   */
  public $isSet;

  public $src;
  public $alt;
  public $class;
  public $sources = [];

  /**
   * Create the component instance.
   *
   * @param  string  $type
   * @param  string  $message
   * @return void
   */
  public function __construct($src = '', $alt = '', $isSet = false, $class = '')
  {
    $this->isSet = $isSet;
    $this->src = $src;
    $this->alt = $alt;
    $this->class = $class;
    $this->srcDisintegration();
  }

  // png를 받을때는 isSet을 확인하여 picture를 사용할지 아닌지 결정한다.
  // webp를 받을때는 png를 src로 설정하고 webp를 picture의 source로 넣는다.
  // jpg를 받을때는 isSet을 확인하여 picture를 사용할지 아닌지 결정한다.

  public function srcDisintegration()
  {
    $src = explode('.', $this->src);
    $ext = $src[count($src) - 1];
    if ($ext === 'png') {
      array_push($this->sources, $this->srcSet($this->src));
    }
    if ($ext === 'webp') {
      // webp sources 추가
      array_push($this->sources, $this->srcSet($this->src));
      // png sources 추가
      array_push(
        $this->sources,
        $this->srcSet(str_replace('.webp', '.png', $this->src))
      );

      $this->src = str_replace('.webp', '.png', $this->src);
      $this->src = asset($this->src)->uri();
    }
  }

  /**
   * Get the view / contents that represent the component.
   *
   * @return \Illuminate\View\View|string
   */
  public function render()
  {
    return $this->view('components.img');
  }

  /**
   * src를 분해한다.
   *
   * @return void
   */

  public function srcSet($src)
  {
    // TODO: 확장자를 나누는 `.` 말고 이름에 `.`이 들어가는 경우를 고려해야 한다.
    $src = explode('.', $src);
    $path = $src[0];
    $ext = $src[1];

    if ($this->isSet) {
      $x1 = asset("{$path}.{$ext}")->uri();
      $x2 = asset("{$path}@2x.{$ext}")->uri();
      $x3 = asset("{$path}@3x.{$ext}")->uri();
      return [
        'srcset' => "{$x1} 1x, {$x2} 2x, {$x3} 3x",
        'type' => "image/{$ext}",
      ];
    } else {
      return [
        'srcset' => asset("{$path}.{$ext}")->uri(),
        'type' => "image/{$ext}",
      ];
    }
  }
}
