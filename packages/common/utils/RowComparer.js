export default function shouldRowUpdate(nextProps, currentProps) {
  return currentProps.columns !== nextProps.columns ||
    nextProps.row !== currentProps.row ||
    currentProps.colOverscanStartIdx !== nextProps.colOverscanStartIdx ||
    currentProps.colOverscanEndIdx !== nextProps.colOverscanEndIdx ||
    currentProps.colVisibleStartIdx !== nextProps.colVisibleStartIdx ||
    currentProps.colVisibleEndIdx !== nextProps.colVisibleEndIdx ||
    currentProps.isSelected !== nextProps.isSelected ||
    currentProps.isScrolling !== nextProps.isScrolling ||
    nextProps.height !== currentProps.height ||
    currentProps.isOver !== nextProps.isOver ||
    currentProps.expandedRows !== nextProps.expandedRows ||
    currentProps.canDrop !== nextProps.canDrop ||
    currentProps.forceUpdate === true ||
    compareExtraClasses(currentProps, nextProps);
}

function compareExtraClasses(current, next) {
  const extraClassesCurrent = current.extraClasses;
  const extraClassesNext = next.extraClasses;
  if (typeof extraClassesCurrent === 'function' && typeof extraClassesNext === 'function') {
    return extraClassesCurrent(current) !== extraClassesNext(next)
  }
  return extraClassesCurrent !== extraClassesNext;
}
