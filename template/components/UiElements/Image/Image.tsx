import React from 'react';
import Img from 'react-image';

const Placeholder = () => (
  <img
    src={require('../../../../public/images/placeholder.jpg')}
    alt="product img loader"
  />
);

export default function Image({
  url,
  alt = 'placeholder',
  className,
  style,
}: {
  url?: string | [string];
  alt?: string;
  className?: string;
  style?: any;
}) {
  return (
    // @ts-ignore
    <Img
      draggable={false}
      style={style}
      src={url}
      alt={alt}
      loader={<Placeholder />}
      unloader={<Placeholder />}
      className={className}
    />
  );
}
