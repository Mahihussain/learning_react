import React from "react";
import { Suspense } from "react";
export default function (Component) {
  return (props) => (
    <Suspense fallback={<div>Loading...</div>}>
      <Component {...props} />
    </Suspense>
  );
}
