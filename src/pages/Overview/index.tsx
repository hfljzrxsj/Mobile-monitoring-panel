import Menu from "@/components/Menu";
import { Paper } from "@mui/material";
import { StrictMode } from "react";
import style from './_index.module.scss';
const commonProps = { elevation: 24, className: style['Paper'] ?? '' };
export default function Overview () {
  return (
    <StrictMode>
      <Paper {...commonProps}>移动监控面板</Paper>
      <Paper {...commonProps}><Menu /></Paper>
    </StrictMode>
  );
}