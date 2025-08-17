export function filterByName(champions, query) {
  if (!query) return champions
  const q = query.trim().toLowerCase()
  return champions.filter(c => c.name.toLowerCase().includes(q))
}
