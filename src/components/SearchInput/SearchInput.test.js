import React from "react";
import { render } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "react-query";

import SearchInput from ".";

describe("SearchInput", () => {
  it("should render SearchInput page error free", () => {
    const queryClient = new QueryClient();
    function TestSearchInput() {
      return (
        <QueryClientProvider client={queryClient}>
          <SearchInput />
        </QueryClientProvider>
      );
    }
    const { asFragment } = render(<TestSearchInput />, {});
    expect(asFragment()).toMatchSnapshot();
  });
});
