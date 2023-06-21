import React from 'react';
import ContentLoader from 'react-content-loader';

const Skeleton = (props) => (
  <ContentLoader
    speed={2}
    width={280}
    height={500}
    viewBox="0 0 250 500"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="247" y="76" rx="0" ry="0" width="104" height="0" />
    <rect x="409" y="493" rx="0" ry="0" width="269" height="95" />
    <rect x="104" y="249" rx="0" ry="0" width="0" height="1" />
    <rect x="115" y="442" rx="0" ry="0" width="0" height="1" />
    <rect x="124" y="297" rx="0" ry="0" width="2" height="0" />
    <rect x="122" y="303" rx="0" ry="0" width="0" height="1" />
    <rect x="17" y="11" rx="20" ry="20" width="198" height="251" />
    <rect x="79" y="295" rx="0" ry="0" width="1" height="0" />
    <rect x="21" y="274" rx="14" ry="14" width="156" height="58" />
    <rect x="108" y="310" rx="0" ry="0" width="1" height="0" />
    <rect x="21" y="374" rx="8" ry="8" width="90" height="27" />
    <rect x="71" y="364" rx="0" ry="0" width="1" height="0" />
    <rect x="235" y="469" rx="0" ry="0" width="1" height="0" />
    <circle cx="195" cy="384" r="31" />
  </ContentLoader>
);

export default Skeleton;
