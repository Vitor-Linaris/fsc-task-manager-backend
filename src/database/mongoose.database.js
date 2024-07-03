const mongoose = require("mongoose");

const connectToDatabase = async () => {
    try {
        await mongoose.connect(
            `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@fsctaskmanagercluster.q5sddsl.mongodb.net/?retryWrites=true&w=majority&appName=FscTaskManagerCluster`
        );
        console.log("Conectado ao MongoDB com sucesso");
    } catch (error) {
        console.error("Erro ao conectar ao MongoDB:", error);
    }
};
module.exports = connectToDatabase;
