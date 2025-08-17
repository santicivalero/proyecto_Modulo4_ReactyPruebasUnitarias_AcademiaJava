# 📚 League of Legends Champions Explorer

Aplicación en React que consume la API oficial de **Data Dragon** de *League of Legends*, mostrando un listado de campeones con opciones de búsqueda, filtrado y favoritos. Incluye pruebas unitarias con **Vitest** y **Testing Library**.

Proyecto realizado en el marco de la Academia Java dictada por la Universidad Siglo 21 en convenio con Softtek.

---

## 🚀 Tecnologías utilizadas

- **React**
- **Vite**
- **JavaScript (ES6+)**
- **Vitest + Testing Library + jsdom**
- **CSS Modules**
- **Data Dragon API (League of Legends)**

---

## 📂 Estructura del proyecto
```
├── tests/
│   ├── App.test.jsx
│   ├── ChampionCardContainer.test.jsx
│   └── filter.test.js
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── AlphaFilter/
│   │   │   ├── AlphaFilter.jsx
│   │   │   └── styles.module.css
│   │   ├── FavoritesChips/
│   │   │   ├── FavoritesChips.jsx
│   │   │   └── styles.module.css
│   │   ├── SearchBar/
│   │   │   ├── SearchBar.jsx
│   │   │   └── styles.module.css
│   │   ├── ChampionList/
│   │   │   ├── ChampionList.jsx
│   │   │   ├── ChampionListContainer.jsx
│   │   │   └── styles.module.css
│   │   └── ChampionCard/
│   │       ├── ChampionCard.jsx
│   │       ├── ChampionCardContainer.jsx
│   │       └── styles.module.css
│   ├── pages/
│   │   └── ChampionDetail/
│   │       ├── ChampionDetail.jsx
│   │       ├── ChampionDetailContainer.jsx
│   │       └── styles.module.css
│   ├── hooks/
│   │   └── useChampions.js
│   ├── services/
│   │   └── ddragon.js
│   ├── utils/
│   │   └── filter.js
│   ├── App.jsx
│   ├── main.jsx
│   └── styles.css
├── package.json
├── vite.config.js
├── vitest.setup.js
└── README.md
```
---

## ⚙️ Instalación y uso

- Clonar el repositorio e instalar las dependencias:
```
npm install
```
- Ejecutar en modo desarrollo:
```
npm run dev
```
- Ejecutar las pruebas unitarias:
```
npm run test
```
---

## ✨ Funcionalidades principales

- 📅 Obtención dinámica de la última versión del juego.
- 📑 Listado alfabético de campeones.
- 🔍 Búsqueda y filtrado por nombre o inicial.
- ⭐ Gestión de favoritos.
- 📖 Vista de detalle con biografía y habilidades.
- ⚠️ Manejo de estados de carga y error al consumir la API.


## 🌐 Consumo de API y ciclo de vida

El consumo de API se realiza con `fetch` hacia **Data Dragon**:

- **Carga**: El componente monta y muestra un estado de *loading*.  
- **Éxito**: Se renderiza la lista de campeones o el detalle según corresponda.  
- **Error**: Se muestra un mensaje indicando el fallo de conexión o datos inválidos.  

---

## 🧪 Pruebas unitarias

Se implementaron con **Vitest** y **Testing Library**:

- **App.test.jsx**: Verifica renderizado, búsqueda y filtrado en la lista de campeones.  
- **ChampionCardContainer.test.jsx**: Comprueba la apertura/cierre de detalles y la marcación de favoritos.  
- **filter.test.js**: Valida la función utilitaria de filtrado de campeones por nombre.  


---
#### 👤 Autor
Santiago Civalero
