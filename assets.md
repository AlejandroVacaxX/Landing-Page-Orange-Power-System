## Asignación de Recursos Visuales (Assets)
El agente debe utilizar las siguientes imágenes (numeradas del 1 al 7) en las ubicaciones específicas que se detallan a continuación. Ajusta las clases de Tailwind (`object-cover`, `bg-center`, etc.) según sea necesario para que encajen perfectamente en sus contenedores.

*   **`2.jpeg` (Logo principal sobre fondo oscuro):** 
    *   **Ubicación:** `<Header />`.
    *   **Uso:** Logotipo principal en la esquina superior izquierda de la barra de navegación.
*   **`3.jpeg` (Fondo industrial oscuro con línea naranja y texto H1):** 
    *   **Ubicación:** `<Hero />`.
    *   **Uso:** Imagen de fondo (`background-image`) para la primera sección de impacto. Asegura que el texto H1 en HTML coincida con el concepto de la imagen, o utiliza la imagen como el visual principal del lado derecho si decides usar un layout dividido en pantallas grandes.
*   **`7.jpeg` (Fotografía de contenedor de generador en instalación industrial):** 
    *   **Ubicación:** `<RentalBanner />` o `<ServicesGrid />`.
    *   **Uso:** Imagen destacada para la sección "Industrial generator rental ready for rapid deployment", o como la imagen superior para la tarjeta del servicio principal de alquiler.
*   **`6.jpeg` (Fotografía de la fachada del edificio corporativo):** 
    *   **Ubicación:** `<CallToAction />` (Sección Final).
    *   **Uso:** Imagen de fondo o visual de acompañamiento para la sección final de "Contact Us", transmitiendo confianza y presencia física al hablar directamente con el equipo de ingeniería.
*   **`1.jpeg` (Logo expandido con lista de servicios/tagline):** 
    *   **Ubicación:** `<Footer />` (Pie de página).
    *   **Uso:** Logotipo y gráfico de cierre en el pie de página, ya que contiene los pilares de la empresa (Engineering, Integration, Commissioning) ideales para el cierre del sitio.
*   **`4.jpeg` y `5.jpeg` (Logotipos sobre fondo claro):** 
    *   **Ubicación:** Condicional / Opcional.
    *   **Uso:** Resérvalos para usar si se implementa un tema claro (Light Mode), si el menú de navegación se vuelve blanco al hacer *scroll* (Sticky Navbar invertida), o para el interior de modales de contacto con fondo blanco.

Las imagenes se encuentran en la carpeta Documents/landing_Page/assets
Tu decide en que directorio del proyecto de Astro estara ubicada