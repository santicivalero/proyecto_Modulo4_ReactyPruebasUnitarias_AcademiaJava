const BASE = 'https://ddragon.leagueoflegends.com'

export async function fetchLatestVersion() {
  const res = await fetch(`${BASE}/api/versions.json`)
  if (!res.ok) throw new Error('No se pudo obtener la versión de Data Dragon')
  const versions = await res.json()
  return versions[0]
}

export async function fetchChampionList(version, locale = 'es_AR') {
  const res = await fetch(`${BASE}/cdn/${version}/data/${locale}/champion.json`)
  if (!res.ok) throw new Error('No se pudo obtener el listado de campeones')
  const json = await res.json()
  return Object.values(json.data).sort((a, b) => a.name.localeCompare(b.name))
}

export function championSquare(version, champImageFull) {
  return `${BASE}/cdn/${version}/img/champion/${champImageFull}`
}

export async function fetchChampionDetail(version, id, locale = 'es_AR') {
  const res = await fetch(`${BASE}/cdn/${version}/data/${locale}/champion/${id}.json`)
  if (!res.ok) throw new Error('No se pudo obtener el detalle del campeón')
  const json = await res.json()
  const firstKey = Object.keys(json.data)[0]
  return json.data[firstKey]
}
