import { useState } from 'react'

const Images = (props) => {
  const { src, notFoundSrc, ...imageAttributes } = props
  const [imgSrc, setImgSrc] = useState(src)
  return (
    <img
      {...imageAttributes}
      src={imgSrc || notFoundSrc}
      onError={() => { setImgSrc(notFoundSrc) }}
    />
  )
}
export default Images
