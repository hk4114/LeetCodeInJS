var isAnagram = function (s, t) {
  return s.length === t.length && [...s].sort().join('') === [...t].sort().join('')
};

var isAnagram = function (s, t) {
  const d = {};

  if (s.length != t.length) return false;

  for (let i = s.length - 1; i > -1; i--) {
    d[s[i]] = (d[s[i]] || 0) + 1;
  }
  for (let i = t.length - 1; i > -1; i--) {
    if (!d.hasOwnProperty(t[i])) return false;
    if (--d[t[i]] < 0) return false;
  }
  return true;
};