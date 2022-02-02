import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href='tel:0619729369' > 0619729369 </LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href='mailto:booreda58@gmail.com' > booreda58@gmail.com </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan> Innovating one project after another</Slogan>
        </CompanyContainer>
        <SocialContainer>
        <SocialIcons href='https://github.com/Booreda123' target='_blank'>
          <AiFillGithub size='3rem'/>
        </SocialIcons>
        <SocialIcons href='https://www.instagram.com/zacodes/' target="_blank">
          <AiFillInstagram size='3rem'/>
        </SocialIcons>
        <SocialIcons href='https://www.linkedin.com/in/reda-ait-cheikh-a88927230/' target='_blank'>
          <AiFillLinkedin size='3rem'/>
        </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
