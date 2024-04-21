import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import "../LoadingContact/loading.css";
import React from "react";

function Loading() {
  return Array(8)
    .fill({})
    .map((e, index) => {
      return (
        <SkeletonTheme
          key={index}
          baseColor=" #172a46"
          highlightColor="#1f314d"
        >
          <div>
            <Skeleton height={123} borderRadius={16} />
          </div>
        </SkeletonTheme>
      );
    });
}

export default Loading;
