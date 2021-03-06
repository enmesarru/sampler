export const delay = (fn, wait, ...args) => setTimeout(fn, wait, ...args);

export const randomColor = (brightness) => {
    const randomChannel = (brightness) => {
      let r = 255 - brightness;
      let n = 0 | ((Math.random() * r) + brightness);
      let s = n.toString(16);
      return (s.length == 1) ? '0' + s : s;
    }
    return '#' + randomChannel(brightness) + randomChannel(brightness) + randomChannel(brightness);
}