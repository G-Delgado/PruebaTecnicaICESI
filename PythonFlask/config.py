class DevelopmentConfig():
    DEBUG=True
    MYSQL_HOST = 'localhost'
    MYSQL_USER = 'rootTest'
    MYSQL_PASSWORD = '123456'
    MYSQL_DB = 'prueba_tecnica'

config = {
    'development': DevelopmentConfig
}