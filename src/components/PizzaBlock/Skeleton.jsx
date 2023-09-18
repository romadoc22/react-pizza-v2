import React from 'react';
import ContentLoader from 'react-content-loader';

const Skeleton = () => (
  <ContentLoader
    className="pizza-block"
    speed={2}
    width={280}
    height={500}
    viewBox="0 0 280 500"
    backgroundColor="#f2eded"
    foregroundColor="#ebeaea">
    <circle cx="145" cy="98" r="93" />
    <rect x="0" y="195" rx="10" ry="10" width="331" height="23" />
    <rect x="0" y="241" rx="10" ry="10" width="290" height="73" />
    <rect x="0" y="341" rx="10" ry="10" width="95" height="30" />
    <rect x="125" y="335" rx="25" ry="25" width="152" height="45" />
  </ContentLoader>
);

export default Skeleton;
