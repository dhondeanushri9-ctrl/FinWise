// Dynamic Lucide Icon Wrapper Component

export function Icon({ name, size = 20, className = '' }) {
  const { useEffect, useRef } = React;
  const iconRef = useRef(null);

  useEffect(() => {
    if (window.lucide && iconRef.current) {
      window.lucide.createIcons({
        targets: [iconRef.current]
      });
    }
  }, [name]);

  // Fallback SVG icon mappings for seamless fallback if Lucide is initializing
  const svgFallback = () => {
    switch (name) {
      case 'Sparkles':
        return React.createElement('path', { d: 'm12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3L12 3z' });
      case 'TrendingUp':
        return React.createElement('path', { d: 'm22 7-8.5 8.5-5-5L1 18' });
      case 'TrendingDown':
        return React.createElement('path', { d: 'm22 17-8.5-8.5-5 5L1 6' });
      case 'DollarSign':
        return React.createElement('path', { d: 'M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6' });
      case 'PiggyBank':
        return React.createElement('path', { d: 'M19 5c-1.5 0-2.8 1.4-3 2-3.5-1.5-11-.3-11 5 0 1.8 0 3 2 4.5V20h4v-2h3v2h4v-3.5c1-.5 1.5-1 2.5-2.5 1-1.5 1.5-3 1.5-5s-1.5-4-3-4z' });
      case 'Utensils':
        return React.createElement('path', { d: 'M18 2v20M18 8h-4V2M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2' });
      case 'Home':
        return React.createElement('path', { d: 'm3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z' });
      case 'Car':
        return React.createElement('path', { d: 'M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H7c-.7 0-1.3.3-1.8.7C4.3 8.6 3 10 3 10s-2.7.6-4.5 1.1C-2.3 11.3-3 12.1-3 13v3c0 .6.4 1 1 1h2' });
      case 'Tv':
        return React.createElement('path', { d: 'M20 7H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2zM17 2l-5 5-5-5' });
      case 'Film':
        return React.createElement('path', { d: 'M19.82 2H4.18A2.18 2.18 0 0 0 2 4.18v15.64A2.18 2.18 0 0 0 4.18 22h15.64A2.18 2.18 0 0 0 22 19.82V4.18A2.18 2.18 0 0 0 19.82 2z' });
      case 'ShoppingBag':
        return React.createElement('path', { d: 'M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4zM3 6h18M16 10a4 4 0 0 1-8 0' });
      case 'Zap':
        return React.createElement('path', { d: 'm13 2-9 12h8l-1 8 9-12h-8l1-8z' });
      case 'HeartPulse':
        return React.createElement('path', { d: 'M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z' });
      case 'ShieldCheck':
        return React.createElement('path', { d: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10zM9 12l2 2 4-4' });
      case 'Bot':
        return React.createElement('path', { d: 'M12 8V4H8M12 2a2 2 0 0 1 2 2v2H10V4a2 2 0 0 1 2-2zM4 11a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8z' });
      case 'Sun':
        return React.createElement('path', { d: 'M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8zM12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41' });
      case 'Moon':
        return React.createElement('path', { d: 'M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z' });
      case 'Plus':
        return React.createElement('path', { d: 'M5 12h14M12 5v14' });
      case 'Search':
        return React.createElement('path', { d: 'm21 21-4.3-4.3M11 19a8 8 0 1 0 0-16 8 8 0 0 0 0 16z' });
      case 'Filter':
        return React.createElement('path', { d: 'M22 3H2l8 9.46V19l4 2v-8.54L22 3z' });
      case 'Trash2':
        return React.createElement('path', { d: 'M3 6h18M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2' });
      case 'Edit3':
        return React.createElement('path', { d: 'M12 20h9M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z' });
      case 'CheckCircle2':
        return React.createElement('path', { d: 'M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zM9 12l2 2 4-4' });
      case 'ArrowUpRight':
        return React.createElement('path', { d: 'M7 17 17 7M7 7h10v10' });
      case 'ArrowDownLeft':
        return React.createElement('path', { d: 'M17 7 7 17M17 17H7V7' });
      case 'PieChart':
        return React.createElement('path', { d: 'M21.21 15.89A10 10 0 1 1 8 2.83M22 12A10 10 0 0 0 12 2v10z' });
      case 'Target':
        return React.createElement('path', { d: 'M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zM12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12zM12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4z' });
      case 'LineChart':
        return React.createElement('path', { d: 'M3 3v18h18M18 9l-5 5-4-4-3 3' });
      case 'Award':
        return React.createElement('circle', { cx: '12', cy: '8', r: '7' });
      default:
        return React.createElement('circle', { cx: '12', cy: '12', r: '8' });
    }
  };

  // Convert kebab-case or camelCase name to data-lucide attribute format
  const lucideName = name.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();

  return React.createElement('svg', {
    ref: iconRef,
    'data-lucide': lucideName,
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: '2',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    className: `inline-block shrink-0 ${className}`
  }, svgFallback());
}
