import sharp from 'sharp'
import { mkdirSync, existsSync } from 'fs'
import { join } from 'path'

const srcDir = '/private/tmp/claude-501/aitana-photos'
const outDir = join(import.meta.dirname, '..', 'public', 'images')

if (!existsSync(outDir)) mkdirSync(outDir, { recursive: true })

const mapping = [
  ['sin título-69.jpeg', 'hero.jpeg'],
  ['sin título-75.jpeg', 'retrato-profesional.jpeg'],
  ['sin título-77.jpeg', 'sobre-mi-hero.jpeg'],
  ['sin título-71.jpeg', 'sobre-mi-historia.jpeg'],
  ['sin título-73.jpeg', 'sobre-mi-formacion.jpeg'],
  ['sin título-64.jpeg', 'consulta-presencial.jpeg'],
  ['sin título-72.jpeg', 'sesion-online.jpeg'],
  ['sin título-82.jpeg', 'espacio-cojines.jpeg'],
  ['sin título-84.jpeg', 'monstera.jpeg'],
  ['sin título-78.jpeg', 'perfil-bn.jpeg'],
  ['sin título-65.jpeg', 'consulta-detalle.jpeg'],
  ['sin título-79.jpeg', 'cojin-terracota.jpeg'],
  ['sin título-85.jpeg', 'cojines-detalle.jpeg'],
]

for (const [src, dest] of mapping) {
  const input = join(srcDir, src)
  const output = join(outDir, dest)
  try {
    await sharp(input)
      .resize(2000, 2000, { fit: 'inside', withoutEnlargement: true })
      .jpeg({ quality: 85 })
      .toFile(output)
    const { size } = await sharp(output).metadata().then(() =>
      import('fs').then(fs => fs.statSync(output))
    )
    console.log(`✓ ${dest} (${Math.round(size / 1024)}KB)`)
  } catch (e) {
    console.error(`✗ ${src}: ${e.message}`)
  }
}
console.log('Done!')
