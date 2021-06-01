// import { getPage } from "next-page-tester";
import { render, waitFor, screen } from "@testing-library/react";

import HeadingLine from "@/components/element/HeadingLine";
import Loading from "@/components/layout/Loading";
import Main from "../src/pages/index";

/**
 * @jest-environment jsdom
 */

test("Main component", async () => {
  const { queryByText } = render(<Main />);

  await waitFor(() => expect(queryByText("MORE..")).toBeTruthy(), {
    timeout: 1500,
  });

  // const { render } = await getPage({
  //   route: "/index",
  // });

  // render();
  // expect(screen.getByText("ALL CYCLE")).toBeInTheDocument();

  // await screen.findByText("TOP LANK ITEMS");
});
