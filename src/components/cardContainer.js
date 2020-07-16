import React, { useState } from "react";
import styled from "styled-components";
import { rgba } from "polished";
import { ReactSortable } from "react-sortablejs";

export const Cardcontainer = () => {
  return (
    <Card>
      <h1>TEXT TEST</h1>
    </Card>
  );
};

const Card = styled.div`
  position: relative;
  overflow: hidden;
  widht: 300px;
  padding: 1rem 0;
  border-radius: 1rem;
  background: white;
  box-shadow: 0 4px 15px ${rgba("black", 0.05)};
`;
