import ButtonAppBar from "@/components/AppBar";
import Menu from "@/components/Menu";
import { StrictMode, useState } from "react";
import { Outlet } from "react-router-dom";

export default function MainFrame () {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <StrictMode>
      <ButtonAppBar menuOpenTrue={setMenuOpen.bind(null, true)} />
      <Menu menuOpen={menuOpen} menuOpenFalse={setMenuOpen.bind(null, false)} />
      <Outlet />
    </StrictMode>
  );
}