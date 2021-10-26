import React from "react";
import { render } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "react-query";

import Card from ".";

describe("Card", () => {
  it("should render Card page error free", () => {
    const queryClient = new QueryClient();
    function TestCard() {
      return (
        <QueryClientProvider client={queryClient}>
          <Card />
        </QueryClientProvider>
      );
    }
    const { asFragment } = render(<TestCard />, {});
    expect(asFragment()).toMatchSnapshot();
  });
});
