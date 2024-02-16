import { testLogin } from "@/actions";
import { useMount } from "ahooks";
import { StrictMode } from "react";
import { Outlet } from "react-router-dom";

export default function Overview () {
  useMount(() => {
    testLogin().then(e => {
      console.log(e);
      // if (!e) {
      //   navigate(pathString.login);
      // }
    });
  });
  return (
    <StrictMode>
      <Outlet />
    </StrictMode>
  );
}