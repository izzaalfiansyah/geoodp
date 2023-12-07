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
      btn: "h-11 flex items-center justify-center gap-2 px-5 uppercase rounded border-none cursor-pointer outline-none",
      fab: "fixed bottom-10 right-5 bg-primary text-white rounded-full h-15 w-15 shadow shadow-lg border-none flex items-center justify-center cursor-pointer",
      input:
        "py-2.5 min-h-11 rounded border border-gray-100 border-solid w-full px-3 outline-none focus:(ring ring-indigo-100 border-blue-400) transition resize-none",
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
        montserrat: [
          "Montserrat",
          "Montserrat:100,200,300,400,500,600,700,800,900",
        ],
      },
    }),
  ],
  transformers: [transformerDirectives(), transformerVariantGroup()],
});
