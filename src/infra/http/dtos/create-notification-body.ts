import { IsNotEmpty, IsUUID, Length } from 'class-validator';

export class CreateNotificationBody {
  @IsNotEmpty()
  @IsUUID()
  content: string;

  @IsNotEmpty()
  @Length(5, 300)
  category: string;

  @IsNotEmpty()
  recipientId: string;
}
