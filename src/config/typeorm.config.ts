import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import {
  TypeOrmModuleOptions,
  TypeOrmOptionsFactory,
} from '@nestjs/typeorm/dist/interfaces/typeorm-options.interface';
import { User } from '../users/user.entity';
import { Report } from '../reports/report.entity';

@Injectable()
export class TypeOrmConfigService implements TypeOrmOptionsFactory {
  constructor(private configService: ConfigService) {}

  createTypeOrmOptions(): TypeOrmModuleOptions {
    return {
      type: 'sqlite',
      synchronize: false,
      database: this.configService.get<string>('DB_NAME'),
      autoLoadEntities: true,
      migrationsRun: true,
      entities: [User, Report],
    };
  }
}
