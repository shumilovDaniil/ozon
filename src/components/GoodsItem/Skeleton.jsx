import React from "react";
import ContentLoader from "react-content-loader";

const Skeleton = (props) => (
  <ContentLoader
    speed={2}
    width={216}
    height={360}
    viewBox="0 0 216 360"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="86" y="143" rx="0" ry="0" width="0" height="33" />
    <rect x="0" y="0" rx="6" ry="6" width="216" height="200" />
    <rect x="-3" y="239" rx="6" ry="6" width="216" height="39" />
    <rect x="-3" y="213" rx="6" ry="6" width="79" height="17" />
    <rect x="89" y="213" rx="6" ry="6" width="63" height="17" />
    <rect x="0" y="287" rx="6" ry="6" width="110" height="33" />
  </ContentLoader>
);

export default Skeleton;