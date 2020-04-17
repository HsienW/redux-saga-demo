export const profileApiSimulation = () => {
    return new Promise((resolve, reject) => {
        const success = true;
        if (success) {
            setTimeout(() => {
                resolve({
                    userName: 'demo',
                    token: '1234567890'
                });
            }, 1000);
        } else {
            reject([]);
        }
    });
};

export const subscribeApiSimulation = () => {
    return new Promise((resolve, reject) => {
        const success = true;
        if (success) {
            setTimeout(() => {
                resolve({
                    title: 'Subscribe',
                    subscribeItem: [
                        {
                            title: 'Subscribe A',
                            number: 1
                        },
                        {
                            title: 'Subscribe B',
                            number: 2
                        }
                    ]
                });
            }, 2000);
        } else {
            reject([]);
        }
    });
};

export const userListApiSimulation = () => {
    return new Promise((resolve, reject) => {
        const success = true;
        if (success) {
            setTimeout(() => {
                resolve([
                    {
                        id: 1,
                        name: '123'
                    },
                    {
                        id: 2,
                        name: '456'
                    },
                    {
                        id: 3,
                        name: '789'
                    }
                ]);
            }, 1000);
        } else {
            reject([]);
        }
    });
};
