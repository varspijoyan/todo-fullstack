import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('todos')
export class Todos {
  @PrimaryGeneratedColumn()
  todos_id: number;

  @Column()
  title: string;

  @Column()
  message: string;

  @Column({ default: false })
  is_completed: boolean;

  @Column({ default: false })
  is_active: boolean;

  @Column({ default: false })
  is_updated: boolean;

  @Column({ default: false })
  is_deleted: boolean;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;

  @Column({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
    onUpdate: 'CURRENT_TIMESTAMP',
  })
  updated_at: Date;

  @Column({ type: 'timestamp', nullable: true })
  deleted_at: Date | null;
}
