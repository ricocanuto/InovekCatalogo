# Catálogo INOVEK

Catálogo responsivo da INOVEK Vidros e Marcenaria no formato da Opção A. Os sete produtos são apresentados em **duas colunas**, inclusive no celular, com duas especificações resumidas abaixo de cada imagem. Ao clicar na imagem, abre-se a mesma visualização sem cortes com especificações completas e o link **Consultar no WhatsApp**; um segundo clique amplia a foto para leitura dos detalhes. O contato da empresa é **+55 (13) 97407-7944**.

## Materiais originais pendentes

As imagens exibidas na conversa não estão disponíveis como arquivos no projeto. Somente as sete imagens **ilustrativas** da versão anterior estão acessíveis em `public/images/`. O logotipo em `src/assets/inovek-logo.svg` também é uma recriação, não o arquivo oficial. Não divulgue a prévia como se tivesse as fotografias e a marca exatas.

Para incorporar os anexos reais sem alterar o código, salve o logo e as sete imagens em `src/assets/originais/` com os nomes relacionados em `src/assets/originais/README.md`. Aceitamos PNG, JPEG, WebP e SVG (SVG somente para o logo). Cada imagem original adicionada substitui automaticamente sua ilustração de prévia no próximo build, sem cortes no detalhe do produto.

As referências `INK-*` em `src/data/products.ts` são **provisórias**. Confirme os códigos comerciais antes de enviar o catálogo. Medidas, preços e estoque permanecem sob consulta.

## Rodar e publicar

```bash
npm install
npm run dev
npm run build
```

Publique a **pasta `dist/`** inteira em uma hospedagem estática, como [Netlify Drop](https://app.netlify.com/drop), Vercel ou Cloudflare Pages. O site não cria uma URL pública sozinho: a hospedagem fornece o endereço que pode ser enviado aos fornecedores. O botão de compartilhar foi removido; o link geral pode ser copiado da barra de endereço. Links `?produto=...` abrem um item específico.

O número, os links `tel:` e as mensagens automáticas do WhatsApp estão em `src/lib/links.ts`.