import { render } from "@testing-library/react";
import React, { useEffect } from "react";

import { useMatchMedia } from "./use-match-media";

describe("useMatchMedia", () => {
  const onMatch = jest.fn();
  const onNoMatch = jest.fn();
  const Wrapper = () => {
    const isMatching = useMatchMedia("(max-width: 1200px)");

    useEffect(() => {
      if (isMatching) {
        onMatch();
      } else {
        onNoMatch();
      }
    }, [isMatching]);

    return <div />;
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should call function when mq is not matching", () => {
    window.matchMedia = jest.fn().mockImplementation(() => ({
      matches: false,
      addListener: jest.fn(),
      removeListener: jest.fn(),
    }));

    render(<Wrapper />);

    expect(onNoMatch).toHaveBeenCalled();
  });

  it("should call function when mq is matching", () => {
    window.matchMedia = jest.fn().mockImplementation(() => ({
      matches: true,
      addListener: jest.fn(),
      removeListener: jest.fn(),
    }));

    render(<Wrapper />);

    expect(onMatch).toHaveBeenCalled();
  });
});
