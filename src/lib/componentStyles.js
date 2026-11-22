export function componentStyle(name, classNames, styles) {
  return {
    className: ['geotrail-' + name, classNames?.[name]].filter(Boolean).join(' '),
    style: styles?.[name],
  };
}
