function simplifyPath(path) {
  const paths = path.split('/');
  let r = [];
  for (let i = 0; i < paths.length; i++) {
    if (paths[i] === '..') {
      r.pop()
    } else if (paths[i] && paths[i] !== '.') {
      r.push(paths[i])
    }
  }
  return '/' + r.join('/');
}