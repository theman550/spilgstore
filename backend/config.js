const config = {
    db: {
        host: "localhost",
        user: "backend",
        password: "backendpassword",
        database: "SpilgStore",
        waitForConnections: true,
        connectionLimit: 10,
        queueLimit: 0
    },
    itemsPerPage: 10,
}

module.exports = config

