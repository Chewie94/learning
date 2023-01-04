const tree = {
    value: 1,
    children: [
        {
            value: 2,
            children: [
                { value: 3 },
            ]
        },
        {
            value: 4,
            children: [
                { value: 5 },
                { value: 6 },
            ]
        }
    ],
};

function getTreeValues(tree) {
    const stack = [tree];
    const result = [];

    while(stack.length > 0) {
        console.log('stack-before', stack);
        const node = stack.pop();
        
        if (node.value) {
            result.push(node.value);
        }
        
        if (node.children?.length) {
            stack.push(...node.children);
        }
        
        console.log('stack-after', stack);
        console.log('result', result);
    }

    return result;
};

console.log(getTreeValues(tree));