function panTo(map, lat, lng) {
  // 이동할 위도 경도 위치를 생성합니다
  var moveLatLon = new kakao.maps.LatLng(lat, lng);

  // 지도 중심을 부드럽게 이동시킵니다
  // 만약 이동할 거리가 지도 화면보다 크면 부드러운 효과 없이 이동합니다
  map.panTo(moveLatLon);
}

/**
 *
 * @param target 지도를 표시한 DIV
 * @param lat 지도의 중심좌표
 * @param lng 지도의 중심좌표
 * @param label 마커의 라벨
 */
function drawMap(target: HTMLElement, lat: number, lng: number, label: string) {

  var map = new kakao.maps.Map(target, {
    center: new kakao.maps.LatLng(lat, lng), // 지도의 중심좌표
    level: 3, // 지도의 확대 레벨
    draggable: false,
  }); // 지도를 생성합니다

  // 커스텀 오버레이에 표시할 내용입니다
  // HTML 문자열 또는 Dom Element 입니다
  var content = `
    <div class ="bg-white rounded-full pl-[6px] pr-[12px] py-[4px] flex items-center border border-blue-600 gap-x-[8px]">
      <div class="bg-blue-600 rounded-full w-[24px] h-[24px] text-white flex justify-center items-center">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-[1em] h-[1em]">
          <path fill-rule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd" />
        </svg>
      </div>
      <span class="text-[14px] font-semibold">${label}</span>
    </div>`;

  // 커스텀 오버레이를 생성합니다
  var customOverlay = new kakao.maps.CustomOverlay({
    // 지도 중심좌표에 마커를 생성합니다
    position: map.getCenter(),
    content: content
  });

  // 커스텀 오버레이를 지도에 표시합니다
  customOverlay.setMap(map);
}

/**
 *
 * @param target 지도를 표시한 DIV
 * @param lat 지도의 중심좌표
 * @param lng 지도의 중심좌표
 * @param label 마커의 라벨
 */
function drawMap2(target: HTMLElement, lat: number, lng: number, label: string) {

  var map = new kakao.maps.Map(target, {
    center: new kakao.maps.LatLng(lat, lng), // 지도의 중심좌표
    level: 4, // 지도의 확대 레벨
    draggable: false,
  }); // 지도를 생성합니다

  // 커스텀 오버레이에 표시할 내용입니다
  // HTML 문자열 또는 Dom Element 입니다
  var content = `
    <div class ="bg-white rounded-full pl-[6px] pr-[12px] py-[4px] flex items-center border border-blue-600 gap-x-[8px]">
      <div class="bg-blue-600 rounded-full w-[24px] h-[24px] text-white flex justify-center items-center">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-[1em] h-[1em]">
          <path fill-rule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd" />
        </svg>
      </div>
      <span class="text-[14px] font-semibold">${label}</span>
    </div>`;

  // 커스텀 오버레이를 생성합니다
  var customOverlay = new kakao.maps.CustomOverlay({
    // 지도 중심좌표에 마커를 생성합니다
    position: map.getCenter(),
    content: content
  });

  // 커스텀 오버레이를 지도에 표시합니다
  customOverlay.setMap(map);
  panTo(map, lat + 0.0025, lng);
}


export default {
  init() {
    drawMap(document.getElementById('kakao_map'), 37.5507989598659, 127.174104292142, '현대아이티');
    drawMap2(
      document.getElementById('kakao_map_2'), 36.1664963306625, 128.251163572829, '경상북도 김천시 아포읍 아포공단길 106'
    );
  },
  finalize() {
    // JavaScript to be fired on all pages, after page specific JS is fired
  },
};
