const benchmark = fns => 
    fns.forEach(fn => {
        console.log('------------')
        let name = fn.toString();
        name = name.substr('function '.length);
        name = name.substr(0, name.indexOf('('));
        console.log('\x1b[33m%s\x1b[0m', name)
        console.time('Duration');
        const res = fn();
        console.timeEnd('Duration');
        console.log('\x1b[32m%s\x1b[0m', `Result: ${res}`);
    })

    module.exports = benchmark