import BaseAnimationTimingProps from "components/chart-elements/common/BaseAnimationTimingProps";
import { Color } from "../../../lib";
import { ReactNode } from "react";

type FixedProps = {
  eventType: "dot" | "category" | "bar" | "slice" | "bubble";
  categoryClicked: string;
};

type BaseEventProps = FixedProps & {
  [key: string]: number | string;
};

export type EventProps = BaseEventProps | null | undefined;

interface BaseSparkChartProps
  extends BaseAnimationTimingProps,
    React.HTMLAttributes<HTMLDivElement> {
  data: any[];
  categories: string[];
  index: string;
  colors?: (Color | string)[];
  noDataContent?: ReactNode;
  autoMinValue?: boolean;
  minValue?: number;
  maxValue?: number;
}

export default BaseSparkChartProps;
