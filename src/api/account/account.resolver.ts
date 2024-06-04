import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Account } from './account.entity';
import { CreateAccountInput } from './dto/create-account.input';
import { AccountService } from './account.service';
import { BadRequestException, NotFoundException } from '@nestjs/common';
import { User } from '../auth/decorators/user.decorator';
import { AuthService } from '../auth/auth.service';
import { Roles } from '../auth/decorators/roles.decorator';

@Resolver('Account')
export class AccountResolver {
  constructor(
    private readonly accountService: AccountService,
    private readonly authService: AuthService,
  ) {}

  @Roles('DIRECTOR')
  @Mutation(() => Account)
  async createAccount(@Args('input') input: CreateAccountInput) {
    try {
      return await this.accountService.createAccount(input);
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  @Query(() => Account)
  async getAccountById(@Args('id') id: string) {
    try {
      return await this.accountService.getAccountById(id);
    } catch (error) {
      throw new NotFoundException('Account not found!');
    }
  }

  @Query(() => Account)
  async getAccountByToken(@User() token: string) {
    try {
      const payload = await this.authService.decodeToken(token);
      return await this.accountService.getAccountById(payload.id);
    } catch (error) {
      throw new NotFoundException('Account not found!');
    }
  }

  @Query(() => [Account])
  async getAccounts() {
    return await this.accountService.getAccounts();
  }
}
