// Make some keys K of T optional.
export type MakePartial<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>

// Convert a string in camelCase to arrow-case
export function arrowify(str: string): string {
  return str.replace(/[A-Z]/g, c => `-${c.toLowerCase()}`)
}

export function transparentize(value: string, opacity: number) {
  // maybe regex so this isnt as bad to look at xd
  const base = value.slice(0, -1).replace('rgb', 'rgba')
  return `${base} / ${opacity})`
}
