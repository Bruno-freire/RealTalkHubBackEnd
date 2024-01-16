import { Column, CreateDateColumn, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn, Unique } from "typeorm";
import { v4 as uuidV4 } from "uuid";
import { Message } from "./message";
import { Topic } from "./topic";

@Entity("User")
@Unique(["name"])
export class User {

    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column()
    name: string

    @Column()
    email: string

    @Column()
    password: string

    @OneToMany(() => Message, message => message.author)
    messages: Message[];

    @OneToMany(() => Topic, topic => topic.user)
    topics: Topic[];

    constructor() {
        if (!this.id) {
          this.id = uuidV4();
        }
      }
}