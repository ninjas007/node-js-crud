// Core Module
// File System
const fs = require('fs'); 
const readline = require('readline'); // membuat inputan secara cmd

const dirPath = './data';
// jika folder ga ada
if(!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath);
}

// cek file contacts.json
const dataPath = './data/contacts.json';
if(!fs.existsSync(dataPath)) {
    fs.writeFileSync(dataPath, '[]', 'utf-8');
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const question = (question) => {
    return new Promise((resolve, reject) => {
        rl.question(question, (answer) => {
            resolve(answer);
        });
    });
};

const stopQuestion = (tambahLagi) => {
    if(tambahLagi == 1) {
        return {
            status: true,
            message: 'Tambah lagi'
        };
    } else if (tambahLagi == 2) {
        rl.close();
        return false;
    } else {
        return {
            status: false,
            message: 'Pilihan tidak ada bambang'
        };
    }
};

const saveContact = (data) => {
    // baca dulu filenya masih bentuk string
    const file = fs.readFileSync(dataPath, 'utf-8');

    // ubah file ke bentuk JSON
    const contacts = JSON.parse(file);

    // push datanya ke contacts
    contacts.push(data);

    // tulis filenya ke contacts.json
    // 2 maksudnya adalah tab spasi biar enak dibaca aja filenya
    fs.writeFileSync(dataPath, JSON.stringify(contacts, null, 2));
    console.log('Berhasil menambah data');
};

module.exports = { question, saveContact, stopQuestion };



// DEPRECATED TUTORIAL LAMA

// Tulis String File Secara Sync
// parameter baca dokumentasi
// fs.writeFileSync('test.txt', 'Hello world secara syncsad');


// secara asyncrhonous
// fs.writeFile('test.txt', 'Hello world secara asynchronous', (e) => {
//     console.log(e)
// });

// membaca file secara sync
// const data = fs.readFileSync('test.txt', 'utf-8');

// membaca file secara async
// fs.readFile('test.txt', 'utf-8', (err, data) => {
//     if(err) throw err;
//     console.log(data);   
// });


// readline
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// rl.question('Masukkan nama anda : ', (answer) => {
//     console.log(`Nama saya adalah ${answer}`);
// });