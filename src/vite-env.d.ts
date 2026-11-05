/// <reference types="vite/client" />

declare module "*.webp?inline" {
  const url: string;
  export default url;
}

declare module "*.svg?inline" {
  const url: string;
  export default url;
}