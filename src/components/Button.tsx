import React from "react";
import { Button } from "@mantine/core";

async function handleClick() {
  try {
    console.log("clicked Button");
    var url = `https://example.com`;
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

export const CustomButton = () => {
  return (
    <Button variant="white" size="md" onClick={handleClick}>
      Click me!
    </Button>
  );
};
