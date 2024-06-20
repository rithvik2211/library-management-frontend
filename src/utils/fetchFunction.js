


export async function fetchData(func, state, propData) {
    try {
        console.log(propData);
        let temp = await func(propData);
        console.log('data fetched');
        if (temp.data) {
            state(temp.data);
        } else {
            state();
        }
    } catch (error) {
        console.log(error);
    }
}