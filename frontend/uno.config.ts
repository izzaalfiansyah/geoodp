import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup,
} from "unocss";

export default defineConfig({
  shortcuts: [
    {
      btn: "py-2.5 px-4 uppercase rounded shadow-sm border-none cursor-pointer outline-none",
    },
    [/^btn-(.*)$/, ([, c]) => `bg-${c} text-white transition`],
  ],
  theme: {
    colors: {
      primary: "#fe0e21",
    },
  },
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons(),
    presetTypography(),
    presetWebFonts({
      provider: "google",
      fonts: {
        sans: ["Montserrat", "Montserrat:100,200,300,400,500,600,700,800,900"],
      },
    }),
  ],
  transformers: [transformerDirectives(), transformerVariantGroup()],
});
