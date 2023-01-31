import { Repository } from 'typeorm';
import { TokenEntity } from './entities/token.entity';
export declare class TokenService {
    private tokenRepo;
    constructor(tokenRepo: Repository<TokenEntity>);
    saveToken(data: any): Promise<void>;
    deleteToken(token: any): Promise<void>;
    findOneTOken(user_id: any): Promise<TokenEntity>;
}
