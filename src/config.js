const path = require('path')
const fs = require('fs')

const _webpackPath = {
  background: {
    background: path.resolve(__dirname, './background/index.ts'),
  },
  contentScripts: [
    {
      name: 'insert',
      path: path.resolve(__dirname, './insert/index.tsx'),
      css: '',
    },
  ],
}

const webpackPath = {
  background: {
    ..._webpackPath.background,
  },
  contentScripts: {},
}

_webpackPath.contentScripts.forEach(script => {
  webpackPath.contentScripts[script.name] = script.path
});

module.exports = webpackPath

/**
 * 重写配置信息
 */
const profilePath = path.resolve(__dirname, '../public/manifest.json')

fs.readFile(profilePath, function(err, data) {
  let profile = JSON.parse(data.toString())

  if (!profile.background) {
    profile.background = {
      scripts: [],
      persistent: false
    }
  }else{
    profile.background.scripts = []
  }

  for (const key in _webpackPath.background) {
    profile['background'].scripts.push(`./static/js/${key}.js`)
  }

  profile['content_scripts'] = []
  _webpackPath.contentScripts.forEach(script => {
    const contentScript = {
      matches: ['<all_urls>'],
      js: [`./static/js/${script.name}.js`],
      run_at: "document_end"
    }
    if (script.css) {
      contentScript['css'] = [`./static/css/${script.css}.css`]
    }

    profile['content_scripts'].push(contentScript)
  });

  fs.writeFile(profilePath, JSON.stringify(profile, null, 2), function(_err, _data) {})
})