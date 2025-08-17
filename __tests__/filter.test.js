import { describe, it, expect } from 'vitest'
import { filterByName } from '../src/utils/filter.js'

describe('filterByName', () => {
  it('filtra por coincidencia en nombre', () => {
    const list = [{name:'Aatrox'}, {name:'Ahri'}, {name:'Garen'}]
    expect(filterByName(list, 'a')).toHaveLength(3)
    expect(filterByName(list, 'ri')).toEqual([{name:'Ahri'}])
    expect(filterByName(list, '')).toEqual(list)
  })
})
