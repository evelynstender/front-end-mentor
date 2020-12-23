import { render, screen, } from "@testing-library/react";
import ProfileCard from "./ProfileCard";

test("renders card", () => {
    render(<ProfileCard />);
    const linkElement = screen.getByText(/Victor Crest/i);
    expect(linkElement).toBeInTheDocument();
});
