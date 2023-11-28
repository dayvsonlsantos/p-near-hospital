import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
// import { BasicHealthUnitsEntity } from '../basic-health-units/basic-health-units.entity';

@Entity({ name: 'users' })
export class UsersEntity {
    @PrimaryGeneratedColumn('uuid') // ou PrimaryGeneratedColumn()
    user_id: string;

    @Column({ name: 'user_full_name', nullable: false })
    user_full_name: string;

    @Column({ name: 'user_email', nullable: false })
    user_email: string;

    @Column({ name: 'user_password', nullable: false })
    user_password: string;

    // @OneToMany(() => BasicHealthUnitsEntity, basicHealthUnit => basicHealthUnit.user)
    // basicHealthUnits: BasicHealthUnitsEntity[];
}
