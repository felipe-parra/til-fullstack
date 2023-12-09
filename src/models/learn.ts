import { modelOptions, prop } from "@typegoose/typegoose";

@modelOptions({
  schemaOptions: { collection: "learns" },
  options: { customName: "Learn" },
})
export class Learn {
  @prop({
    required: true,
    unique: true,
  })
  public title: string;

  @prop({
    required: false,
  })
  public description: string;

  @prop({ default: [] })
  public tags: string[];

  @prop()
  public createdAt: Date;
}
