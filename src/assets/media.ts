import fallbackLogo from "./inovek-logo.svg?inline";

// Copiar arquivos para originais/ com os nomes documentados ativa os anexos no build.
const originals = import.meta.glob<string>("./originais/*.{png,jpg,jpeg,webp,svg}", {
  eager: true,
  query: "?inline",
  import: "default",
});

function findOriginal(name: string): string | undefined {
  const entry = Object.entries(originals).find(([path]) =>
    path.split("/").pop()?.replace(/\.[^.]+$/, "").toLowerCase() === name.toLowerCase(),
  );
  return entry?.[1];
}

export function productImage(name: string, fallbackFile: string) {
  const original = findOriginal(name);
  return {
    src: original ?? `./images/${fallbackFile}`,
    isOriginal: Boolean(original),
  };
}

const officialLogo = findOriginal("logo-inovek");
export const brandLogo = officialLogo ?? fallbackLogo;
export const hasOfficialLogo = Boolean(officialLogo);