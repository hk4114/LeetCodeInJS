// 统计页面标签，并取最多的三个标签
function sumTag() {
   const nodeList = document.getElementsByTagName("*");
   const nodes = [...nodeList].map(node => node.nodeName);
   return nodes.reduce((pre, next) => {
      if (pre[next]) {
         pre[next] += 1
      } else {
         pre[next] = 1
      }
      return pre
   }, {})
}

function getTop() {
   return Object.entries(sumTag()).sort((a, b) => b[1] - a[1]).slice(0, 3)
}