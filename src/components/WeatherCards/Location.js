import React, { useState } from "react";
import styled from "@emotion/styled";

const Location = ({ city, country, getWeather }) => {
  const [query, setQuery] = useState("");
  const [inputmode, setInputMode] = useState(false);

  return (
    <Container>
      {!inputmode && <City onClick={() => setInputMode(true)}>{city}</City>}
      {inputmode && (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            getWeather(query);
          }}
        >
          <SearchBar>
            <SearchBox style={{ float: "left", backgroundColor: "white" }}>
              <Input
                required
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
              <Search type="submit">
                <SearchIcon src={`/img/Untitled-2.png`} />
              </Search>
            </SearchBox>
            <CancelBtn onClick={() => setInputMode(false)}>
              <CancelIcon src={`/img/Cancels.png`} />
            </CancelBtn>
            <br />
          </SearchBar>
        </form>
      )}
      <Country>{country}</Country>
    </Container>
  );
};

export default Location;

const SearchBar = styled.div`
  margin-top: 10px;
`;
const SearchBox = styled.div`
  border-radius: 8px;
  height: 27px;
`;
const Input = styled.input`
  border-radius: 8px;
  border: 0px;
  height: 27px;
  width: 90px;
`;

const Search = styled.button`
  background-color: transparent;
  border: 20px;
`;
const SearchIcon = styled.img`
  width: 15px;
  height: 15px;
  padding-right: 4px;
`;

const CancelIcon = styled.img`
  width: 27px;
  height: 27px;
`;
const CancelBtn = styled.button`
  width: 27px;
  height: 27px;
  background-color: transparent;
  border: none;
`;

const Container = styled.div`
  text-align: center;
`;

const City = styled.h1`
  font-family: "MerriWeather Sans", sans-serif;
  font-size: 1.4rem;
  position: relative;
  cursor: pointer;
  &:hover {
    top: -5px;
  }
`;

const Country = styled.h3`
  font-family: "Fira Sans", sans-serif;
  font-size: 1.2rem;
`;
