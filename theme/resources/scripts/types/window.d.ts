export { };

declare global {
  interface Window {
    kakao: import('kakao.maps.d.ts').default;
  }
}
