import "./Button.css";
import React, { useState, useEffect } from "react";
import { CriticalButton } from "@gjensidige/core-components/lib/buttons/critical-button";

const Button = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("Click me");
  const [isLoading, setIsLoading] = useState(false);


  const handleClick = () => {
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false);
    }, 200);
    setCount(count + 1);
    setText("Clicked");
  };

  useEffect(() => {
    if (count >= 3) {
      setText("chill out");
    }
    if (count >= 6) {
      setText("You're clicking too much");
    } if (count >= 10) {
      setText("MAXIMUM CLICKS REACHED");
    }
  }, [count]);

  return (
    <div>
      <CriticalButton 
      onClick={handleClick}
      disabled={count >= 10}
      loading={isLoading}
      >
        {text} {count}
      </CriticalButton>
    </div>
  );
};

export default Button;
