import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import "../LoadingPortfilo/loading.css";
import React from "react";

function Loading() {
  return Array(9)
    .fill({})
    .map((e, index) => {
      return (
        <SkeletonTheme
          key={index}
          baseColor=" #172a46"
          highlightColor="#1f314d"
        >
          <div className="card nonebg">
            <Skeleton height={245} />
          </div>
        </SkeletonTheme>
      );
    });
}

export default Loading;
