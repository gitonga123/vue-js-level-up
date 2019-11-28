class Singleton {
    static instance;
    constructor() {

    }
    static getInstance() {
        if (Singleton.instance) {
            return Singleton.instance;
        }

        Singleton.instance = new Singleton();

        return Singleton.instance;
    }
}