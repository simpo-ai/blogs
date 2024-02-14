
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
            <embed src="https://durga250720.github.io/blogs/index.html" style="width:100%;height:calc(100vh - 20px);border:none"></embed>
            `
        }, 500);
    }
}

listBlogs = new allBlogs();
