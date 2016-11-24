export default class ApiApplicationss {
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
                let apps = [];
                for (let x = 1; x <=28; x++) {
                    apps.push({
                        id: x,
                        name: 'Generated App ' + x,
                        description: 'Generated desc ' + x
                    });
                }

                resolve(apps);

            }, timeout);
        })

    }

    static addApp(action) {
        const timeout = 3000;
    }

    static editApp(action) {
        const timeout = 3000;
    }

    static deleteApp(action) {
        const timeout = 3000;
    }
}