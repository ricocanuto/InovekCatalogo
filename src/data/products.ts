import { productImage } from "../assets/media";

const premiumImage = productImage("03-espelho-led-premium", "03-espelho-led-premium.jpeg");
const mobileImage = productImage("02-espelho-movel", "02-espelho-movel.jpeg");
const decorativeImage = productImage("04-espelho-led-decorativo", "04-espelho-led-decorativo.jpeg");
const illuminatedImage = productImage("01-espelho-iluminado", "01-espelho-iluminado.jpeg");
const barberImage = productImage("06-espelho-barbearia", "06-espelho-barbearia.jpeg");
const professionalImage = productImage("07-espelho-profissional", "07-espelho-profissional.jpeg");
const fixationImage = productImage("05-sistema-fixacao", "05-sistema-fixacao.jpeg");

export type Category = "Espelhos LED" | "Profissionais" | "Decorativos" | "Fixação";

export interface Product {
  id: string;
  code: string;
  name: string;
  category: Category;
  tag: string;
  image: string;
  imageIsOriginal: boolean;
  alt: string;
  description: string;
  features: string[];
  specs: Array<{ label: string; value: string }>;
}

export const categories: Array<"Todos os itens" | Category> = [
  "Todos os itens",
  "Espelhos LED",
  "Profissionais",
  "Decorativos",
  "Fixação",
];

// As referências INK são temporárias até a INOVEK confirmar os códigos comerciais.
export const products: Product[] = [
  {
    id: "espelho-led-premium",
    code: "INK-ESP-01",
    name: "Espelho LED Premium",
    category: "Espelhos LED",
    tag: "Premium",
    image: premiumImage.src,
    imageIsOriginal: premiumImage.isOriginal,
    alt: "Espelho LED quadrado iluminado em ambiente de penteadeira",
    description:
      "Espelho com iluminação perimetral em LED e borda de alumínio para banheiros, penteadeiras, quartos e salões.",
    features: ["Acabamento de alto padrão", "Personalizável em medidas e cores"],
    specs: [
      { label: "Borda", value: "Alumínio" },
      { label: "Iluminação", value: "LED perimetral" },
      { label: "Acionamento", value: "Interruptor" },
      { label: "Tons de luz", value: "Frio (6000K), neutro (4000K) ou quente (3000K)" },
    ],
  },
  {
    id: "espelho-movel-iluminado",
    code: "INK-PRO-01",
    name: "Espelho Móvel Iluminado",
    category: "Profissionais",
    tag: "Móvel",
    image: mobileImage.src,
    imageIsOriginal: mobileImage.isOriginal,
    alt: "Espelho iluminado de corpo inteiro com estrutura móvel sobre rodinhas",
    description:
      "Solução versátil para salões e estúdios, com estrutura em alumínio e mobilidade para o dia a dia.",
    features: ["Mobilidade para o dia a dia", "Acabamento de alto padrão"],
    specs: [
      { label: "Estrutura", value: "Alumínio" },
      { label: "Mobilidade", value: "Rodinhas com freio" },
      { label: "Iluminação", value: "LED personalizável" },
      { label: "Indicação", value: "Salões, estúdios e espaços de maquiagem" },
    ],
  },
  {
    id: "espelho-decorativo",
    code: "INK-DEC-01",
    name: "Espelho Decorativo",
    category: "Decorativos",
    tag: "Decorativo",
    image: decorativeImage.src,
    imageIsOriginal: decorativeImage.isOriginal,
    alt: "Espelho decorativo curvo com iluminação indireta sobre painel amadeirado",
    description:
      "Espelho de formato marcante com iluminação indireta, pensado para valorizar ambientes residenciais e comerciais.",
    features: ["Design para valorizar ambientes", "Acabamento de alto padrão"],
    specs: [
      { label: "Formato", value: "Decorativo, de desenho curvo" },
      { label: "Iluminação", value: "LED indireto (neutro)" },
      { label: "Borda", value: "Alumínio" },
      { label: "Acabamento", value: "Sob consulta" },
    ],
  },
  {
    id: "espelho-iluminado",
    code: "INK-ESP-02",
    name: "Espelho Iluminado",
    category: "Espelhos LED",
    tag: "Iluminado",
    image: illuminatedImage.src,
    imageIsOriginal: illuminatedImage.isOriginal,
    alt: "Espelho retangular iluminado acima de bancada de banheiro",
    description:
      "Espelho com LED e borda de alumínio, ideal para banheiros, lavabos e projetos personalizados.",
    features: ["Design para banheiros e lavabos", "Acabamento resistente"],
    specs: [
      { label: "Borda", value: "Alumínio com pintura eletrostática" },
      { label: "Acionamento", value: "Touch ou interruptor" },
      { label: "Tons de luz", value: "Frio (6000K), neutro (4000K) ou quente (3000K)" },
    ],
  },
  {
    id: "espelho-para-barbearia",
    code: "INK-PRO-02",
    name: "Espelho para Barbearia",
    category: "Profissionais",
    tag: "Barbearia",
    image: barberImage.src,
    imageIsOriginal: barberImage.isOriginal,
    alt: "Conjunto de espelhos arqueados com LED em uma barbearia",
    description:
      "Espelho profissional com iluminação integrada para compor a identidade de barbearias e espaços de beleza.",
    features: ["Personalização com logotipo", "Indicado para espaços profissionais"],
    specs: [
      { label: "Borda", value: "Alumínio" },
      { label: "Iluminação", value: "LED branco, neutro ou quente" },
      { label: "Acabamentos", value: "Preto, prata, dourado ou branco sob consulta" },
      { label: "Personalização", value: "Logotipo, cores e medidas sob consulta" },
    ],
  },
  {
    id: "espelho-profissional-led",
    code: "INK-PRO-03",
    name: "Espelho Profissional com LED",
    category: "Profissionais",
    tag: "Profissional",
    image: professionalImage.src,
    imageIsOriginal: professionalImage.isOriginal,
    alt: "Espelhos verticais com iluminação LED em um salão de beleza",
    description:
      "Modelo vertical para salões, barbearias e estúdios, com borda lateral de alumínio e LED integrado.",
    features: ["Design moderno", "Acabamento de alto padrão"],
    specs: [
      { label: "Borda lateral", value: "Alumínio" },
      { label: "Iluminação", value: "LED integrado" },
      { label: "Indicação", value: "Salões, barbearias e estúdios de beleza" },
    ],
  },
  {
    id: "sistema-fixacao-led",
    code: "INK-FIX-01",
    name: "Sistema de Fixação para Espelhos com LED",
    category: "Fixação",
    tag: "Fixação",
    image: fixationImage.src,
    imageIsOriginal: fixationImage.isOriginal,
    alt: "Detalhe de encaixe metálico e parafuso para fixação de espelho LED",
    description:
      "Solução de montagem para espelhos com LED, com encaixe prático e estrutura de alumínio.",
    features: ["Instalação prática e rápida", "Fixação segura e resistente"],
    specs: [
      { label: "Aplicação", value: "Espelhos com LED" },
      { label: "Estrutura", value: "Alumínio" },
      { label: "Fixador", value: "Parafuso zincado incluso" },
      { label: "Sistema", value: "Encaixe prático" },
    ],
  },
];

export function getProduct(id: string | null): Product | undefined {
  return products.find((product) => product.id === id);
}