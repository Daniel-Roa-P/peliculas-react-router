class session {
    
    constructor(user, isAdmin, debt, updateDebt, articles, includeArticules) {
        
        this.setUser(user);
        this.setIsAdmin(isAdmin);
        this.setDebt(debt);
        this.setUpdateDebt(updateDebt);
        this.setArticles(articles);
        this.setIncludeArticules(includeArticules);

    }

    setUser(newUser) {
        
        newUser = newUser.trim();
        if (newUser === '') {
            throw'Enter an Employee name';
        }
        this.user = newUser;
    
    }

    getUser() {
        
        return this.user;

    }

    setIsAdmin(newIsAdmin) {

        if (newIsAdmin === null) {
            throw'Enter an Employee name';
        }
        this.isAdmin = newIsAdmin;
    
    }

    getIsAdmin() {
        
        return this.isAdmin;

    }

    setDebt(newDebt) {
        
        if (newDebt < 0) {
            throw'Enter an Employee name';
        }
        this.debt = newDebt;
    
    }

    getDebt() {
        
        return this.debt;

    }

    setUpdateDebt(newUpdateDebt) {
        
        if (newUpdateDebt === null) {
            throw'Enter an Employee name';
        }
        this.updateDebt = newUpdateDebt;
    
    }

    getUpdateDebt() {
        
        return this.updateDebt;

    }

    setIncludeArticules(newIncludeArticles) {
        
        if (newIncludeArticles === null) {
            throw'Enter an Employee name';
        }
        this.includeArticules = newIncludeArticles;
    
    }

    getIncludeArticules() {
        
        return this.includeArticules(this.user, this.articles);

    }

    increaseDebt(newDebt){

        this.debt = this.debt + newDebt;

    }

    setArticles(articles){

        if (articles === null) {
            throw'Enter an Employee name';
        }
        this.articles = articles;

    }

    getArticles() {
        
        return this.articles;

    }

    addArticle(movie){
        
        this.articles.push(movie);
 
    }

    removeArticle(id){

        console.log(this.articles);
        const articleIndex = this.articles.findIndex(article => article.id === id);
        this.articles.splice(articleIndex,1); 
        console.log(this.articles);

    }

}

export { session };