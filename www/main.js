var require = {
    baseUrl: 'js',
    paths: {
        'ionic': '../lib/ionic/js/ionic.bundle.min',
        'ocLazyLoad': '../lib/oclazyload/dist/ocLazyLoad.require.min'
    },
    shim: {
    'ionic': {   exports: 'ionic' },
            "ocLazyLoad":{
             'deps': ["ionic"]
        },
},
priority: ['ionic','ocLazyLoad']
};