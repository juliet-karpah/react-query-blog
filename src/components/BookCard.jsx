import { styled } from "styled-components";

const Card = styled.div`
  border: 1px solid transparent;
  border-radius: 8px;
`;

const Link = styled.a`
  display: inline-flex;
  justify-content: center;
  padding: 8px 8px;
  text-align: center;
  font-weight: 500;
  background-color: #9900ff;
  border-radius: 8px;
  cursor: pointer;
  text-decoration: none;
  color: white;
  &:hover {
    background-color: #160224;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 50%;
  object-fit: cover;
  border-radius: 8px;
`;

const StyledDiv = styled.div`
  padding: 4px;
`;

const H5 = styled.h5`
  font-size: 24px;
  font-weight: 700;
`;

const P = styled.p`
  font-weight: 500;
  margin-bottom: 20px;
  height: 110px;
`;

export default function BookCard({ book }) {
  return (
    <>
      <Card>
        <Image src={book.book_image} />
        <StyledDiv>
          <H5> {book.title} </H5>
          <P> {book.description} </P>
          <Link target="_blank" href={book.amazon_product_url}>
            View on Amazon
          </Link>
        </StyledDiv>
      </Card>
    </>
  );
}
