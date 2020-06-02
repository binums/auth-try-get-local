import React from 'react';
import styled from 'styled-components';

const StorybookContainer = styled.div`
  background: #90a4ae;
  height: 98vh;
  display: flex;
  align-items: center;
  justify-content: center;
  & > * {
    background: white;
    max-width: 600px;
    min-width: 300px;
    padding: 1rem;
    border-radius: 3px;
  }
`;

export const StoryContainerDecorator = (storyFn) => (
  <StorybookContainer>{storyFn()}</StorybookContainer>
);
