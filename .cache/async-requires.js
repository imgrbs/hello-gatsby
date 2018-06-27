// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-pages-a-js": require("gatsby-module-loader?name=component---src-pages-a-js!/Users/alchemist/Git/hellogastby/src/pages/a.js"),
  "component---src-pages-index-js": require("gatsby-module-loader?name=component---src-pages-index-js!/Users/alchemist/Git/hellogastby/src/pages/index.js")
}

exports.json = {
  "a.json": require("gatsby-module-loader?name=path---a!/Users/alchemist/Git/hellogastby/.cache/json/a.json"),
  "index.json": require("gatsby-module-loader?name=path---index!/Users/alchemist/Git/hellogastby/.cache/json/index.json")
}

exports.layouts = {

}