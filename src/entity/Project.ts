import {Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn} from "typeorm";
import {ProjectThumbnail} from "./ProjectThumbnail";
import {ProjectStats} from "./ProjectStats";

@Entity()
export class Project {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    link: string;

    @Column()
    hash: string;

    @Column()
    title: number;

    // https://typeorm.io/#/undefined/creating-a-one-to-one-relation
    // Using @JoinColumn decorator is required on the owner side of the relationship.
    @OneToOne(type => ProjectThumbnail, thumbnail => thumbnail.project, {
        cascade: true,
    })
    @JoinColumn()
    thumbnail: ProjectThumbnail;

    // https://typeorm.io/#/undefined/creating-a-one-to-one-relation
    // Using @JoinColumn decorator is required on the owner side of the relationship.
    @OneToOne(type => ProjectStats, stats => stats.project, {
        cascade: true,
    })
    @JoinColumn()
    stats: ProjectStats;

    @Column()
    aboutContents: string;

    @Column()
    numFloors: number;

    @Column()
    numRooms: number;

    @Column()
    numOtherItems: number;

    @Column({nullable: true})
    hits: number
}
