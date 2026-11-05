import type { Product } from "../data/products";

export const whatsappNumber = "5513974077944";
export const whatsappDisplay = "+55 (13) 97407-7944";

export function whatsappProductUrl(product: Product): string {
  const text = `Olá, equipe INOVEK! Tenho interesse no produto ${product.name}. Poderiam me informar medidas, acabamentos e condições para fornecedores?`;
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;
}

export function whatsappGeneralUrl(): string {
  const text = "Olá, equipe INOVEK! Gostaria de conhecer os produtos e as condições para fornecedores.";
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;
}

export function catalogUrl(product?: Product): string {
  const url = new URL(window.location.href);
  url.search = "";
  url.hash = "";
  if (product) url.searchParams.set("produto", product.id);
  return url.toString();
}