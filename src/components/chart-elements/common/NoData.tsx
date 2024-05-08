import { tremorTwMerge } from "lib";
import React, { ReactNode } from "react";
import { Flex } from "../../../components/layout-elements/Flex";
import { Text } from "../../../components/text-elements/Text";

interface NoDataProps {
  noDataContent?: ReactNode;
  className?: string;
  children?: ReactNode;
}
const NoData = ({ className, children = "No Data" }: NoDataProps) => {
  const childrenIsString = typeof children === "string";

  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      className={tremorTwMerge(
        // common
        "w-full h-full border border-dashed rounded-tremor-default",
        // light
        "border-tremor-border",
        // dark
        "dark:border-dark-tremor-border",
        className,
      )}
    >
      {childrenIsString && (
        <Text
          className={tremorTwMerge(
            // light
            "text-tremor-content text-tremor-default",
            // dark
            "dark:text-dark-tremor-content",
          )}
        >
          {children}
        </Text>
      )}

      {!childrenIsString && children}
    </Flex>
  );
};

export default NoData;
