import { ConfigModule, ConfigService } from "@nestjs/config";
import { DataSource, DataSourceOptions } from "typeorm";
import { SnakeNamingStrategy } from "typeorm-naming-strategies";

ConfigModule.forRoot({
    envFilePath:`.dev.env`,
})

const confService=new ConfigService()

export const DataSourceConfig : DataSourceOptions = {
    type:'postgres',
    host:confService.get('DB_HOST'),
    port:confService.get('DB_PORT'),
    username:confService.get('DB_USER'),
    password:confService.get('DB_PASSWORD'),
    database:confService.get('DB_NAME'),
    entities:[__dirname+'/../**/**/*.entity{.ts,.js}'],
    migrations:[__dirname+'/../../migrations/*{.ts,.js}'],
    synchronize:false,
    migrationsRun:true,
    logging:false,
    namingStrategy:new SnakeNamingStrategy(),
}


export const AppData= new DataSource(DataSourceConfig)