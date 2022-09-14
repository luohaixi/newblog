(function () {
    const theme = getItem('theme');
    handleInit(theme)
})()

/**
 * 获取localstorage参数
 * @param {*} key 
 * @returns 
 */
function getItem(key) {
    return localStorage.getItem(key);
}

/**
 * 设置localstorage参数
 * @param {*} key 
 * @param {*} value 
 */
function setItem(key, value) {
    localStorage.setItem(key, value);
}

function doTheme(theme) {
    setItem('theme', theme)
    var $themeList = [{
        id: 'theme-dark',
        param: 'dark',
        name: '暗黑主题'
    }, {
        id: 'theme-light',
        param: 'light',
        name: '默认主题'
    }]
    const body = document.querySelector('body');
    for (let i = 0; i < $themeList.length; i++) {
        const t = $themeList[i];
        body.classList.remove(t.id);
    }
    body.classList.add(theme);
}

function handleInit(theme) {
    doTheme(theme)
    if (theme === 'theme-dark') {
        document.getElementById('theme-check-box').checked = true
    }
}

// 改变主题
function handleTheme(theme) {
    if (Object.prototype.toString.call(theme) === "[object HTMLInputElement]") {
        if (!theme.checked) {
            doTheme('theme-light')
        } else {
            doTheme('theme-dark')
        }
    }
}

function handleJump(path) {
    if (location.hostname == '127.0.0.1') {
        window.location.href = `${path}.html`
    } else if (location.hostname == 'luohaixi.github.io') {
        window.location.href = `/blog/${path}.html`

    } else {
        window.location.href = `${path}.html`
    }
}