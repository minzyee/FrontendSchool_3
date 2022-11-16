// module.css를 사용하면 class명에 고유값을 추가해주어서 겹치지 않도록 한다.
import React from "react";
import "./test.css";

const Test = () => {
  return (
    <section>
      <h2>hello world</h2>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus, nemo!</p>
    </section>
  );
};

export default Test;