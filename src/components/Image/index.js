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
   console.log(fallback);
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

export default forwardRef(Image);
