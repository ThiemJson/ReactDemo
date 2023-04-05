import React, { Fragment, useState } from "react";

const Portal = () => {
  const firstName = "Tuan";
  const lastName = "Evondev";
  const [on, setOn] = useState(true);

  return (
    <Fragment>
      <div className="fixed inset-0 bg-opacity-50 z-50">
        <div className="w-full max-w-[350px] mx-auto bg-white p-10 rounded-lg"></div>
      </div>

      <div className="relative z-30">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus
        molestiae, in voluptates dolorum officiis doloremque non aperiam.
        Dolores dignissimos officia culpa error fugiat dolor magni, doloribus
        voluptatem enim at eaque.
      </div>
    </Fragment>
  );
};

export default Portal;
