import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import { setupServer } from "msw/node";
import { HttpResponse, graphql } from "msw";

const server = setupServer(
  graphql.query("ListPets", () => {
    console.log("here");
    return HttpResponse.json({
      data: {
        pets: [
          { id: 1, name: "Tom" },
          { id: 2, name: "Jerry" },
          { id: 3, name: "Spike" },
        ],
      },
    });
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
