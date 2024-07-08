const notFoundError = (res, message) => {
    return res.status(404).send(message);
};

const objectIdCastError = (res) => {
    return res
        .status(500)
        .send("Ocorreu um erro ao recuperar este dado no banco de dados.");
};

module.exports = {
    notFoundError,
    objectIdCastError,
};
