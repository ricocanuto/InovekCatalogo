
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, X } from "lucide-react";
import type { Product } from "../data/products";
import { whatsappProductUrl } from "../lib/links";

interface ProductDialogProps {
  product: Product;
  onClose: () => void;
}

export default function ProductDialog({
  product,
  onClose,
}: ProductDialogProps) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const onCloseRef = useRef(onClose);

  onCloseRef.current = onClose;

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    const previouslyFocused =
      document.activeElement as HTMLElement | null;

    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onCloseRef.current();
        return;
      }

      if (event.key !== "Tab") return;

      const focusable =
        dialogRef.current?.querySelectorAll<HTMLElement>(
          'button:not([disabled]), a[href]'
        );

      if (!focusable?.length) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (
        event.shiftKey &&
        document.activeElement === first
      ) {
        event.preventDefault();
        last.focus();
      } else if (
        !event.shiftKey &&
        document.activeElement === last
      ) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener(
        "keydown",
        handleKeyDown
      );
      previouslyFocused?.focus();
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-50 flex items-end justify-center bg-[#171715]/75 md:items-center md:p-5"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <motion.div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="product-title"
        initial={{ opacity: 0, y: 24, scale: 0.99 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 16, scale: 0.99 }}
        transition={{
          duration: 0.35,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="relative flex h-[100dvh] w-full max-w-[1160px] flex-col overflow-y-auto bg-canvas-light text-charcoal md:h-[min(880px,92dvh)] md:flex-row md:overflow-hidden"
      >
        {/* Botão para fechar o modal */}
        <button
          type="button"
          ref={closeRef}
          onClick={onClose}
          aria-label="Fechar detalhes do produto"
          className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center bg-canvas-light text-charcoal transition-colors hover:bg-charcoal hover:text-white"
        >
          <X size={20} strokeWidth={1.7} />
        </button>

        {/* Imagem sem segunda ampliação */}
        <div className="h-[min(67dvh,620px)] min-h-[330px] shrink-0 bg-[#201f1d] md:h-full md:min-h-0 md:w-[58%]">
          <div className="flex h-full w-full items-center justify-center overflow-hidden p-3 sm:p-5">
            <img
              src={product.image}
              alt={product.alt}
              className="h-full w-full object-contain"
            />
          </div>
        </div>

        {/* Informações do produto */}
        <div className="flex min-w-0 flex-1 flex-col px-6 pb-9 pt-8 md:overflow-y-auto md:px-9 md:pb-10 md:pt-12">
          <p className="mb-4 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-muted">
            <span className="h-1.5 w-1.5 bg-brand" />
            {product.category}
          </p>

          <h2
            id="product-title"
            className="max-w-sm text-[29px] font-semibold leading-[1.12] tracking-[-0.045em] md:text-[35px]"
          >
            {product.name}
          </h2>

          <p className="mt-5 text-[14px] leading-[1.7] text-[#5f5b54]">
            {product.description}
          </p>

          {/* Especificações */}
          <section
            className="mt-7 border-t border-line pt-5"
            aria-label={`Especificações de ${product.name}`}
          >
            <h3 className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted">
              Especificações
            </h3>

            <dl className="mt-3">
              {product.specs.map((spec) => (
                <div
                  key={spec.label}
                  className="grid grid-cols-[95px_1fr] gap-3 border-b border-line/60 py-2.5 text-[12px] leading-snug sm:grid-cols-[110px_1fr] sm:text-[13px]"
                >
                  <dt className="text-muted">
                    {spec.label}
                  </dt>
                  <dd className="font-medium">
                    {spec.value}
                  </dd>
                </div>
              ))}
            </dl>
          </section>

          {/* Características adicionais */}
          {product.features.length > 0 && (
            <p className="mt-5 text-[12px] leading-[1.6] text-muted">
              {product.features.join(" · ")}
            </p>
          )}

          {/* WhatsApp */}
          <div className="mt-auto pt-7">
            <a
              href={whatsappProductUrl(product)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex min-h-14 w-full items-center justify-between bg-charcoal px-5 text-[13px] font-semibold text-white transition-colors hover:bg-brand"
            >
              Consultar no WhatsApp
              <ArrowUpRight
                size={18}
                strokeWidth={1.5}
                aria-hidden="true"
              />
            </a>

            <p className="mt-3 text-center text-[10px] leading-relaxed text-muted">
              {product.imageIsOriginal
                ? "Medidas e disponibilidade sob consulta."
                : "Imagem ilustrativa da prévia. Medidas e disponibilidade sob consulta."}
            </p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
