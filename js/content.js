// 8: "KEY_RETURN",
// 13: "KEY_OK",
// 33: "KEY_PAGEUP",
// 34: "KEY_PAGEDOWN",
// 37: "KEY_LEFT",
// 38: "KEY_UP",
// 39: "KEY_RIGHT",
// 40: "KEY_DOWN",
// 46: "KEY_DEL",
// 48: "KEY_0",
// 49: "KEY_1",
// 50: "KEY_2",
// 51: "KEY_3",
// 52: "KEY_4",
// 53: "KEY_5",
// 54: "KEY_6",
// 55: "KEY_7",
// 56: "KEY_8",
// 57: "KEY_9",
// 187: "KEY_VOLUME_UP",
// 189: "KEY_VOLUME_DOWN",
// 222: 'KEY_VOLUME_SILENCE',
// 257: "KEY_CHANNEL_UP",
// 258: "KEY_CHANNEL_DOWN",
// 259: "KEY_VOLUME_UP",
// 260: "KEY_VOLUME_DOWN",
// 261: 'KEY_VOLUME_SILENCE',
// 262: 'KEY_TRACK',
// 263: 'KEY_PAUSE_PLAY',
// 264: 'KEY_FAST_FORWARD',
// 265: 'KEY_FAST_REWIND',
// 269: "KEY_DEL",
// 270: "KEY_STOP",
// 271: "KEY_DEL",
// 771: "KEY_POS",
// 272: "KEY_HOME_PAGE",
// 275: "KEY_LIVE_BROADCAST",
// 276: "KEY_REVIEW",
// 277: "KEY_DIBBLING",
// 278: "KEY_INFORMATION",
// 279: "KEY_LAUNCHER", // key code of launcher of zte stb
// 280: "KEY_DEL",
// 287: "KEY_LAUNCHER", // key code of launcher of huawei and skyworth
// 768: "EVENT_UTILITY",
// 1108: "KEY_LIVE_BROADCAST",
// 1110: "KEY_REVIEW",
// 1109: "KEY_DIBBLING",
// 1112: "KEY_INFORMATION"

const keyMap = {
    top: 38,
    right: 39,
    bottom: 40,
    left: 37,
    goback: 8,
    home: 272,
}

chrome.runtime.onMessage.addListener((msg, sender, response) => {

    document.onkeydown({ keyCode: keyMap[msg['posi']] })
    // const script = document.createElement('script')
    // const url = chrome.runtime.getURL("inject.js")
    // script.src = url
    // // script.textContent = `document.onkeydown({ keyCode: ${keyMap[msg['posi']]} })`
    // // script.textContent = `alert(1)`
    // sessionStorage.setItem('js', 'alert(1)')
    // console.log(script, url)
    // document.body.appendChild(script)


});