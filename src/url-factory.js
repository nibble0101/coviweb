const urlFactory = {
    baseUrl: "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=health&fq=headline:(\"covid-19\")",
    extension_1:"&page=",
    extension_2:"&api-key=",
    page: null,
    set currentPage(page){
        this.page = page;
    },
    get url(){
        return this.baseUrl + this.extension_1 + this.page + this.extension_2;
    }
};

export default urlFactory;