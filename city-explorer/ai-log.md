# Jurnal de utilizare AI (AI Log)

Acest fișier documentează utilizarea asistenților bazați pe Inteligență Artificială pentru dezvoltarea proiectului **City Explorer**.

## Sesiunea 1: Structura și aspectul (Laborator 1)
* **Data:** 5 Octombrie 2026
* **Modelul folosit:** Gemini
* **Scop:** Crearea structurii HTML inițiale și stilizarea cu CSS modern.
* **Prompt utilizat:** 
  > "Trebuie sa rezolv acest laborator la Tehnologii Web."
* **Rezultat:** Modelul a generat fișierul `index.html` folosind elemente semantice și `style.css` folosind un design modern (Flexbox, CSS Grid, variabile de culoare, fonturi din Google Fonts). Codul a fost integrat direct în proiect.

## Sesiunea 2: Vite și JavaScript (Laborator 2)
* **Data:** 19 Octombrie 2026
* **Modelul folosit:** Gemini
* **Scop:** Generarea fișierelor de date, prelucrare și API pentru exercițiile din Laboratorul 2.
* **Prompt utilizat:** 
  > "Explica-mi tot ce trebuie sa fac si ce scop are fiecare pas, si da-mi si codul pentru fiecare etapa"
* **Rezultat:** Modelul a explicat pașii pentru crearea și popularea fișierelor `destinatii.js` (date), `utils/destinatii.js` (funcții map/filter/reduce), `api/orase.js` (apeluri fetch) și integrarea lor centralizată în `main.jsx`. 

## Sesiunea 3: Componente React, props și state (Laborator 3)
* **Data:** 2 Noiembrie 2026
* **Modelul folosit:** Gemini
* **Scop:** Structurarea interfeței aplicației City Explorer în componente React (`Rezumat`, `DestinatieCard`, `ListaDestinatii`, `FormularDestinatie`), gestiunea stării locale și a proprietăților (props), tratarea evenimentelor și stilizarea layout-ului cu CSS Grid și Flexbox.
* **Prompt utilizat:** 
  > "Explica-mi tot ce trebuie sa fac si ce scop are fiecare pas, si da-mi si codul pentru fiecare etapa"
* **Rezultat:** Modelul a furnizat pașii ordonați și codul complet pentru fișierele de componente, actualizarea stilurilor (`index.css` și `App.css`), logica de adăugare și marcare vizitat/nevizitat în `App.jsx`, precum și implementarea cerinței suplimentare de ștergere a cardurilor. 


## Sesiunea 4: Date de la server și formulare cu validare (Laborator 4)
* **Data:** 16 Noiembrie 2026
* **Modelul folosit:** Gemini
* **Scop:** Preluarea asincronă a datelor dintr-un mock server (json-server pe port 3001), tratarea stărilor de încărcare și eroare, validarea datelor dintr-un formular cu stare unificată, căutare și filtrare locală (client-side), tratarea cazurilor de listă goală, depanarea celor șapte erori din componenta de statistici (`PanouStatistici.jsx`), optimizarea performanței prin paginare pe seturi mari de date (2000 destinații pe port 3002) și completarea Fișei de laborator nr. 4.
* **Prompt utilizat:** 
  > "Explica-mi tot ce trebuie sa fac si ce scop are fiecare pas, si da-mi si codul pentru fiecare etapa"
* **Rezultat:** Modelul a explicat pașii metodologici, a furnizat predicțiile și valorile măsurate pentru fișă, a implementat logica de cereri HTTP (`getDestinatii`, `postDestinatie`, `patchVizitat`) în `src/api/destinatii.js`, a creat componentele `Cautare.jsx`, `PanouStatistici.jsx` (cu corectarea erorilor logice și de stil), a adăugat validarea în `FormularDestinatie.jsx`, a actualizat `App.jsx` și `App.css`, a generat scriptul `genereaza.js` pentru setul mare de date și a realizat migrarea fișierelor direct în rădăcina proiectului.
