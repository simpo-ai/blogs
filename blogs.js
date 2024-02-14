
class allBlogs {
    constructor() {
        setTimeout(() => {
            let a = document.getElementById('all-blogs')
            let accessKey = document.getElementById('all-blogs').accessKey;
            window.localStorage.setItem('id',accessKey);
            window.localStorage.removeItem('blogDetail')
            console.log(a)
            if (!a) return;
            a.innerHTML += `
            <iframe id="myHtml" src="index.html" style="width:100%;height:calc(100vh - 20px);border:none"></iframe>
            `
        }, 500);
    }
}

listBlogs = new allBlogs();
