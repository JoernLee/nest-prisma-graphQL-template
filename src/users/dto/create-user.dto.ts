import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({ description: '用户email' })
  email?: string;
  @ApiProperty({ description: '用户名称' })
  name?: string;
}
