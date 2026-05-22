import { test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom/vitest";
import App from "../App";
import { afterEach } from "vitest";
import { cleanup } from "@testing-library/react";

afterEach(() => {
  cleanup();
});

test("renders the app title", () => {
  render(<App />);
  expect(screen.getByText(/personal project showcase app/i)).toBeInTheDocument();
});

test("shows empty state before projects are added", () => {
  render(<App />);
  expect(screen.getByText(/no projects added yet/i)).toBeInTheDocument();
});

test("adds a new project", async () => {
  const user = userEvent.setup();
  render(<App />);

  await user.type(screen.getByPlaceholderText(/project title/i), "React Lab");
  await user.type(screen.getByPlaceholderText(/project description/i), "My first project");
  await user.click(screen.getByRole("button", { name: /add new project/i }));

  expect(screen.getByText("React Lab")).toBeInTheDocument();
  expect(screen.getByText("My first project")).toBeInTheDocument();
});

test("prevents adding a blank project", async () => {
  const user = userEvent.setup();
  render(<App />);

  await user.click(screen.getByRole("button", { name: /add new project/i }));

  expect(
    screen.getByText(/please enter both a project title and description/i)
  ).toBeInTheDocument();
});

test("filters projects using search", async () => {
  const user = userEvent.setup();
  render(<App />);

  await user.type(screen.getByPlaceholderText(/project title/i), "React Lab");
  await user.type(screen.getByPlaceholderText(/project description/i), "Frontend project");
  await user.click(screen.getByRole("button", { name: /add new project/i }));

  await user.type(screen.getByPlaceholderText(/search projects/i), "React");

  expect(screen.getByText("React Lab")).toBeInTheDocument();
});

test("deletes a project", async () => {
  const user = userEvent.setup();
  render(<App />);

  await user.type(screen.getByPlaceholderText(/project title/i), "Delete Me");
  await user.type(screen.getByPlaceholderText(/project description/i), "Temporary project");
  await user.click(screen.getByRole("button", { name: /add new project/i }));

  await user.click(screen.getByRole("button", { name: /x/i }));

  expect(screen.queryByText("Delete Me")).not.toBeInTheDocument();
});