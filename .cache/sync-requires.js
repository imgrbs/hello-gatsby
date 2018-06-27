// prefer default export if available
const preferDefault = m => m && m.default || m


exports.layouts = {

}

exports.components = {
  "component---src-pages-a-js": preferDefault(require("/Users/alchemist/Git/hellogastby/src/pages/a.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/alchemist/Git/hellogastby/src/pages/index.js"))
}

exports.json = {
  "a.json": require("/Users/alchemist/Git/hellogastby/.cache/json/a.json"),
  "index.json": require("/Users/alchemist/Git/hellogastby/.cache/json/index.json")
}