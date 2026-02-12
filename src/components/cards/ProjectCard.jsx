
import React from "react";
import styled from "styled-components";

const Card = styled.div`
  width: 300px;
  border: 1px solid #e2e2e2;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
`;

const Image = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
`;

const Content = styled.div`
  padding: 16px;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h3`
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 8px;
`;

const Desc = styled.p`
  font-size: 14px;
  color: #555;
  margin-bottom: 12px;
`;

const TagContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-bottom: 12px;
`;

const Tag = styled.span`
  font-size: 12px;
  background-color: #e0f2fe;
  color: #0369a1;
  padding: 3px 8px;
  border-radius: 12px;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-top: auto;
`;

const Button = styled.a`
  text-decoration: none;
  padding: 6px 12px;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 500;
  color: #fff;
  background-color: ${(props) => (props.live ? "#16a34a" : "#333")};
  &:hover {
    opacity: 0.9;
  }
`;

const ProjectCard = ({ project }) => {
  return (
    <Card>
      <Image src={project.image} alt={project.title} />
      <Content>
        <Title>{project.title}</Title>
        <Desc>{project.description}</Desc>

        {/* Tags */}
        <TagContainer>
          {project.tags.map((tag, idx) => (
            <Tag key={idx}>{tag}</Tag>
          ))}
        </TagContainer>

        {/* Buttons */}
        <ButtonContainer>
          {project.github && (
            <Button href={project.github} target="_blank" rel="noopener noreferrer">
              GitHub
            </Button>
          )}
          {project.webapp && (
            <Button
              href={project.webapp}
              target="_blank"
              rel="noopener noreferrer"
              live
            >
              Live
            </Button>
          )}
        </ButtonContainer>
      </Content>
    </Card>
  );
};

export default ProjectCard;
