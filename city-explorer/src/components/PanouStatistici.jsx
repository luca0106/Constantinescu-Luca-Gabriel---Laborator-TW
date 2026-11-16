import { useEffect, useState } from 'react'

export default function PanouStatistici() {
  const [destinatii, setDestinatii] = useState([])
  const [incarcare, setIncarcare] = useState(true)
  const [eroare, setEroare] = useState(null)
  const [prag, setPrag] = useState('3')

  useEffect(() => {
    async function incarca() {
      try {
        const response = await fetch('http://localhost:3001/destinatii')
        if (!response.ok) {
          throw new Error(`Serverul a răspuns cu ${response.status}`)
        }
        const date = await response.json()
        setDestinatii(date)
      } catch (err) {
        setEroare(err.message)
      } finally {
        // Corecția 5: Mutat în finally pentru ca indicatorul de încărcare să se oprească și la eroare
        setIncarcare(false)
      }
    }
    incarca()
  }, [])

  if (incarcare) {
    return <p className="stare">Se încarcă statisticile...</p>
  }

  if (eroare) {
    return <p className="stare eroare">Statistici indisponibile: {eroare}</p>
  }

  // Corecția 3: operatorul >= în loc de > pentru a include destinațiile egale cu pragul (ex: Porto cu 3 zile)
  const filtrate = destinatii.filter((d) => d.zile >= Number(prag))

  // Corecția 1: reduce aplicat pe filtrate, nu pe toate destinațiile
  const totalZile = filtrate.reduce((suma, d) => suma + d.zile, 0)
  const medie = filtrate.length === 0 ? 0 : totalZile / filtrate.length

  return (
    <section className="panou">
      <h2>Statistici</h2>
      <label>
        Cel puțin{' '}
        <input
          type="number"
          value={prag}
          // Corecția 4: preluarea valorii e.target.value în loc de pasarea întregului event
          onChange={(e) => setPrag(e.target.value)}
        />{' '}
        zile
      </label>

      {/* Corecția 2: verificarea explicită === 0 pentru afișarea mesajului doar când nu există rezultate */}
      {filtrate.length === 0 && (
        <p className="gol">Nicio destinație cu cel puțin {prag} zile.</p>
      )}

      {filtrate.length > 0 && (
        <ul>
          <li>Destinații: {filtrate.length}</li>
          <li>Total zile: {totalZile}</li>
          <li>Media: {medie.toFixed(1)} zile</li>
        </ul>
      )}
    </section>
  )
}
