import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn, Unique } from "typeorm";
import { v4 as uuidV4 } from "uuid";
import { User } from "./user";
import { Topic } from "./topic";

@Entity("Message")
export class Message {

    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column()
    content: string

    @ManyToOne(() => User, user => user.id)
    @JoinColumn({ name: "author" })
    author: string

    @ManyToOne(() => Topic, topic => topic.messages)
    @JoinColumn({ name: "topicId" })
    topic: Topic;

    @CreateDateColumn({default: Date.now()})
    created_at: Date;

    constructor() {
        if (!this.id) {
          this.id = uuidV4();
        }
      }
}