import{Column, 
    Entity, 
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    BaseEntity
}from'typeorm'

@Entity()
export class User extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    email: string

    @Column()
    name: string

    @Column()
    lastname: string

    @Column()
    phone: string

    @Column({
        nullable:true
    })
    image: string

    @Column({
        nullable:true
    })
    is_available: boolean

    @Column({
        nullable:true
    })
    session_token: string

    @Column()
    password: string

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    update_at: Date;

    

}