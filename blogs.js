
class allBlogs {
    constructor() {
        setTimeout(() => {
            let a = document.getElementById('all-blogs')
            var accessKey = document.getElementById('all-blogs').accessKey;
            localStorage.removeItem('blogDetail')
            if (!a) return;
            a.innerHTML += `
            <iframe id="myHtml" src=https://durga250720.github.io/blogs/index.html?id=${accessKey} style="width:100%;height:calc(100vh - 20px);border:none"></iframe>
            `
            var iframe = document.getElementById('myHtml');
            var iframeDoc = iframe.contentWindow.document;
            if(iframeDoc.readyState === 'complete'){
             window.localStorage.setItem('id',accessKey);   
            }
        }, 300);
    }
}

listBlogs = new allBlogs();
