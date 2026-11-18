import type { FaqEntry } from "./home-content";

/** Perguntas frequentes da página de Suporte. */
export const SUPPORT_FAQ: FaqEntry[] = [
  {
    question: "Como o Qual Levo? decide qual embalagem compensa?",
    answer:
      "O app divide o preço pela quantidade e converte tudo para a mesma unidade (kg, litro, metro ou unidade). Assim dá para comparar, por exemplo, 500 g com 2 kg ou 900 ml com 1,5 L. Quando a opção mais barata é a maior embalagem, o app avisa quanto dela você precisa usar para valer a pena.",
  },
  {
    question: "O app funciona sem internet?",
    answer:
      "Sim. Comparar preços, montar listas, usar o carrinho e consultar a base de produtos embutida funcionam offline. A internet só é usada para procurar um código de barras que não está na base e para exibir anúncios.",
  },
  {
    question: "Li um código de barras e o produto não apareceu. E agora?",
    answer:
      "A base usa dados públicos e gratuitos do Open Food Facts e ainda não tem todos os produtos, principalmente marcas regionais. Quando não encontra, o app avisa e você pode cadastrar o produto em poucos segundos. Ele fica salvo no seu celular para as próximas compras.",
  },
  {
    question: "Preciso criar uma conta?",
    answer: "Não. O Qual Levo? não tem cadastro nem login.",
  },
  {
    question: "Como faço backup ou troco de celular?",
    answer:
      "Na aba Produtos, use Exportar backup para gerar um arquivo com todos os seus dados e guarde onde preferir. No celular novo, use Importar backup com esse arquivo.",
  },
  {
    question: "Por que o app mostra anúncios?",
    answer:
      "O Qual Levo? é gratuito, e um banner discreto no rodapé ajuda a manter o app. Você pode rever o consentimento de anúncios personalizados na aba Produtos.",
  },
  {
    question: "Tem versão para Android?",
    answer:
      "O app chega primeiro ao iPhone. A versão para Android está prevista para depois.",
  },
];
