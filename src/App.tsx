import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion, MotionConfig } from "framer-motion";
import { ArrowUpRight, MessageCircle } from "lucide-react";
import { brandLogo, hasOfficialLogo } from "./assets/media";
import ProductDialog from "./components/ProductDialog";
import ProductTile from "./components/ProductTile";
import { categories, getProduct, products, type Category, type Product } from "./data/products";
import { catalogUrl, whatsappDisplay, whatsappGeneralUrl, whatsappNumber } from "./lib/links";

type SelectedCategory = "Todos os itens" | Category;

function initialProductId(): string | null {
  return getProduct(new URL(window.location.href).searchParams.get("produto"))?.id ?? null;
}

export default function App() {
  const [category, setCategory] = useState<SelectedCategory>("Todos os itens");
  const [selectedId, setSelectedId] = useState<string | null>(initialProductId);
  const previewMedia = !hasOfficialLogo || products.some((product) => !product.imageIsOriginal);
  const visibleProducts = useMemo(
    () => (category === "Todos os itens" ? products : products.filter((product) => product.category === category)),
    [category],
  );
  const selectedProduct = getProduct(selectedId);

  useEffect(() => {
    const syncFromUrl = () => setSelectedId(initialProductId());
    window.addEventListener("popstate", syncFromUrl);
    return () => window.removeEventListener("popstate", syncFromUrl);
  }, []);

  function openProduct(product: Product) {
    setSelectedId(product.id);
    window.history.replaceState(window.history.state, "", catalogUrl(product));
  }

  function closeProduct() {
    setSelectedId(null);
    window.history.replaceState(window.history.state, "", catalogUrl());
  }

  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen min-w-0 overflow-x-clip bg-canvas text-charcoal">
        <header className="sticky top-0 z-30 border-b border-charcoal/10 bg-canvas/95 backdrop-blur-md">
          <div className="mx-auto flex h-[64px] max-w-[1440px] items-center justify-between gap-3 px-5 sm:px-8 lg:px-12">
            <a href="#inicio" className="flex items-center gap-2.5" aria-label="INOVEK, voltar ao início do catálogo">
              <span className="h-2.5 w-2.5 bg-brand" aria-hidden="true" />
              <span className="text-[13px] font-extrabold uppercase tracking-[0.13em]">INOVEK</span>
              <span className="hidden text-[11px] uppercase tracking-[0.13em] text-muted sm:inline">/ Catálogo</span>
            </a>

            <div className="flex items-center gap-3 sm:gap-5">
              <a href={`tel:+${whatsappNumber}`} className="hidden text-[12px] font-medium text-charcoal transition-colors hover:text-brand md:inline">
                {whatsappDisplay}
              </a>
              <a
                href={whatsappGeneralUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex min-h-10 items-center gap-2 bg-charcoal px-3.5 text-[11px] font-semibold text-white transition-colors hover:bg-brand sm:px-4 sm:text-[12px]"
              >
                <MessageCircle size={16} strokeWidth={1.7} aria-hidden="true" />
                WhatsApp
                <ArrowUpRight size={14} strokeWidth={1.6} className="hidden sm:block" aria-hidden="true" />
              </a>
            </div>
          </div>
        </header>

        <main id="inicio">
          <section className="mx-auto max-w-[1200px] px-5 pb-10 pt-10 sm:px-8 md:pb-14 md:pt-14 lg:px-12">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
              className="mb-3 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-muted sm:text-[11px]"
            >
              <span className="h-1.5 w-1.5 bg-brand" />
              VIDROS E MARCENARIA · CATÁLOGO DIGITAL
            </motion.p>
            <motion.img
              src={brandLogo}
              alt="Logotipo INOVEK Vidros e Marcenaria"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.07, ease: [0.22, 1, 0.36, 1] }}
              className={hasOfficialLogo
                ? "block max-h-[220px] max-w-[min(88vw,520px)] object-contain object-left"
                : "-ml-1 block w-[min(82vw,390px)] sm:w-[460px] lg:w-[490px]"}
            />
            <div className="mt-4 flex flex-col gap-3 md:mt-5 md:flex-row md:items-end md:justify-between md:gap-10">
              <motion.h1
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.16 }}
                className="min-w-0 max-w-[700px] break-words text-[clamp(26px,6vw,52px)] font-medium leading-[1.12] tracking-[-0.055em]"
              >
                Espelhos & soluções em LED.
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.23 }}
                className="max-w-[390px] text-[13px] leading-[1.65] text-muted sm:text-[14px]"
              >
                Uma seleção para parceiros e fornecedores. Consulte medidas, acabamentos e disponibilidade diretamente com a INOVEK.
                {previewMedia && <span className="mt-1 block text-[11px]">Imagens e marca ilustrativas nesta prévia.</span>}
              </motion.p>
            </div>
            <div className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-1 text-[12px] text-muted md:hidden">
              <a href={`tel:+${whatsappNumber}`} className="font-medium text-charcoal">{whatsappDisplay}</a>
              <span aria-hidden="true">·</span>
              <a href={whatsappGeneralUrl()} target="_blank" rel="noopener noreferrer" className="font-semibold text-charcoal underline underline-offset-4">
                Abrir WhatsApp
              </a>
            </div>
          </section>

          <section id="produtos" className="mx-auto max-w-[1200px] px-5 pb-24 sm:px-8 lg:px-12" aria-label="Produtos INOVEK">
            <div className="flex items-center justify-between gap-6 border-t border-charcoal/20 pb-6 pt-6 sm:pb-8 sm:pt-7">
              <div className="hide-scrollbar -mx-5 flex min-w-0 flex-1 gap-2 overflow-x-auto px-5 sm:mx-0 sm:px-0">
                {categories.map((item) => (
                  <button
                    key={item}
                    type="button"
                    onClick={() => setCategory(item)}
                    aria-pressed={category === item}
                    className={`shrink-0 rounded-full border px-4 py-2.5 text-[12px] font-medium transition-colors sm:px-5 sm:py-3 sm:text-[13px] ${
                      category === item
                        ? "border-charcoal bg-charcoal text-white"
                        : "border-line text-[#777268] hover:border-charcoal hover:text-charcoal"
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
              <span className="hidden shrink-0 font-mono text-[11px] uppercase tracking-[0.12em] text-muted lg:block">
                {String(visibleProducts.length).padStart(2, "0")} {visibleProducts.length === 1 ? "item" : "itens"}
              </span>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={category}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.18 }}
                className="grid min-w-0 grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-12 lg:gap-x-10 lg:gap-y-16">
                {visibleProducts.map((product, index) => (
                  <ProductTile key={product.id} product={product} index={index} onOpen={openProduct} />
                ))}
              </motion.div>
            </AnimatePresence>
          </section>
        </main>

        <footer className="border-t border-charcoal/15 bg-[#e6e1d6]">
          <div className="mx-auto flex max-w-[1440px] flex-col gap-7 px-5 py-10 sm:px-8 md:flex-row md:items-end md:justify-between md:gap-12 md:py-12 lg:px-12">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted">Contato comercial</p>
              <p className="mt-3 max-w-md text-[25px] font-medium leading-[1.2] tracking-[-0.04em] sm:text-[31px]">Dúvidas sobre algum produto?</p>
              <a href={`tel:+${whatsappNumber}`} className="mt-3 inline-block text-[15px] font-medium text-charcoal underline decoration-charcoal/30 underline-offset-4 hover:decoration-brand">
                {whatsappDisplay}
              </a>
            </div>
            <a
              href={whatsappGeneralUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex min-h-12 items-center justify-between gap-6 border border-charcoal bg-charcoal px-5 text-[13px] font-semibold text-white transition-colors hover:border-brand hover:bg-brand"
            >
              <span className="flex items-center gap-2"><MessageCircle size={17} strokeWidth={1.6} /> Conversar no WhatsApp</span>
              <ArrowUpRight size={17} strokeWidth={1.6} />
            </a>
          </div>
          <div className="border-t border-charcoal/10">
            <div className="mx-auto flex max-w-[1440px] flex-col gap-2 px-5 py-5 text-[10px] leading-relaxed text-muted sm:px-8 sm:text-[11px] md:flex-row md:justify-between lg:px-12">
              <span>INOVEK · Vidros e Marcenaria</span>
              <span>{previewMedia ? "Imagens ilustrativas nesta prévia. " : ""}Referências INK provisórias; confirme os códigos antes da divulgação.</span>
            </div>
          </div>
        </footer>

        <AnimatePresence>
          {selectedProduct && <ProductDialog key={selectedProduct.id} product={selectedProduct} onClose={closeProduct} />}
        </AnimatePresence>
      </div>
    </MotionConfig>
  );
}