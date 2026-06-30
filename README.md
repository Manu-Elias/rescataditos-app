# 🐾 Rescataditos App

> **Plataforma web profesional para la gestión integral de una ONG de bienestar animal, especializada en la atención de casos críticos de abandono, maltrato, adopciones y hogares de tránsito.**

Este proyecto nace con un doble propósito: resolver una problemática real de la comunidad mediante la donación del software a una ONG activa y servir como un espacio de entrenamiento técnico avanzado, implementando estándares y arquitecturas de nivel **Junior Avanzado / Mid-Level**.

---

## 🚀 Objetivo Técnico del Proyecto

El desarrollo se enfoca en la construcción de una aplicación web altamente escalable y mantenible. En lugar de priorizar la velocidad de entrega, el proyecto se rige bajo la filosofía de **Clean Code** y **separación de responsabilidades**, simulando un entorno de trabajo empresarial real. 

### Características Clave en Desarrollo:
- **Área Pública:** Landing page institucional, catálogo dinámico de animales rescatados y formularios de contacto.
- **Módulo de Autenticación:** Flujo controlado de acceso para el personal administrativo.
- **Panel de Administración (Admin Dashboard):** Panel privado protegido por rutas para la gestión completa (CRUD) de animales, control de historias clínicas y logística de tránsito.

---

## 🛠️ Stack Tecnológico

- **Frontend Core:** React + Vite (Estructura SPA eficiente).
- **Estilos y Maquetación:** HTML5 Semántico, SASS (Preprocesador) y CSS Modules para garantizar el encapsulamiento de estilos y evitar colisiones globales.
- **Enrutamiento:** React Router DOM (Gestión de rutas dinámicas, parámetros de URL y protección de accesos).
- **Estrategia de Datos Actual:** Lógica de estados locales y persistencia temporal mediante `localStorage` para dominar los flujos del ciclo de vida antes de migrar a servicios en la nube.

---

## 🏗️ Arquitectura de Carpetas (Diseño Objetivo)

El proyecto está estructurado siguiendo un patrón modular y escalable que facilita el crecimiento limpio del código:

```txt
src/
├── assets/         # Recursos estáticos (Imágenes, íconos, logos)
├── components/     # Componentes atómicos e independientes (UI, Forms, Cards, Layout)
├── features/       # Módulos basados en lógica de negocio (animals, auth, adoptions, donations)
├── pages/          # Vistas principales de la aplicación (Públicas y Privadas)
├── routes/         # Configuración y protección del enrutamiento de la App
├── services/       # Capa de abstracción para el consumo de datos y lógica de negocio
├── styles/         # Arquitectura SCSS profesional (Abstracts, variables, mixins, breakpoints)
└── data/           # Mocks y estructuras de datos estáticos para fases de prueba
```

---

## 📈 Hoja de Ruta del Aprendizaje (Evolución)

Para garantizar un dominio real de las herramientas, el proyecto se expande de forma iterativa y progresiva a través de los siguientes hitos técnicos:

1. **Fase 1 (Actual):** Enrutamiento avanzado y maquetación semántica estructurada con CSS Grid y Flexbox.
2. **Fase 2:** Migración a gestión de datos asíncrona mediante **Axios** y **React Query**.
3. **Fase 3:** Centralización del estado global del sistema utilizando **Zustand**.
4. **Fase 4:** Robustez de la plataforma mediante la implementación de **TypeScript** y cobertura de **Testing**.
5. **Fase 5:** Automatización del despliegues mediante pipelines de **CI/CD** y Deploy.

---

## 📝 Nota sobre el Proceso de Desarrollo

Este repositorio refleja un proceso de **aprendizaje activo y evolutivo**. Varias de las secciones de datos estáticos (ficheros dentro de `src/data/`) se diseñaron intencionalmente de forma *hardcoded* para validar layouts visuales y comportamientos de interfaz. Estas piezas serán refactorizadas hacia servicios de API reales a medida que el proyecto avance en su hoja de ruta técnica.

