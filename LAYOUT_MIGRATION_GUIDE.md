# Full-Width Layout System Migration Guide

## 📋 Overview

Sistem container baru yang menerapkan "page gutter" dinamis untuk layout hampir full-width dengan konsistensi visual di semua viewport.

## 🎯 Objectives

1. **Dynamic page gutters**: Margin kiri-kanan responsif berdasarkan viewport
2. **Near full-width**: Maksimalkan penggunaan ruang layar
3. **Consistent spacing**: Jarak yang konsisten di semua section  
4. **Semantic naming**: Container dengan penamaan yang jelas tujuannya
5. **Easy migration**: Transisi mudah dari sistem lama

## 🛠 CSS Implementation

### CSS Variables (sudah di globals.css)
```css
:root {
  /* Page Gutter System */
  --page-gutter-xs: 16px;  /* Mobile */
  --page-gutter-sm: 20px;  /* Small tablet */
  --page-gutter-md: 24px;  /* Tablet */
  --page-gutter-lg: 32px;  /* Desktop */
  --page-gutter-xl: 40px;  /* Large desktop */
  
  /* Dynamic page gutter based on viewport */
  --page-gutter: clamp(var(--page-gutter-xs), 2.5vw, var(--page-gutter-xl));
  
  --container-max: 1440px;
  --container: 1200px;
}
```

### Container Classes
```css
/* Standard container dengan max-width */
.site-container {
  width: min(calc(100vw - 2 * var(--page-gutter)), var(--container-max));
  margin-inline: auto;
}

/* Full-bleed container untuk hero/editorial */
.site-container--bleed {
  width: calc(100vw - 2 * var(--page-gutter));
  margin-inline: auto;
}

/* Content container untuk text/artikel */
.site-container--content {
  width: min(calc(100vw - 2 * var(--page-gutter)), var(--container));
  margin-inline: auto;
}

/* Reset max-width untuk elemen dalam bleed container */
.site-container--bleed > *,
.site-container--bleed .card-img,
.site-container--bleed .heroCard,
.site-container--bleed .photoCard {
  max-width: none;
}

/* Utility classes */
.no-max-width {
  max-width: none !important;
}
```

## 🔄 Migration Examples

### Before ❌
```tsx
// Old wrapper patterns
<div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-10">
<div className="w-11/12 mx-auto">  
<div className="max-w-[1200px] px-4 sm:px-6 lg:px-10">
<div className="container mx-auto max-w-[1200px] px-4">
```

### After ✅
```tsx
// New container system
<div className="site-container">           {/* Standard - max 1440px */}
<div className="site-container--bleed">    {/* Hero/Editorial - near full-width */}
<div className="site-container--content">  {/* Reading content - max 1200px */}
```

## 📱 Responsive Behavior

| Viewport | Page Gutter | Effective Width |
|----------|-------------|------------------|
| Mobile (320px) | 16px | ~288px available |
| Tablet (768px) | ~19px | ~730px available |
| Desktop (1200px) | ~30px | ~1140px available |
| Large (1600px) | 40px | 1520px available (capped at 1440px for standard) |

## 🎨 Component Updates

### Hero Component
```tsx
// Before
<div className="container mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-10">

// After  
<div className="site-container--bleed">
  <div className="relative overflow-hidden rounded-3xl no-max-width">
```

### Modern Minimalist Component
```tsx
// Before
<section className="mm container-mm">

// After
<section className="mm site-container--bleed">
```

### Regular Content Sections
```tsx
// Before
<div className="container mx-auto max-w-6xl px-4">

// After
<div className="site-container">
```

## 🏗 Tailwind Config (Optional)

Add to `tailwind.config.js` for utility classes:

```js
module.exports = {
  theme: {
    extend: {
      spacing: {
        'page-gutter': 'clamp(16px, 2.5vw, 40px)',
      },
      maxWidth: {
        'container': '1200px',
        'container-max': '1440px',
      },
      width: {
        'site-container': 'min(calc(100vw - 2 * var(--page-gutter)), var(--container-max))',
        'site-container-bleed': 'calc(100vw - 2 * var(--page-gutter))',
        'site-container-content': 'min(calc(100vw - 2 * var(--page-gutter)), var(--container))',
      }
    }
  }
}
```

## 🎯 Usage Guidelines

### When to use `.site-container--bleed`
- ✅ Hero sections
- ✅ Editorial layouts (Modern Minimalist)
- ✅ Image galleries
- ✅ Full-width cards/components

### When to use `.site-container`
- ✅ Standard content sections
- ✅ Navigation areas
- ✅ Footer content
- ✅ Mixed content layouts

### When to use `.site-container--content`
- ✅ Article text
- ✅ Blog posts
- ✅ Reading-focused content
- ✅ Forms and inputs

## ✨ Benefits

1. **Consistent gutters**: Dynamic spacing yang menyesuaikan viewport
2. **Near full-width**: Maksimalkan penggunaan ruang layar
3. **Better mobile UX**: Lebih sedikit wasted space di mobile
4. **Semantic naming**: Jelas maksud dan tujuan setiap container
5. **Easy maintenance**: Satu sistem untuk semua layout needs
6. **Future-proof**: Mudah extend untuk layout patterns baru

## 🚀 Implementation Checklist

- [x] ✅ Add CSS variables to globals.css
- [x] ✅ Add container classes to globals.css  
- [x] ✅ Update Hero component
- [x] ✅ Update Modern Minimalist component
- [ ] ⏳ Update other components (Navbar, Footer, etc.)
- [ ] ⏳ Remove old container classes
- [ ] ⏳ Test responsive behavior across devices
- [ ] ⏳ Update Tailwind config if needed

## 🔧 Legacy Support

Container lama (`container-mm`) masih tersedia selama masa transisi. Hapus setelah semua components sudah diupdate.

---

**Demo**: Lihat `full-width-demo.html` untuk contoh implementasi lengkap.
