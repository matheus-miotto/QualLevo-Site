import scale from "lucide-static/icons/scale.svg?raw";
import shoppingCart from "lucide-static/icons/shopping-cart.svg?raw";
import scanBarcode from "lucide-static/icons/scan-barcode.svg?raw";
import history from "lucide-static/icons/history.svg?raw";
import listChecks from "lucide-static/icons/list-checks.svg?raw";
import piggyBank from "lucide-static/icons/piggy-bank.svg?raw";
import smartphone from "lucide-static/icons/smartphone.svg?raw";
import userX from "lucide-static/icons/user-x.svg?raw";
import wifiOff from "lucide-static/icons/wifi-off.svg?raw";
import chevronDown from "lucide-static/icons/chevron-down.svg?raw";
import menu from "lucide-static/icons/menu.svg?raw";
import x from "lucide-static/icons/x.svg?raw";
import sun from "lucide-static/icons/sun.svg?raw";
import moon from "lucide-static/icons/moon.svg?raw";
import monitor from "lucide-static/icons/monitor.svg?raw";

/**
 * Registro central dos ícones utilizados no site (biblioteca Lucide,
 * importados como SVG puro — sem dependência de JavaScript em runtime).
 * Adicionar novos ícones aqui antes de usá-los no componente Icon.
 */
export const ICONS = {
  scale,
  "shopping-cart": shoppingCart,
  "scan-barcode": scanBarcode,
  history,
  "list-checks": listChecks,
  "piggy-bank": piggyBank,
  smartphone,
  "user-x": userX,
  "wifi-off": wifiOff,
  "chevron-down": chevronDown,
  menu,
  x,
  sun,
  moon,
  monitor,
} as const;

export type IconName = keyof typeof ICONS;
