import { useState, useEffect } from 'react'
import { getDestinatii, patchVizitat, postDestinatie } from './api/destinatii.js'
import {
  getNevizitate,
  totalZile,
  adaugaDestinatie,
} from './utils/destinatii.js'
import Rezumat from './components/Rezumat.jsx'
import FormularDestinatie from './components/FormularDestinatie.jsx'
import ListaDestinatii from './components/ListaDestinatii.jsx'
import Cautare from './components/Cautare.jsx'
import PanouStatistici from './components/PanouStatistici.jsx'
import './App.css'

export default function App() {
  const [destinatii, setDestinatii] = useState([])
  const [incarcare, setIncarcare] = useState(true)
  const [eroare, setEroare] = useState(null)
  const [seTrimite, setSeTrimite] = useState(false)
  const [cautare, setCautare] = useState('')

  // Comutator pentru paginare (Exercițiul 5):
  // false = varianta nepaginată (Ex. 1-4 și măsurătorile de la punctul 4 din fișă)
  // true = varianta paginată (Ex. 5 și măsurătorile de la punctul 5 din fișă)
  const [paginat, setPaginat] = useState(false)
  const [pagina, setPagina] = useState(1)
  const [totalPagini, setTotalPagini] = useState(1)

  useEffect(() => {
    async function incarca() {
      try {
        setIncarcare(true)
        const rezultat = await getDestinatii(paginat ? pagina : null)
        if (Array.isArray(rezultat)) {
          setDestinatii(rezultat)
          setTotalPagini(1)
        } else if (rezultat && rezultat.data) {
          setDestinatii(rezultat.data)
          setTotalPagini(rezultat.pages || 1)
        }
      } catch (err) {
        setEroare(err.message)
      } finally {
        setIncarcare(false)
      }
    }
    incarca()
  }, [pagina, paginat])

  async function handleToggle(id) {
    const tinta = destinatii.find((d) => d.id === id)
    if (!tinta) return
    try {
      const salvata = await patchVizitat(id, !tinta.vizitat)
      setDestinatii((curent) =>
        curent.map((d) => (d.id === id ? salvata : d))
      )
    } catch (err) {
      alert(`Eroare la actualizare: ${err.message}`)
    }
  }

  async function handleAdd(destinatieNoua) {
    setSeTrimite(true)
    try {
      const salvata = await postDestinatie(destinatieNoua)
      setDestinatii((curent) => adaugaDestinatie(curent, salvata))
    } catch (err) {
      alert(`Eroare la adăugare: ${err.message}`)
    } finally {
      setSeTrimite(false)
    }
  }

  const nevizitate = getNevizitate(destinatii)

  // Filtrarea căutării (Exercițiul 3b)
  const textCautat = cautare.trim().toLowerCase()
  const afisate = destinatii.filter(
    (d) =>
      d.oras.toLowerCase().includes(textCautat) ||
      d.tara.toLowerCase().includes(textCautat)
  )

  return (
    <main>
      <h1>City Explorer</h1>

      {/* Panoul de statistici (se activează la Exercițiul 4) */}
      {/* <PanouStatistici /> */}

      {incarcare && <p className="stare">Se încarcă destinațiile...</p>}
      {eroare && <p className="stare eroare">A apărut o eroare: {eroare}</p>}

      {!incarcare && !eroare && (
        <>
          <Rezumat
            total={destinatii.length}
            nevizitate={nevizitate.length}
            zile={totalZile(nevizitate)}
          />

          <FormularDestinatie onAdd={handleAdd} seTrimite={seTrimite} />

          <Cautare valoare={cautare} onChange={setCautare} />

          {/* Afișare condiționată listă goală (Exercițiul 3c) */}
          {destinatii.length === 0 ? (
            <p className="gol">
              Nu există nicio destinație. Adaugă prima din formular.
            </p>
          ) : afisate.length === 0 ? (
            <p className="gol">Niciun rezultat pentru „{cautare}”.</p>
          ) : (
            <ListaDestinatii destinatii={afisate} onToggle={handleToggle} />
          )}

          {/* Comutator și butoane de paginare (Exercițiul 5) */}
          <div style={{ margin: '1.5rem 0', textAlign: 'center' }}>
            <label style={{ fontSize: '0.85rem', color: '#4b5563', cursor: 'pointer' }}>
              <input
                type="checkbox"
                checked={paginat}
                onChange={(e) => {
                  setPaginat(e.target.checked)
                  setPagina(1)
                }}
              />{' '}
              Activează paginarea (Exercițiul 5)
            </label>
          </div>

          {paginat && (
            <div className="paginare">
              <button
                type="button"
                disabled={pagina <= 1}
                onClick={() => setPagina((p) => Math.max(p - 1, 1))}
              >
                Înapoi
              </button>
              <span>
                pagina {pagina} din {totalPagini}
              </span>
              <button
                type="button"
                disabled={pagina >= totalPagini}
                onClick={() => setPagina((p) => Math.min(p + 1, totalPagini))}
              >
                Înainte
              </button>
            </div>
          )}
        </>
      )}
    </main>
  )
}
