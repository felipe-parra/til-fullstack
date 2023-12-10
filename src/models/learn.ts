import { modelOptions, prop } from "@typegoose/typegoose";

@modelOptions({
  schemaOptions: { collection: "learns", timestamps: true },
  options: { customName: "Learn", allowMixed: 0 },
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

  @prop({
    required: true,
  })
  public author: string;
}
