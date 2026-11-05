import { motion } from "framer-motion";
import { ArrowUpRight, ZoomIn } from "lucide-react";
import type { Product } from "../data/products";
import { whatsappProductUrl } from "../lib/links";

interface ProductTileProps {
  product: Product;
  index: number;
  onOpen: (product: Product) => void;
}

export default function ProductTile({ product, index, onOpen }: ProductTileProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.08 }}
      transition={{ duration: 0.5, delay: (index % 2) * 0.07, ease: [0.22, 1, 0.36, 1] }}
      className="group flex h-full min-w-0 flex-col"
    >
      <button
        type="button"
        onClick={() => onOpen(product)}
        aria-label={`Ampliar imagem e especificações de ${product.name}`}
        className="group relative block w-full min-w-0 overflow-hidden bg-[#d5cfc3] text-left"
      >
        
<span className="catalog-product-media">
  <img
    src={product.image}
    alt={product.alt}
    loading={index < 2 ? "eager" : "lazy"}
    className="catalog-product-image"
  />
</span>

        <span className="absolute bottom-2 right-2 flex h-7 w-7 items-center justify-center bg-canvas-light/95 text-charcoal sm:bottom-4 sm:right-4 sm:h-9 sm:w-9" aria-hidden="true">
          <ZoomIn size={16} strokeWidth={1.7} />
        </span>
      </button>

      <div className="flex flex-1 flex-col pt-3 sm:pt-5">
        <p className="text-[9px] font-semibold uppercase tracking-[0.16em] text-muted sm:text-[11px]">{product.category}</p>
        <button type="button" onClick={() => onOpen(product)} className="mt-1.5 text-left">
          <h2 className="text-[15px] font-semibold leading-[1.3] tracking-[-0.025em] text-charcoal sm:text-[20px] md:text-[23px]">{product.name}</h2>
        </button>
        
        <dl className="mt-3 border-t border-line/80 pt-2 sm:mt-4 sm:pt-3">
          {product.specs.slice(0, 2).map((spec) => (
            <div key={spec.label} className="flex flex-wrap gap-x-1 text-[10px] leading-[1.45] sm:text-[12px]">
              <dt className="text-muted">{spec.label}:</dt>
              <dd className="font-medium text-charcoal">{spec.value}</dd>
            </div>
          ))}
        </dl>

        <div className="mt-auto pt-4">
          <a
            href={whatsappProductUrl(product)}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Consultar ${product.name}, no WhatsApp da INOVEK`}
            className="flex min-h-11 w-full items-center justify-between gap-1 border border-[#a9a395] px-2 text-[clamp(9px,2.8vw,13px)] font-medium tracking-[-0.02em] text-charcoal transition-colors hover:border-charcoal hover:bg-charcoal hover:text-white sm:min-h-12 sm:px-4 sm:text-[13px]"
          >
            <span className="whitespace-nowrap">Consultar no WhatsApp</span>
            <ArrowUpRight size={14} strokeWidth={1.5} className="shrink-0" aria-hidden="true" />
          </a>
        </div>
      </div>
    </motion.article>
  );
}