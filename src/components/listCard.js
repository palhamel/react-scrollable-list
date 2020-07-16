import React, { useState } from "react";
import styled from "styled-components";
import { rgba } from "polished";
import { ReactSortable } from "react-sortablejs";

export const ListCard = () => {
  const [state, setState] = useState([
    {
      id: 1,
      title: "Linnea",
      subtitle: "Sous chef",
      imageType: "animals",
      likes: 565,
    },
    { id: 2, title: "Bo", subtitle: "Digital prophet", likes: 205 },
    {
      id: 3,
      title: "Caroline",
      subtitle: "Chief Amazement Officer",
      imageType: "nature",
      likes: 131,
    },
    {
      id: 4,
      title: "Gustav",
      subtitle: "Genius - service technician",
      imageType: "tech",
      likes: 65,
    },
    {
      id: 5,
      title: "Daniel",
      subtitle: "Crayon Evangelist",
      imageType: "people",
      likes: 585,
    },
    {
      id: 6,
      title: "Anneli",
      subtitle: "Creator of opportunities",
      imageType: "any/grayscale",
      likes: 91,
    },
  ]);

  return (
    <Card>
      <TextHeader>Try rearrange the list:</TextHeader>
      <ReactSortable list={state} setList={setState}>
        {state.map((item) => (
          <Item key={item.id}>
            <DetailsContainer>
              <ItemImage src={`https://placeimg.com/50/50/${item.imageType}`} />
              {/* Leave this for future imports: */}
              {/* <ItemImage src={require("./placeimg_50_50_people.jpg")} /> */}
              {/* <ItemImage
              src={
                require(`/${item.title}.png`)} /> */}
              <div style={{ flex: 1 }}>
                <ItemTitle>{item.title}</ItemTitle>
                <ItemSubtitle>{item.subtitle}</ItemSubtitle>
              </div>
              <ItemLikes>
                <i className="material-icons-outlined">favorite</i>
                <span>{item.likes}</span>
              </ItemLikes>
            </DetailsContainer>
          </Item>
        ))}
      </ReactSortable>
    </Card>
  );
};

const Card = styled.div`
  position: relative;
  overflow: hidden;
  width: 300px;
  padding: 1rem 0;
  border-radius: 1rem;
  background: #f5f5fd;
  box-shadow: 0 4px 15px ${rgba("black", 0.05)};
`;

const DetailsContainer = styled.div`
  display: flex;
  align-items: center;
  width: 300px;
  border-bottom: 1px solid ${rgba("black", 0.05)};
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem 2rem 1rem 1rem;
`;

const ItemImage = styled.img`
  width: 44px;
  height: 44px;
  padding: 2px;
  margin-right: 0.75rem;
  border-radius: 50%;
  border: 1px solid ${rgba("black", 0.05)};
`;

const ItemTitle = styled.div`
  font-size: 0.875rem;
  font-weight: 700;
  color: ${rgba("black", 0.85)};
`;

const ItemSubtitle = styled.div`
  font-size: 0.75rem;
  color: ${rgba("black", 0.38)};
`;

const ItemLikes = styled.div`
  display: flex;
  align-items: center;
  font-size: 0.75rem;
  color: ${rgba("black", 0.38)};
  & > i {
    margin-right: 0.25rem;
    font-size: 1rem;
    color: #fe0f7c;
  }
`;

const TextHeader = styled.p`
  font-size: 1rem;
  font-weight: 700;
  color: ${rgba("blue", 0.75)};
  padding: 3px 0 5px 20px;
  border-bottom: 2px solid #e6e6fa;
`;
