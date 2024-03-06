import Menu from "@/components/Menu";
import { Paper } from "@mui/material";
import { StrictMode } from "react";
import style from './_index.module.scss';
const commonProps = { elevation: 24, className: style['Paper'] ?? '' };
export default function Overview () {
  return (
    <StrictMode>
      <Paper {...commonProps}>H5终端营销活动监控看板</Paper>
      <Paper {...commonProps}><Menu /></Paper>
    </StrictMode>
  );
}