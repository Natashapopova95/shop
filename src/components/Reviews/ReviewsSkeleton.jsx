import React from 'react';
import ContentLoader from 'react-content-loader';

const ReviewsSkeleton = (props) => (
  <ContentLoader
    speed={2}
    width={425}
    height={500}
    viewBox="0 0 370 420"
    backgroundColor="#f2eeee"
    foregroundColor="#fffafa"
    {...props}
  >
    <rect x="117" y="274" rx="0" ry="0" width="188" height="0" />
    <rect x="22" y="13" rx="0" ry="0" width="0" height="8" />
    <rect x="352" y="382" rx="0" ry="0" width="3" height="10" />
    <rect x="17" y="6" rx="20" ry="20" width="300" height="400" />
  </ContentLoader>
);

export default ReviewsSkeleton;
