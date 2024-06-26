import React from "react";
import { Button } from "flowbite-react";
import { AiFillGoogleCircle } from "react-icons/ai";
export default function OAuth() {
  const handleGoogleClick = async () => {};
  return (
    <Button
      type="button"
      gradientDuoTone="greenToBlue"
      outline
      onClick={handleGoogleClick}
    >
      <AiFillGoogleCircle className="w-6 h-6 mr-2" />
      Continue with Google
    </Button>
  );
}
