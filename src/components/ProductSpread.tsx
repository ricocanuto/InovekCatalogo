import { motion } from "framer-motion";
import { ArrowUpRight, ZoomIn } from "lucide-react";
import type { Product } from "../data/products";
import { whatsappProductUrl } from "../lib/links";

interface ProductSpreadProps {
  product: Product;
  index: number;
  onOpen: (product: Product) => void;
}

export default function ProductSpread({ product, index, onOpen }: ProductSpreadProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      className="grid items-center gap-6 border-b border-charcoal/15 py-9 first:pt-0 md:grid-cols-2 md:gap-12 md:py-16 lg:gap-20"
    >
      <button
        type="button"
        onClick={() => onOpen(product)}
        aria-label={`Ampliar imagem e detalhes de ${product.name}`}
        className={`group relative flex aspect-[4/5] w-full items-center justify-center overflow-hidden bg-[#d5cfc3] text-left ${
          index % 2 === 1 ? "md:order-2" : ""
        }`}
      >
        <img
          src={product.image}
          alt={product.alt}
          loading={index < 2 ? "eager" : "lazy"}
          className={`h-full w-full transition-transform duration-700 ease-out group-hover:scale-[1.025] ${
            product.imageIsOriginal ? "object-contain" : "object-cover"
          }`}
        />
        <span className="absolute bottom-4 right-4 flex items-center gap-2 bg-canvas-light px-3 py-2 text-[11px] font-semibold text-charcoal" aria-hidden="true">
          <ZoomIn size={16} strokeWidth={1.6} /> Ver imagem maior
        </span>
      </button>

      <div className={`flex flex-col ${index % 2 === 1 ? "md:order-1" : ""}`}>
        <p className="flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-muted sm:text-[11px]">
          <span className="font-mono text-brand">{String(index + 1).padStart(2, "0")}</span>
          <span className="h-px w-5 bg-line" />
          {product.category}
        </p>
        <h2 className="mt-4 max-w-lg text-[30px] font-medium leading-[1.12] tracking-[-0.05em] sm:text-[40px] lg:text-[48px]">
          {product.name}
        </h2>
        
        <p className="mt-6 max-w-md text-[14px] leading-[1.7] text-[#5f5b54] sm:text-[15px]">{product.description}</p>

        <dl className="mt-7 max-w-md border-t border-line">
          {product.specs.map((spec) => (
            <div key={spec.label} className="grid grid-cols-[95px_1fr] gap-3 border-b border-line/70 py-3 text-[12px] leading-snug sm:grid-cols-[112px_1fr] sm:text-[13px]">
              <dt className="text-muted">{spec.label}</dt>
              <dd className="font-medium">{spec.value}</dd>
            </div>
          ))}
        </dl>

        <a
          href={whatsappProductUrl(product)}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-7 flex min-h-13 max-w-md items-center justify-between border border-charcoal px-5 text-[13px] font-semibold transition-colors hover:bg-charcoal hover:text-white"
        >
          Consultar no WhatsApp
          <ArrowUpRight size={18} strokeWidth={1.6} aria-hidden="true" />
        </a>
      </div>
    </motion.article>
  );
}