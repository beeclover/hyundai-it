interface ImgProps {
  src: string
  isSet?: boolean
  [x: string]: any
}
/**
 * image set component 동일한 이름을 가진 srcSet을 가진 이미지를 렌더링한다.
 * @param {string} src 이미지 경로
 * @param {boolean} [isSet] 이미지가 set인지 여부
 * @param {boolean} [isWebp] webp 이미지를 사용할지 여부
 * @returns {JSX.Element}
 *   <picture>
 *    <img src="name" srcSet="name@2x 2x, name@3x 3x" alt="" {...props} />
 *   </picture>
 */
export const Img: React.FC<ImgProps> = ({ src, isSet, ...props }) => {
  const paths = src.split('/')
  let path = paths.slice(0, -1).join('/')
  const file = paths[paths.length - 1]
  const ext = /\.(?:.(?!\.))+$/.exec(file)![0]
  const name = file.replace(ext, '')
  const isWebp = /webp/.test(ext)

  if (isSet)
    return (
      <picture>
        {isWebp && (
          <source
            type="image/webp"
            srcSet={`${path}/${name}.webp 1x, ${path}/${name}@2x.webp 2x, ${path}/${name}@3x.webp 3x`}
          />
        )}
        <source
          type="image/png"
          srcSet={`${path}/${name}${ext} 1x, ${path}/${name}@2x${ext} 2x, ${path}/${name}@3x${ext} 3x`}
        />
        <img src={`${path}/${name}${ext}`} alt="" loading="lazy" {...props} />
      </picture>
    )
  else
    return (
      <picture>
        {isWebp && <source srcSet={`${path}/${name}.webp`} type="image/webp" />}
        <img src={`${path}/${name}${ext}`} alt="" {...props} />
      </picture>
    )
}

// ==============================
// 사용하는 환경이 특수한 환경이라
// 아래처럼 path를 추가해주었다.
// ==============================

/**
 * image set component 동일한 이름을 가진 srcSet을 가진 이미지를 렌더링한다.
 * @param {string} src 이미지 경로
 * @param {boolean} [isSet] 이미지가 set인지 여부
 * @param {boolean} [isWebp] webp 이미지를 사용할지 여부
 * @returns {JSX.Element}
 * ```tsx
 * <picture>
 *  <img src="name" srcSet="name@2x 2x, name@3x 3x" alt="" {...props} />
 * </picture>
 * ```
 */
const OImg: React.FC<ImgProps> = ({ src, ...props }) => {
  const path =
    process.env.NODE_ENV === 'development'
      ? ''
      : process.env.PUBLIC_URL
  return <Img src={path + src} {...props} />
}

export default OImg