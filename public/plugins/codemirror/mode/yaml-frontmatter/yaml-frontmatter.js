// CodeMirror, copyright (c) by Marijn Haverbeke and others
// Distributed under an MIT license: https://codemirror.net/LICENSE

(function (mod) {
  if (typeof exports == "object" && typeof module == "object") // CommonJS
    mod(require("../../lib/codemirror"), require("../yaml/yaml"))
  else if (typeof define == "function" && define.amd) // AMD
    define(["../../lib/codemirror", "../yaml/yaml"], mod)
  else // Plain browser env
    mod(CodeMirror)
})(function (CodeMirror) {

  var START = 0, FRONTMATTER = 1, BODY = 2

  // a mixed mode for Markdown text with an optional YAML front matter
  CodeMirror.defineMode("yaml-frontmatter", function (config, parserConfig) {
    var yamlMode = CodeMirror.getMode(config, "yaml")
    var innerMode = CodeMirror.getMode(config, parserConfig && parserConfig.base || "gfm")

<<<<<<< HEAD
    function curMode(state) {
      return state.state == BODY ? innerMode : yamlMode
=======
    function localMode(state) {
      return state.state == FRONTMATTER ? {mode: yamlMode, state: state.yaml} : {mode: innerMode, state: state.inner}
>>>>>>> 0884518 (tugas migrasi,_view_dan_delete)
    }

    return {
      startState: function () {
        return {
          state: START,
<<<<<<< HEAD
          inner: CodeMirror.startState(yamlMode)
=======
          yaml: null,
          inner: CodeMirror.startState(innerMode)
>>>>>>> 0884518 (tugas migrasi,_view_dan_delete)
        }
      },
      copyState: function (state) {
        return {
          state: state.state,
<<<<<<< HEAD
          inner: CodeMirror.copyState(curMode(state), state.inner)
=======
          yaml: state.yaml && CodeMirror.copyState(yamlMode, state.yaml),
          inner: CodeMirror.copyState(innerMode, state.inner)
>>>>>>> 0884518 (tugas migrasi,_view_dan_delete)
        }
      },
      token: function (stream, state) {
        if (state.state == START) {
          if (stream.match('---', false)) {
            state.state = FRONTMATTER
<<<<<<< HEAD
            return yamlMode.token(stream, state.inner)
          } else {
            state.state = BODY
            state.inner = CodeMirror.startState(innerMode)
=======
            state.yaml = CodeMirror.startState(yamlMode)
            return yamlMode.token(stream, state.yaml)
          } else {
            state.state = BODY
>>>>>>> 0884518 (tugas migrasi,_view_dan_delete)
            return innerMode.token(stream, state.inner)
          }
        } else if (state.state == FRONTMATTER) {
          var end = stream.sol() && stream.match(/(---|\.\.\.)/, false)
<<<<<<< HEAD
          var style = yamlMode.token(stream, state.inner)
          if (end) {
            state.state = BODY
            state.inner = CodeMirror.startState(innerMode)
=======
          var style = yamlMode.token(stream, state.yaml)
          if (end) {
            state.state = BODY
            state.yaml = null
>>>>>>> 0884518 (tugas migrasi,_view_dan_delete)
          }
          return style
        } else {
          return innerMode.token(stream, state.inner)
        }
      },
<<<<<<< HEAD
      innerMode: function (state) {
        return {mode: curMode(state), state: state.inner}
      },
      blankLine: function (state) {
        var mode = curMode(state)
        if (mode.blankLine) return mode.blankLine(state.inner)
=======
      innerMode: localMode,
      indent: function(state, a, b) {
        var m = localMode(state)
        return m.mode.indent ? m.mode.indent(m.state, a, b) : CodeMirror.Pass
      },
      blankLine: function (state) {
        var m = localMode(state)
        if (m.mode.blankLine) return m.mode.blankLine(m.state)
>>>>>>> 0884518 (tugas migrasi,_view_dan_delete)
      }
    }
  })
});
