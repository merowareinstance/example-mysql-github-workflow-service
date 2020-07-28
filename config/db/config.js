const {
  MYSQL_DATABASE: mysqlName = 'test_forest',
  MYSQL_USER: mysqlUser = 'root',
  MYSQL_PASSWORD: mysqlPassword = '',
  MYSQL_HOST: mysqlHost = '127.0.0.1',
  MYSQL_PORT: mysqlPort = '3306',
} = process.env;

module.exports = {
  test: {
      username: mysqlUser,
      password: mysqlPassword,
      database: mysqlName,
      host: mysqlHost,
      port: mysqlPort,
      dialect: "mysql"
  }
}