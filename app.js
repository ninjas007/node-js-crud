// const {question, saveContact} = require('./contacts'); // bisa pake ini
const contacts = require('./contacts');

const main = async () => {
    const nama = await contacts.question('Masukkan nama anda : ');
    const hp = await contacts.question('Masukkan no hp anda : ');
    const tambahLagi = await contacts.question('Apakah masih ingin menambah data? \r\n1. Ya. \r\n2. Tidak \r\nMasukkan Pilihan : ');
    
    const data = { nama, hp };  // object literal
    contacts.saveContact(data);

    const stop = contacts.stopQuestion(tambahLagi);
    if(stop.status) { 
        main();
    } else {
        console.log(stop.message);
        contacts.stopQuestion(2);
    }
}

main();