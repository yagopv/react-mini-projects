export function slugify(string) {
  const a =
    'àáâäæãåāăąçćčđďèéêëēėęěğǵḧîïíīįìłḿñńǹňôöòóœøōõőṕŕřßśšşșťțûüùúūǘůűųẃẍÿýžźż·/_,:;';
  const b =
    'aaaaaaaaaacccddeeeeeeeegghiiiiiilmnnnnoooooooooprrsssssttuuuuuuuuuwxyyzzz------';
  const p = new RegExp(a.split('').join('|'), 'g');

  return string
    .toString()
    .toLowerCase()
    .replace(/\s+/g, '-') // Replace spaces with -
    .replace(p, (c) => b.charAt(a.indexOf(c))) // Replace special characters
    .replace(/&/g, '-and-') // Replace & with 'and'
    .replace(/[^\w\-]+/g, '') // Remove all non-word characters
    .replace(/\-\-+/g, '-') // Replace multiple - with single -
    .replace(/^-+/, '') // Trim - from start of text
    .replace(/-+$/, ''); // Trim - from end of text
}

export function getFriendlyDate(value) {
  if (value) {
    const intervals = {
      y: 31536000,
      M: 2592000,
      w: 604800,
      d: 86400,
      h: 3600,
      m: 60,
      s: 1,
    };

    const seconds = Math.floor((new Date() - new Date(value)) / 1000);

    let counter: number;
    for (const interval of Object.keys(intervals)) {
      counter = Math.floor(seconds / intervals[interval]);
      if (counter > 0) {
        return counter + interval;
      }
    }
    return '0s';
  }
  return value;
}
