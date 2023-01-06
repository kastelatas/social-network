import IPost from "./IPost";

export default interface IGroup {
    id: number;
    name: string;
    description: string;
    photo: string;
    posts: IPost[]
}