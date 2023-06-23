
export const overFlow = (state: boolean): void => {

    if (state) {
        document.body.style.overflowY = "hidden";
    } else document.body.style.overflowY = "visible";

};


export const Prepare = <T>(type: boolean): T[] => {
    const data: T[] = [];
    for (let i = 0; i < 20; i++) {
        if (type) {
            const item = {
                id: i,
                name: `foo${i}`,
                value: `bar${i}`,
            } as T;
            data.push(item);
        } else {
            const item = {
                label: `foo${i}`,
                sort: `foo${i}`,
            } as T;
            data.push(item);
        }
    }
    return data;
};

