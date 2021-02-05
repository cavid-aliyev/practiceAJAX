'use strict';

console.log('Request data...');


const req = new Promise((resolve, reject) => {

    setTimeout(()=>{
        console.log('In process...');
    
        const product = {
            names: 'TV',
            price: 2000,
        };
    
        resolve(product);
    }, 2000);
});

req.then((product) => {
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            product.status = 'order';
            resolve(product);
        }, 2000);
    });
}).then(data =>{
    data.modify = true;
    return data; 
}).then((data)=>{
    console.log(data); //equal with product
}).catch(() => {
    console.error('Something went wrong');
}).finally(() =>{
    console.log('Finally');
});


const test = time =>{
    return new Promise(resolve =>{
        setTimeout(() => resolve(), time);
    });
};

// test(1000).then(() => console.log('1000 ms'));
// test(1000).then(() => console.log('2000 ms'));

Promise.all([test(1000), test(2000)]).then(() => {
    console.log('ALL');
});

Promise.race([test(1000), test(2000)]).then(() => {
    console.log('ALL');
});