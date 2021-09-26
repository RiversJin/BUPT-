// ==UserScript==
// @name         Rivers
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        *://*/jsxsd/xsxkkc/comeInXxxk
// @grant        unsafeWindow
// ==/UserScript==
(function () {
    $(document).bind('DOMSubtreeModified', async function () {
        'use strict';
        unsafeWindow.alert = function () { };
        var $ = unsafeWindow.jQuery;
        console.log("选课脚本启动");
        const regex = /javascript:xsxkOper[\(].+?[\)];/gm;
        let str = document.getElementById("mainDiv").innerHTML;
        let m;
        let tasks = [];
        while ((m = regex.exec(str)) !== null) {
            if (m.index === regex.lastIndex) {
                regex.lastIndex++;
            }
            m.forEach((match, groupIndex) => {
                console.log(`Found match, group ${groupIndex}: ${match}`);
                for (let i = 0; i < 3; ++i) {
                    tasks.push(new Promise((resolve, reject) => {
                        console.log(match);
                        eval(match)
                        resolve();
                    }));
                }
            });
        }
        await Promise.all(tasks);//并发执行
    });
})();