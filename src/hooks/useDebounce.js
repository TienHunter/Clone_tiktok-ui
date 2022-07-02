import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';

function useDebounce(value, delay) {
   const [debounceValue, setDebounceValue] = useState(value);

   useEffect(() => {
      const hanlder = setTimeout(() => {
         setDebounceValue(value);
      }, delay);

      return () => clearTimeout(hanlder);
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [value]);
   return debounceValue;
}
useDebounce.propTypes = {
   value: PropTypes.string,
   delay: PropTypes.number,
};
export default useDebounce;
