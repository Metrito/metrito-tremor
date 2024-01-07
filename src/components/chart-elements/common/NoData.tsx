import { tremorTwMerge } from "lib";
import React, { ReactNode } from "react";
import { Flex } from "../../../components/layout-elements/Flex";
import { Text } from "../../../components/text-elements/Text";

interface NoDataProps {
  children?: ReactNode;
}
const NoData = ({ children = "No Data" }: NoDataProps) => {
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
      )}
    >
      {childrenIsString && (
        <Text
          className={tremorTwMerge(
            // light
            "text-tremor-content",
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
