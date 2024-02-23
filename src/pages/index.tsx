import { testLogin } from "@/actions";
import { Authorization } from "@/actions/axios_instance";
import ButtonAppBar from "@/components/AppBar";
import Menu from "@/components/Menu";
import { pathString } from "@/Route";
import { useMount } from "ahooks";
import { StrictMode, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";

export default function MainFrame () {
  const navigate = useNavigate();
  useMount(() => {
    // testLogin().then(e => {
    //   if (!e) {
    //     navigate(pathString.login);
    //   }
    // });
    // if (!localStorage.getItem(JWT)) navigate(pathString.login);
  });
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <StrictMode>
      <ButtonAppBar menuOpenTrue={setMenuOpen.bind(null, true)} />
      <Menu menuOpen={menuOpen} menuOpenFalse={setMenuOpen.bind(null, false)} />
      <Outlet />
    </StrictMode>
  );
}