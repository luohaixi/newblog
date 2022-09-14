(function () {
    console.log('auto')
    const theme = getQuery('theme');
    // setTimeout(() => {
    //     document.body.style.display = ""
    // }, 1000);
    // document.body.style.display = "none"
    if (!theme) {
        console.log('!theme')
        window.location.href = window.location.href + "?theme=light"
    }
    initTheme(`theme-${theme}`)

})()

function getQuery(key) {
    const search = window.location.search.substr(1);
    const map = search.substr(0).split("&");
    for (let i = 0; i < map.length; i++) {
        const element = map[i];
        const query = element.split('=');
        if (query[0] == key) {
            return query[1];
        }
    }
    // return 'light'
}

function initTheme(theme = $themeList[0], firstFlag) {
    console.log('handle init')
    var $themeList = [{
        id: 'theme-dark',
        param: 'dark',
        name: '暗黑主题Î'
    }, {
        id: 'theme-light',
        param: 'light',
        name: '默认主题Î'
    }]
    const body = document.querySelector('body');
    $themeList.forEach(t => {
        body.classList.remove(t.id);
    })
    body.classList.add(theme);
}

function handleTheme(theme = $themeList[0], firstFlag) {
    console.log("handle theme")
    var $themeList = [{
        id: 'theme-dark',
        param: 'dark',
        name: '暗黑主题Î'
    }, {
        id: 'theme-light',
        param: 'light',
        name: '默认主题Î'
    }]
    const body = document.querySelector('body');
    for (let i = 0; i < $themeList.length; i++) {
        const t = $themeList[i];
        if (t.id === theme) {
            replaceParamVal('theme', t.param)
        }
        body.classList.remove(t.id);
    }
    body.classList.add(theme);
}

//替换指定传入参数的值,paramName为参数,replaceWith为新值
function replaceParamVal(paramName, replaceWith) {
    var oUrl = this.location.href.toString();
    var re = eval('/(' + paramName + '=)([^&]*)/gi');
    var nUrl = oUrl.replace(re, paramName + '=' + replaceWith);
    window.location.href = nUrl
}

function handleJump(path) {
    const theme = getQuery('theme');
    if (location.hostname == '127.0.0.1') {
        window.location.href = `${path}.html?theme=${theme}`
    } else if (location.hostname == 'luohaixi.github.io') {
        window.location.href = `/blog/${path}.html?theme=${theme}`

    } else {
        window.location.href = `${path}.html?theme=${theme}`
    }
}