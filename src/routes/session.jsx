class session {
    
    constructor(user, isAdmin, debt, updateDebt, articles) {
        
        this.setUser(user);
        this.setIsAdmin(isAdmin);
        this.setDebt(debt);
        this.setUpdateDebt(updateDebt);
        this.setArticles(articles);

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

}

export { session };