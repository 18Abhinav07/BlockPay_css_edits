const fs = require('fs');
const path = require('path');
const solc = require('solc');

// Helper function to find import files
function findImports(importPath) {
    try {
        const resolvedPath = path.resolve(__dirname, 'contracts', importPath);
        const content = fs.readFileSync(resolvedPath, 'utf8');
        return { contents: content };
    } catch (error) {
        return { error: 'File not found' };
    }
}

// Read the Solidity source code file
const contractPath = path.resolve(__dirname, 'contracts', 'BlockPay.sol');
const contractSource = fs.readFileSync(contractPath, 'utf8');

// Compile the contract with custom import handler
const input = {
    language: 'Solidity',
    sources: {
        'BlockPay.sol': {
            content: contractSource,
        },
    },
    settings: {
        outputSelection: {
            '*': {
                '*': ['*'],
            },
        },
    },
};

const compiledContract = JSON.parse(solc.compile(JSON.stringify(input), { import: findImports }));

// Output the compiled bytecode and ABI
if (compiledContract.errors) {
    compiledContract.errors.forEach((err) => {
        console.error(err.formattedMessage);
    });
} else {
    const contract = compiledContract.contracts['BlockPay.sol']['BlockPay'];
    fs.writeFileSync('compiledContract.json', JSON.stringify(contract));
    console.log('Compilation successful!');
}
