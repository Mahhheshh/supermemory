import { BaseBoxShapeUtil, HTMLContainer, TLBaseShape } from "tldraw";

type ITextCardShape = TLBaseShape<
  "Textcard",
  { w: number; h: number; content: string; extrainfo: string }
>;

export class textCardUtil extends BaseBoxShapeUtil<ITextCardShape> {
  static override type = "Textcard" as const;

  getDefaultProps(): ITextCardShape["props"] {
    return {
      w: 100,
      h: 50,
      content: "",
      extrainfo: "",
    };
  }

  component(s: ITextCardShape) {
    return (
      <HTMLContainer className="flex h-full w-full items-center justify-center">
        <div
          style={{
            height: s.props.h,
            width: s.props.w,
            pointerEvents: "all",
            background: "#2C3439",
            borderRadius: "16px",
            padding: "8px 14px",
          }}
        >
          <h1 style={{ fontSize: "15px" }}>{s.props.content}</h1>
          <p style={{ fontSize: "14px", color: "#369DFD" }}>
            {s.props.extrainfo}
          </p>
        </div>
      </HTMLContainer>
    );
  }

  indicator(shape: ITextCardShape) {
    return <rect width={shape.props.w} height={shape.props.h} />;
  }
}
