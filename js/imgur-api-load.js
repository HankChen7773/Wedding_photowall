const id = '3cb7dabd0f805d6'; // 填入 App 的 Client ID
const token = '52945d677b3e985c5e82ba7d1fbd96f52648a1bb'; // 填入 token
const album = '2aAnwnt'; // 相簿的 ID

const list = new Vue({
    el: '#list1',
    data: {
        user: user,
        list: null, // 準備存 ajax 後來的資料
        settingsList: {
            "async": true,
            "crossDomain": true,
            "url": "https://api.imgur.com/3/album/" + album + "/images",
            "method": "GET",
            "headers": {
                "Authorization": 'Bearer ' + token
            }
        }
    },
    mounted() {
        const self = this;
        $.ajax(self.settingsList).done(function (res) {
            console.log(res.data); // 回傳該相簿裡的圖片資料
            self.list = res.data;  // list 就是資料了，之後用 v-for 就可以倒出來
        });
    }
});

var vm = new Vue({
    el: '#app1',
    delimiters: ['${', '}'],
    data: {
        list: [
            { id: '123456789', name: '選項 1' },
            { id: '234567890', name: '選項 2' },
            { id: '345678901', name: '選項 3' },
        ],
    },
});