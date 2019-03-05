const path = require('path')

module.exports = (baseConfig, env, defaultConfig) => {
  const config = defaultConfig

  // Remove useless loaders
  config.module.rules = defaultConfig.module.rules.filter(rule => (
    !rule.test.test('.svg')
    && !rule.test.test('.mp4')
    && !rule.test.test('.css')
    && !rule.test.test('.md')
    && !rule.test.test('.ttf')
  ))

  // Add SASS loader based on Vue CLI loader, but without CSS extraction which breaks the build
  config.module.rules.push({
    test: /\.scss$/,
    use: [
      {
        loader: 'vue-style-loader',
        options: {
          sourceMap: false,
        }
      },
      {
        loader: 'css-loader',
        options: {
          sourceMap: false
        }
      },
      {
        loader: 'sass-loader',
        options: {
          sourceMap: false
        }
      }
    ]
  })

  // Add SVG loader
  config.module.rules.push({
    test: /\.svg$/,
    loader: 'vue-svg-loader',
    options: {
      svgo: {
        plugins: [
          {
            prefixIds: true,
          }
        ]
      }
    }
  })

  // Add URL loader
  config.module.rules.push({
    test: /\.(png|jpg|gif)$/i,
    loader: 'url-loader',
    options: {
      limit: 8192
    }
  })

  // Add `@` alias which resolves to the `/` directory
  config.resolve.alias['@'] = path.resolve(__dirname, '../')

  return config
}
