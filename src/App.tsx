import { useMemo } from "react";
import type {} from "styled-jsx";
import { FEE_COLLECTOR, FEE_TENTH_BPS, PARTNER_ID } from "./config";
import { theme, FontFamily } from "./theme";

export const StargateWidget = ({ theme }) => {
  const jsonTheme = useMemo(() => JSON.stringify(theme), [theme]);
  return (
    <div>
      <style jsx global>{`
        .MuiScopedCssBaseline-root {
          background-color: transparent !important;
        }
        .StgHeader {
          border-bottom: 1px solid ${theme.palette.divider} !important;
        }
        .StgHeader .MuiTypography-subtitle1 {
          font-family: ${FontFamily.ROBOTO};
          font-weight: 600;
        }
        .MuiScopedCssBaseline-root .StgMaxButton {
          border-color: ${theme.palette.primary.main} !important;
          background-color: transparent;
          font-family: ${FontFamily.ROBOTO};
          padding: 11px 16px;
          font-size: 13px;
        }
        .MuiFormLabel-root.Mui-focused {
          color: ${theme.palette.text.primary} !important;
        }
      `}</style>
      {/* @ts-ignore */}
      <stargate-widget theme={jsonTheme} />
    </div>
  );
};

export default function App() {
  return (
    <div className="App">
      <StargateWidget theme={theme} />
    </div>
  );
}
