import { defineConfig, presetUno, presetAttributify, presetIcons } from 'unocss'

export default defineConfig({
  presets: [
    presetUno({
      preflight: false
    }),
    //   presetAttributify(),
    //   presetIcons({
    //     collections: {
    //       hi: () => import('@iconify-json/heroicons/icons.json').then(i => i.default),
    //     },
    //     extraProperties: {

    //     },
    //     scale: 1.25
    //   })
  ]
})