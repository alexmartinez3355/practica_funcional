const {connect} = require('mongoose');

const user = 'alexismartinez';
const password = 'MRTVi8xigudRBHRq';
const dbName = 'rick_and_morty';
const uri = `mongodb+srv://${user}:${password}@serviap.ocxs8yd.mongodb.net/${dbName}?retryWrites=true&w=majority`;

const connectDB = async () => {
    try {
        await connect(uri);
        console.log('MongoDB Connected');
    } catch (error) {
        console.log('Error al conectar: ', error);
    }
};

module.exports = {connectDB}