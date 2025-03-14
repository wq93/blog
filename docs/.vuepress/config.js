const path = require('path')
function resolve (dir) {
    return path.join(__dirname, '..' ,'..', dir)
}

module.exports = {
    title: "安歌's Blog",
    base: '/blog/',
    description: 'Blog Demo',
    head: [
        ['link', { rel: 'shortcut icon', href: '/fire.ico' }]
    ],
    themeConfig: {
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Blog', link: 'https://juejin.im/user/5a96817df265da4e9c635c39/posts' },
            { text: 'Github', link: 'https://github.com/qiudongwei' },
        ],
        sidebar: [
            ['/views/DataTransfer', 'DataTransfer'],
            ['/views/MediaRecorder', 'MediaRecorder'],
            ['/views/ChineseMap', 'ChineseMap'],
            ['/views/FreeFalling', 'FreeFalling'],
            ['/views/ImageParticle', 'ImageParticle']
        ]
    },
    markdown: {
        lineNumbers: false
    },
    configureWebpack: {
        resolve: {
            extensions: ['.js', '.vue', '.json'],
            alias: {
              'vue$': 'vue/dist/vue.esm.js',
              '@': resolve('docs'),
              '@scss': resolve('docs/scss'),
              '@data': resolve('docs/data'),
              '@assets': resolve('docs/assets')
            }
        }
    }
}