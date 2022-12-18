// https://tailwindcss.com/docs/configuration
module.exports = {
  content: ['./index.php', './app/**/*.php', './resources/**/*.{php,vue,js}'],
  theme: {
    extend: {
      container: {
        center: true,
        padding: '20px',
      },
      fontFamily: {
        ng: ['niveau-grotesk'],
        pretendard: [
          '-apple-system',
          'BlinkMacSystemFont',
          'Apple SD Gothic Neo',
          'Pretendard Variable',
          'Pretendard',
          'Roboto',
          'Noto Sans KR',
          'Segoe UI',
          'Malgun Gothic',
          'Apple Color Emoji',
          'Segoe UI Emoji',
          'Segoe UI Symbol',
          'sans-serif',
        ],
      },
    },
  },
  plugins: [],
}
