import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: 3, text: 'Employee of the year Award'},
  { number: 35, text: 'Projects completed', },
  { number: 115 , text: 'youtube followers', },
  { number: 3 , text: 'languages spoken', }
];

const Acomplishments = () => (
  <Section>
    <SectionTitle> Personal Accomplishments </SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxNum> {card.number} +</BoxNum>
          <BoxText> {card.text} </BoxText>
        </Box>
      ))}
    </Boxes>
  </Section>
);

export default Acomplishments;
