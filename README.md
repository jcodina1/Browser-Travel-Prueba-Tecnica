# OutletRentalCars

Aplicación web para renta de vehículos construida con Next.js 15, TypeScript, Redux Toolkit y Tailwind CSS v4.

## 🚀 Características

- **Next.js 15** con App Router
- **Server-Side Rendering (SSR)** en página de resultados
- **Redux Toolkit** para gestión de estado global
- **TypeScript** con configuración estricta
- **Tailwind CSS v4** para estilos
- **Componentes reutilizables** siguiendo principios SOLID
- **Accesibilidad** con ARIA labels y navegación por teclado
- **Responsive Design** mobile-first

## 📁 Arquitectura del Proyecto

```
src/
├── app/                    # Next.js App Router
│   ├── page.tsx           # Página de búsqueda (Home)
│   ├── results/           # Página de resultados (SSR)
│   └── summary/           # Página de resumen
├── components/
│   ├── ui/                # Componentes UI base
│   │   ├── Button.tsx
│   │   ├── Input.tsx
│   │   ├── DatePicker.tsx
│   │   └── Card.tsx
│   ├── layout/            # Componentes de layout
│   │   ├── Header.tsx
│   │   └── Footer.tsx
│   └── features/          # Componentes de características
│       ├── SearchForm.tsx
│       ├── VehicleCard.tsx
│       ├── VehicleSummary.tsx
│       └── CostSummary.tsx
├── lib/
│   ├── redux/             # Redux store, slices y thunks
│   ├── services/          # Capa de datos/servicios
│   └── types/             # Definiciones TypeScript
└── data/
    └── vehicles.json      # Datos mock de vehículos
```

## 🛠️ Tecnologías Utilizadas

- **Framework:** Next.js 15
- **Lenguaje:** TypeScript 5
- **Estado:** Redux Toolkit + Redux Thunk
- **Estilos:** Tailwind CSS v4
- **Gestor de paquetes:** pnpm

## 📦 Instalación

1. Clonar el repositorio:
```bash
git clone <repository-url>
cd Browser-Travel-Prueba-Tecnica
```

2. Instalar dependencias:
```bash
pnpm install
```

3. Ejecutar en modo desarrollo:
```bash
pnpm dev
```

4. Abrir [http://localhost:3000](http://localhost:3000) en el navegador.

## 🏗️ Scripts Disponibles

- `pnpm dev` - Inicia el servidor de desarrollo
- `pnpm build` - Genera build de producción
- `pnpm start` - Inicia servidor de producción
- `pnpm lint` - Ejecuta ESLint

## 🎯 Flujo de la Aplicación

1. **Home (`/`)**: Formulario de búsqueda
   - Selección de ubicación
   - Fechas de recogida y devolución
   - Validación de formulario

2. **Results (`/results`)**: Listado de vehículos (SSR)
   - Grid responsivo de vehículos disponibles
   - Información de búsqueda
   - Selección de vehículo

3. **Summary (`/summary`)**: Resumen y confirmación
   - Detalles del vehículo seleccionado
   - Información de renta
   - Resumen de costos
   - Confirmación de reservación

## 🎨 Principios de Diseño

### SOLID Principles

- **Single Responsibility**: Cada componente tiene una única responsabilidad
- **Open/Closed**: Componentes extensibles mediante props
- **Liskov Substitution**: Interfaces consistentes
- **Interface Segregation**: Props específicas por componente
- **Dependency Inversion**: Abstracción de datos mediante servicios

### Clean Code

- Nombres descriptivos y semánticos
- Funciones pequeñas y focalizadas
- Tipado estricto con TypeScript
- Evitar duplicación de código
- Comentarios solo cuando necesario

### Accesibilidad

- Labels semánticos en todos los inputs
- ARIA roles y attributes
- Navegación completa por teclado
- Focus states visibles
- Contraste de colores WCAG AA

## 🗂️ Separación de Capas

### UI Layer (Componentes)
- Presentación y lógica de UI
- Componentes reutilizables
- No contiene lógica de negocio

### Business Logic Layer (Redux)
- Gestión de estado
- Lógica de negocio
- Thunks para operaciones asíncronas

### Data Layer (Services)
- Acceso a datos
- Mock de API
- Potencialmente reemplazable por API real

## 🔧 Decisiones Técnicas

### Redux Toolkit
- Configuración simplificada del store
- Slices para separación de concerns
- Thunks para operaciones asíncronas
- TypeScript integration out-of-the-box

### Tailwind CSS v4
- Uso de @theme para variables CSS
- Mobile-first responsive design
- Tokens de diseño centralizados

### Next.js 15 App Router
- Server-Side Rendering en /results
- Client components donde necesario
- Optimización de imágenes automática

## 📝 Notas de Implementación

- Los datos de vehículos son mock (vehicles.json)
- La búsqueda simula un delay de API
- La confirmación es una demostración (alert)
- Imágenes de vehículos desde Unsplash

## 🚧 Mejoras Futuras

- Integración con API real
- Persistencia de estado (localStorage)
- Tests unitarios y de integración
- Filtros avanzados de búsqueda
- Sistema de autenticación
- Historial de reservaciones

## 👨‍💻 Autor

Desarrollado como prueba técnica para Browser Travel.
