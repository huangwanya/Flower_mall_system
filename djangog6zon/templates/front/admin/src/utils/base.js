const base = {
    get() {
        return {
            url : "http://localhost:8080/djangog6zon/",
            name: "djangog6zon",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/front/dist/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "基于Django框架的小时间鲜花商城系统"
        } 
    }
}
export default base
