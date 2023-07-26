class session {
    
    constructor(user, isAdmin, debt, updateDebt, articles, includeArticules, removeArticle) {
        
        this.setUser(user);
        this.setIsAdmin(isAdmin);
        this.setDebt(debt);
        this.setUpdateDebt(updateDebt);
        this.setArticles(articles);
        this.setIncludeArticules(includeArticules);
        this.setRemoveArticule(removeArticle);

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
        
        return this.updateDebt(this.user, this.debt);

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

    setIncludeArticules(newIncludeArticles) {
        
        if (newIncludeArticles === null) {
            throw'Enter an Employee name';
        }
        this.includeArticules = newIncludeArticles;
    
    }

    getIncludeArticules() {
        
        return this.includeArticules(this.user, this.articles);

    }

    setRemoveArticule(newRemoveArticle) {
        
        if (newRemoveArticle === null) {
            throw'Enter an Employee name';
        }
        this.removeArticle = newRemoveArticle;
    
    }

    getRemoveArticule(id) {
        
        const articleIndex = this.articles.findIndex(article => article.id === id);
        this.debt = this.debt - this.articles[articleIndex].price;

        return this.removeArticle(this.user, id);

    }

    // funtions that doesn't update the LocalStorage

    increaseDebt(newDebt){

        this.debt = this.debt + newDebt;

    }

    addArticle(movie){
        
        this.articles.push(movie);
 
    }

}

export { session };