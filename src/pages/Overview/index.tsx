import { StrictMode } from "react";
import { Outlet } from "react-router-dom";

export default function Overview () {
  return (
    <StrictMode>
      <Outlet />
    </StrictMode>
  );
}