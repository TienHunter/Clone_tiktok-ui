import PropTypes from 'prop-types';
import { useState, forwardRef } from 'react';
import images from '~/assets/image';
function Image(
   { src, alt, className, fallback: customFallback = images.noImage, ...props },
   ref,
) {
   // console.log(images.noImage);
   const [fallback, setFallback] = useState('');
   const hanleError = () => {
      setFallback(customFallback);
   };
   // console.log(src);
   // console.log(fallback);
   // console.log(customFallback);
   return (
      <img
         src={fallback || src}
         alt={alt}
         {...props}
         ref={ref}
         onError={hanleError}
         className={className}
         style={{ overflow: 'hidden' }}
      />
   );
}
Image.propTypes = {
   src: PropTypes.string,
   alt: PropTypes.string,
   className: PropTypes.string,
   fallback: PropTypes.string,
};
export default forwardRef(Image);
