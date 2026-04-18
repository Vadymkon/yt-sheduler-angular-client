export class Video {
  id!: string;
  title!: string;
  description!: string;
  thumbnailURL!: string;
  publishStatus!: string;
  publishDate?: Date;
  owner?: string;
}
