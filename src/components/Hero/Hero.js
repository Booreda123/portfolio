import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
          Welcome To <br/>
          My Personal Portfolio
      </SectionTitle>
      <SectionText>
        I am experienced web developer who loves making complex and modern projects. 
      </SectionText>
      <Button onClick={() => window.location = '#about'} >Learn more</Button>
    </LeftSection>
  </Section>
);

export default Hero;