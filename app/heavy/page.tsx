"use client";
import { useState } from "react";
import dynamic from "next/dynamic"; // lazy loading. only for large component
const HeavyComponent = dynamic(() => import("../components/HeavyComponent"), {
  ssr: false, // server-side rendering -> disable pre-render in server
  loading: () => <div>Loading...</div>,
});

const HeavyPage = () => {
  const [visible, setVisibility] = useState(false);
  return (
    <>
      <button className="btn btn-primary" onClick={() => setVisibility(true)}>
        Show
      </button>
      {visible && <HeavyComponent />}
      <button
        className="btn btn-success mt-3 block"
        onClick={async () => {
          const _ = (await import("lodash")).default; // not included in bundle ahead of time
          const users = [{ name: "b" }, { name: "a" }, , { name: "c" }];
          const sorted = _.orderBy(users, ["name"]);
          console.log(sorted);
        }}
      >
        Sort
      </button>
    </>
  );
};

export default HeavyPage;
