import { adminIdString, Authorization, getLevel, getLocalStorageFromJSON, orgId } from "@/actions/axios_instance";
import ButtonAppBar from "@/components/AppBar";
import { pathString } from "@/Route";
import { useMount } from "ahooks";
import { StrictMode } from "react";
import { Outlet, useNavigate } from "react-router-dom";

export default function MainFrame () {
  const navigate = useNavigate();
  useMount(() => {
    // testLogin().then(e => {
    //   if (!e) {
    //     navigate(pathString.login);
    //   }
    // });
    if (!localStorage.getItem(Authorization) || !getLevel() || !getLocalStorageFromJSON(orgId) || !getLocalStorageFromJSON(adminIdString)) navigate(pathString.login);
  });
  return (
    <StrictMode>
      <ButtonAppBar />
      <Outlet />
    </StrictMode>
  );
}