declare namespace NodeJS{
    interface ProcessEnv{
        DB_HOST:string
        PORT:number
        DB_PORT:number
        DB_USER:string
        DB_PASSWORD:string
        DB_NAME:string
        HASH_SALT:number
    }
}
