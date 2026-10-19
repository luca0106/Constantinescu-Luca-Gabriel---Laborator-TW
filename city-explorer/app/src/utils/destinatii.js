  // Extrage doar numele orașelor
export const getOrase = (list) => list.map((d) => d.oras)

// Păstrează doar destinațiile unde vizitat este false
export const getNevizitate = (list) => list.filter((d) => !d.vizitat)

// Calculează suma totală a zilelor pornind de la 0
export const totalZile = (list) => list.reduce((sum, d) => sum + d.zile, 0)

// Formatează un singur obiect sub formă de text
export const formatDestinatie = ({ oras, tara, zile, vizitat }) =>
  `[${vizitat ? 'x' : ' '}] ${oras}, ${tara} (${zile} zile)`

// Calculează câte destinații sunt în fiecare țară
export const numarPeTara = (list) =>
  list.reduce(
    (acc, { tara }) => ({ ...acc, [tara]: (acc[tara] ?? 0) + 1 }),
    {}
  )

// Ordonează o copie a listei descrescător după zile
export const sortDupaZile = (list) =>
  [...list].sort((a, b) => b.zile - a.zile)

// Schimbă valoarea "vizitat" pentru elementul cu id-ul dat, creând un obiect nou
export const marcheazaVizitat = (list, id) =>
  list.map((d) => (d.id === id ? { ...d, vizitat: !d.vizitat } : d))

// Creează o listă nouă copiind elementele vechi și punând destinația nouă la final
export const adaugaDestinatie = (list, d) => [...list, d]

// Creează o listă nouă păstrând doar elementele care NU au id-ul dat (ștergere)
export const stergeDestinatie = (list, id) =>
  list.filter((d) => d.id !== id)