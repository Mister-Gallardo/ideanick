import { dirname } from 'path'
import { fileURLToPath } from 'url'

const __filenameESM = fileURLToPath(import.meta.url)
export const __dirname = dirname(__filenameESM)
