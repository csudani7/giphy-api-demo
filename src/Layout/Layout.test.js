import React from "react";
import { render } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "react-query";

import PageLayout from ".";

describe("PageLayout", () => {
  it("should render PageLayout page error free", () => {
    const queryClient = new QueryClient();
    function TestPageLayout() {
      return (
        <QueryClientProvider client={queryClient}>
          <PageLayout />
        </QueryClientProvider>
      );
    }
    const { asFragment } = render(<TestPageLayout />, {});
    expect(asFragment()).toMatchSnapshot();
  });
});
