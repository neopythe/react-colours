import chroma from 'chroma-js'

const levels = [0, 50, 100, 200, 300, 400, 500, 600, 700, 800, 900]

export const generatePalette = (starterPalette) => {
  const { paletteName, id, emoji } = starterPalette
  const newPalette = {
    paletteName,
    id,
    emoji,
    colours: {},
  }
  for (const level of levels) newPalette.colours[level] = []
  for (const colour of starterPalette.colours) {
    const scale = generateScale(colour.colour, 11)
    for (const i of scale.keys()) {
      newPalette.colours[levels[i]].push({
        name: `${colour.name} ${levels[i]}`,
        id: `${colour.name.toLowerCase().replaceAll(' ', '-')}-${levels[i]}`,
        hex: scale[i],
        hsl: chroma(scale[i]).css('hsl'),
        hsla: chroma(scale[i])
          .css('hsl')
          .replace('hsl', 'hsla')
          .replace(')', ',1)'),
        rgb: chroma(scale[i]).css(),
        rgba: chroma(scale[i]).css().replace('rgb', 'rgba').replace(')', ',1)'),
      })
    }
  }
  return newPalette
}

const generateScale = (hexColour, colourQuantity) => {
  const getRange = (hexColour) => [
    '#fff',
    hexColour,
    chroma(hexColour).darken(1.4).hex(),
  ]
  return chroma.scale(getRange(hexColour)).mode('lab').colors(colourQuantity)
}
