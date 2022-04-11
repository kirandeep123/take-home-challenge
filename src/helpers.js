export function debounce(fn, delay) {
  let timer = null;
  return function () {
    let context = this,
      args = arguments;
    clearTimeout(timer);
    timer = setTimeout(function () {
      fn.apply(context, args);
    }, delay);
  };
}

export function groupBy(list) {
  let groups = {};
  list.forEach(function (sectionData) {
    let list = groups[sectionData.item.type];
    if (list) {
      list.push(sectionData);
    } else {
      groups[sectionData.item.type] = [sectionData];
    }
  });
  return groups;
}

export function formatDate(secs) {
  return new Date(secs).toDateString("en-GB");
}
