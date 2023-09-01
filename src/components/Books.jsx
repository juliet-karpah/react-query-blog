import { styled } from "styled-components";
import { getBooks } from "../api/api-books";
import { useQuery } from "@tanstack/react-query";
import BookCard from "./BookCard";

const Section = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin: 100px 100px;
  gap: 40px;
`;

const H1 = styled.h1`
  margin-left: 100px;
  font-size: 35px;
`;

export default function Books() {
  const { data, isLoading } = useQuery(["books"], getBooks);

  return (
    <>
      <H1> Best Sellers List </H1>
      <Section>
        {isLoading ? (
          <p>Loading ...</p>
        ) : (
          <>
            {data.results.lists[0].books.map((book) => (
              <BookCard book={book} />
            ))}
          </>
        )}
      </Section>
    </>
  );
}
