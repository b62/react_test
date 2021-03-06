export default class ApiNavigation {
    /**
     * Dummy API
     * @param action
     * @returns {Promise}
     */
    static getList(action) {

        const timeout = 3000;

        return new Promise(resolve => {
            setTimeout(()=>{
                //dummy users list
                let users = [];
                for (let x = 1; x <=28; x++) {
                    users.push({
                        id: x,
                        username: 'Gena ' + x,
                        job: 'Job ' + x
                    });
                }

                resolve(users);

            }, timeout);
        })

    }

}