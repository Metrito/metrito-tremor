import React from "react";
import { ReferenceLine, Label, LabelProps, ReferenceLineProps } from "recharts";

interface RGB {
  r: number;
  g: number;
  b: number;
}

// Function to convert rgb color to hex color
function rgbToHex(rgb: RGB): string {
  const { r, g, b } = rgb;
  return `#${((1 << 24) | (r << 16) | (g << 8) | b).toString(16).slice(1)}`;
}

// Function to determine if color is light or dark
function isLight(color: string): boolean {
  // If color is in rgb format, convert it to hex
  if (color.startsWith("rgb")) {
    const [r, g, b] = color.match(/\d+/g)!.map(Number);
    color = rgbToHex({ r, g, b });
  }

  const c = color.substring(1); // strip #
  const rgb = parseInt(c, 16); // convert rrggbb to decimal
  const r = (rgb >> 16) & 0xff; // extract red
  const g = (rgb >> 8) & 0xff; // extract green
  const b = (rgb >> 0) & 0xff; // extract blue
  const luma = 0.2126 * r + 0.7152 * g + 0.0722 * b; // per ITU-R BT.709
  return luma > 128;
}

interface CustomizedLabelProps extends LabelProps {
  viewBox?: {
    x: number;
    y: number;
    width: number;
    height: number;
  };
  strokeColor: string;
}

// Custom label component
const CustomizedLabel: React.FC<CustomizedLabelProps> = (props) => {
  const { viewBox, strokeColor, value } = props;
  const textRef = React.useRef<SVGTextElement>(null);

  const [bbox, setBbox] = React.useState({ width: 0, height: 0 });

  React.useEffect(() => {
    if (textRef.current) {
      setBbox(textRef.current.getBBox());
    }
  }, [value]);

  if (!viewBox) {
    return null;
  }

  const { x, y, width, height } = viewBox;

  const PAD = 5;
  const labelWidth = bbox.width + 2 * PAD; // Here we adjust the label width based on the text length
  const labelHeight = 20;
  const adjustedX = 70 + PAD;
  const adjustedY = y + height / 2 - labelHeight / 2;
  const textColor = isLight(strokeColor) ? "black" : "white";

  return (
    <g>
      <rect
        x={adjustedX}
        y={adjustedY}
        width={labelWidth}
        height={labelHeight}
        fill={strokeColor}
        rx={5}
        ry={5}
      />
      <text
        ref={textRef} // Here we apply the ref to the text element
        x={adjustedX + labelWidth / 2}
        y={adjustedY + labelHeight / 2}
        fill={textColor}
        textAnchor="middle"
        dominantBaseline="central"
        fontSize={12}
      >
        {value}
      </text>
    </g>
  );
};

interface CustomizedReferenceLineProps extends ReferenceLineProps {
  y: number;
  strokeColor: string;
  label: string;
}

// Custom ReferenceLine component
export const CustomizedReferenceLine: React.FC<CustomizedReferenceLineProps> = ({
  y,
  strokeColor,
  label,
}) => (
  <ReferenceLine y={y} stroke={strokeColor} strokeWidth={1.5}>
    <Label value={label} content={<CustomizedLabel strokeColor={strokeColor} />} />
  </ReferenceLine>
);
