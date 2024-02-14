
class allBlogs {
    constructor() {
        setTimeout(() => {
            let a = document.getElementById('all-blogs')
            let accessKey = document.getElementById('all-blogs').accessKey;
            localStorage.setItem('id',accessKey);
            localStorage.removeItem('blogDetail')
            console.log(a)
            if (!a) return;
            a.innerHTML += `
            <iframe id="myHtml" src="https://durga250720.github.io/blogs/index.html" style="width:100%;height:calc(100vh - 20px);border:none"></iframe>
            `
             setTimeout(() => {
                document.getElementById('myHtml').contentWindow.postMessage({
                    key:'id',
                    value:accessKey,
                    method:'store'
                })
            }, 1000);
        }, 300);
    }
}

listBlogs = new allBlogs();
