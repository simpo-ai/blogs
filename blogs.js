var accessKey;
class allBlogs {
    constructor() {
        setTimeout(() => {
           if(document.getElementById('all-blogs') != null){
                let a = document.getElementById('all-blogs')
                accessKey = document.getElementById('all-blogs').accessKey;
                localStorage.setItem('id',accessKey);
                window.localStorage.removeItem('blogDetail')
                console.log(a)
                if (!a) return;
                a.innerHTML += `
                <iframe id="myHtml" src=https://simpo-ai.github.io/blogs/index.html?id=${accessKey} style="width:100%;height:calc(100vh - 20px);border:none"></iframe>
                `
            }
            else{
                let a = document.getElementById('homePageDispaly')
                accessKey = document.getElementById('homePageDispaly').accessKey;
                localStorage.setItem('id',accessKey);
                window.localStorage.removeItem('blogDetail')
                console.log(a)
                if (!a) return;
                a.innerHTML += `
                <iframe id="myHtml" src=https://simpo-ai.github.io/blogs/home-page.html?id=${accessKey} style="width:100%;height:calc(100vh - 20px);border:none"></iframe>
                `
            }
        }, 300);
    }
}

listBlogs = new allBlogs();
