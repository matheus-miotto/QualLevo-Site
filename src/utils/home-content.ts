import type { IconName } from "./icons";

/**
 * Conteúdo textual da Home, separado dos componentes visuais para
 * permitir ajustes futuros (textos, ícones) sem tocar em markup ou estilo.
 */
export interface Feature {
  icon: IconName;
  title: string;
  description: string;
}

export const FEATURES: Feature[] = [
  {
    icon: "scale",
    title: "Compare o preço por quilo",
    description:
      "Digite preço e tamanho de duas ou mais embalagens e veja na hora qual sai mais barata por kg, litro, metro ou unidade.",
  },
  {
    icon: "scan-barcode",
    title: "Leia o código de barras",
    description:
      "Aponte a câmera e o produto aparece com nome e tamanho, de uma base com mais de 23 mil itens que funciona sem internet.",
  },
  {
    icon: "list-checks",
    title: "Listas com o último preço",
    description:
      "Monte a lista do mercado e veja quanto pagou da última vez, em qual mercado e quando.",
  },
  {
    icon: "shopping-cart",
    title: "Carrinho com total na hora",
    description:
      "Marque os itens enquanto compra e acompanhe o total e o orçamento antes de chegar ao caixa.",
  },
  {
    icon: "piggy-bank",
    title: "Previsão de gasto",
    description:
      "Antes de sair de casa, veja uma estimativa de quanto a lista vai custar, com base nos seus preços anteriores.",
  },
  {
    icon: "history",
    title: "Histórico de preços",
    description:
      "Veja como o preço de cada produto mudou e em qual mercado ele costuma sair mais em conta.",
  },
];

export interface TrustPoint {
  icon: IconName;
  label: string;
}

/** Fatos curtos exibidos no Hero, junto da mensagem principal. */
export const TRUST_POINTS: TrustPoint[] = [
  { icon: "smartphone", label: "Seus dados ficam no seu celular" },
  { icon: "user-x", label: "Sem criar conta" },
  { icon: "wifi-off", label: "Funciona sem internet" },
];

export interface FaqEntry {
  question: string;
  answer: string;
}
