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
      btn: "py-2.5 px-5 uppercase rounded shadow-sm border-none cursor-pointer outline-none",
      input:
        "h-10 rounded border border-gray-100 border-solid w-full px-3 outline-none focus:(ring ring-indigo-100 border-blue-400) transition",
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
