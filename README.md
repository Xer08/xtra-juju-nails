# Portafolio de Manicurista

Un portafolio web moderno y atractivo para mostrar tus trabajos de manicura. Diseñado con HTML, CSS y JavaScript puro, sin necesidad de bases de datos.

## 🎨 Características

- **Diseño Responsivo**: Se adapta perfectamente a todos los dispositivos
- **Galería Interactiva**: Filtra tus trabajos por categorías
- **Lightbox**: Vista ampliada de las imágenes
- **Formulario de Contacto**: Para que los clientes puedan agendar citas
- **Animaciones Suaves**: Experiencia de usuario fluida y moderna
- **Navegación Intuitiva**: Menú móvil y scroll suave

## 📁 Estructura del Proyecto

```
portafolio-manicurista/
├── index.html          # Página principal
├── styles.css          # Estilos CSS
├── script.js           # Funcionalidad JavaScript
└── README.md          # Este archivo
```

## 🚀 Cómo Usar

1. **Abrir el sitio**: Simplemente abre `index.html` en tu navegador web

2. **Personalizar tus datos**:
   - En `index.html`: Actualiza tu información de contacto, redes sociales y nombre del negocio
   - En `script.js`: Reemplaza las imágenes de ejemplo con tus propias fotos

3. **Agregar tus propias imágenes**:
   - Reemplaza las URLs en el array `galleryData` en `script.js`
   - Cada imagen necesita: `id`, `title`, `category`, `image`, `description`

## 📱 Categorías Disponibles

- **Uñas Acrílicas**: Extensiones y diseños con acrílico
- **Uñas de Gel**: Trabajos con esmalte de gel
- **Diseños Creativos**: Arte personalizado y decoraciones
- **Uñas Esculpidas**: Construcción y forma natural

## 🎯 Personalización

### Cambiar Colores
En `styles.css`, busca las variables principales:
- `#ff6b9d`: Color principal rosa
- `#667eea` a `#764ba2`: Gradiente púrpura
- `#333`: Color de texto principal

### Actualizar Información de Contacto
En `index.html`, busca la sección `contacto` y actualiza:
- Números de teléfono
- WhatsApp
- Instagram
- Email

### Agregar Nuevas Imágenes
En `script.js`, agrega nuevos objetos al array `galleryData`:

```javascript
{
    id: 13,
    title: "Título de tu trabajo",
    category: "diseños",
    image: "ruta/a/tu/imagen.jpg",
    description: "Descripción del trabajo"
}
```

## 🔧 Tecnologías Utilizadas

- **HTML5**: Estructura semántica
- **CSS3**: Diseño moderno con animaciones
- **JavaScript Vanilla**: Interactividad sin frameworks
- **Font Awesome**: Iconos profesionales
- **Google Fonts**: Tipografía Poppins

## 📱 Compatibilidad

- ✅ Chrome (últimas versiones)
- ✅ Firefox (últimas versiones)
- ✅ Safari (últimas versiones)
- ✅ Edge (últimas versiones)
- ✅ Navegadores móviles

## 🌟 Funcionalidades Destacadas

### Galería Filtrable
Los visitantes pueden filtrar tus trabajos por categorías específicas para encontrar exactamente lo que buscan.

### Lightbox Modal
Al hacer clic en cualquier imagen, se abre una vista ampliada con información detallada del trabajo.

### Formulario de Contacto
Los clientes potenciales pueden enviar mensajes directamente desde el sitio web.

### Diseño Responsivo
El sitio se ve perfectamente en teléfonos, tablets y computadoras de escritorio.

## 📝 Notas para el Desarrollador

- El sitio no requiere servidor ni base de datos
- Las imágenes se cargan desde URLs externas (puedes usar tu propio hosting)
- El código está optimizado para SEO y rendimiento
- Incluye lazy loading para mejorar la velocidad de carga

## 🚀 Futuras Mejoras

- Sistema de administración simple para agregar imágenes
- Integración con WhatsApp Business
- Sección de testimonios de clientes
- Catálogo de precios
- Sistema de agendamiento de citas

---

**¡Listo para mostrar tu increíble trabajo al mundo!** 💅✨
