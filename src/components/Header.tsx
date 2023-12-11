import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Burger, Container, Group, Title } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import {
  IconBookmarks,
  IconCategory2,
  IconDeviceTvOld,
  IconHome,
} from '@tabler/icons-react';
import { useEffect } from 'react';
import { NavLink, NavLinkProps } from 'react-router-dom';

interface StyledNavLinkProps extends NavLinkProps {
  isDropdownLink?: boolean;
}

const shouldForwardNavLinkProp = (prop: string) =>
  !['isDropdownLink'].includes(prop);

const styledNavLinkConfig = {
  shouldForwardProp: shouldForwardNavLinkProp,
};

const StyledNavLink = styled(NavLink, styledNavLinkConfig)<StyledNavLinkProps>`
  display: block;
  line-height: 1;
  padding: 0.2rem 0.35rem;
  border-radius: 0.3rem;
  text-decoration: none;
  color: var(--mantine-color-dark-0);
  font-size: var(--mantine-font-size-sm);
  font-weight: 500;

  &:hover {
    background-color: var(--mantine-color-gray-4);
    color: var(--mantine-color-black);
  }

  &.active {
    position: relative;

    &::after {
      content: '';
      position: absolute;
      left: 0;
      bottom: -30%;
      width: 100%;
      height: 3px;
      background-color: var(--mantine-color-gray-4);
    }
  }

  ${({ isDropdownLink }) =>
    isDropdownLink &&
    css`
      border-radius: 0;
      background-color: black;
      padding: 1.2rem;
      text-align: left;

      &:hover {
        background: var(--mantine-color-gray-4);
      }

      &.active {
        color: var(--mantine-color-black);
        background: var(--mantine-color-gray-5);
        &::after {
          height: 0;
        }
      }
    `}
`;

interface DropdownProps {
  isOpen: boolean;
}

const StyledDropdown = styled.div<DropdownProps>`
  ${({ isOpen }) =>
    isOpen
      ? css`
          display: block;
          position: absolute;
          top: 100%;
          left: 0;
          width: 100%;
          background-color: var(--mantine-color-body);
          z-index: 10;
        `
      : css`
          display: none;
        `}
`;

const links = [
  { link: '/', label: 'Home', icon: <IconHome /> },
  { link: '/categories', label: 'Categories', icon: <IconCategory2 /> },
  { link: '/bookmarks', label: 'Bookmarks', icon: <IconBookmarks /> },
];

export default function Header() {
  const [opened, { toggle, close }] = useDisclosure(false);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth > 575) {
        close();
      }
    }
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [close]);

  const items = links.map((link) => (
    <StyledNavLink
      key={link.label}
      to={link.link}
      onClick={close}
      className={({ isActive }) => (isActive ? 'active' : '')}
      isDropdownLink={opened}
    >
      <Group gap={2}>
        {link.icon}
        {link.label}
      </Group>
    </StyledNavLink>
  ));

  return (
    <header
      style={{
        position: 'relative',
        backgroundColor: 'black',
      }}
    >
      <Container
        size="xl"
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '1rem',
        }}
      >
        <NavLink to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
          <Group gap={2}>
            <IconDeviceTvOld />
            <Title order={3}>NetMOVIE</Title>
          </Group>
        </NavLink>
        <Group gap={15} visibleFrom="xs">
          {items}
        </Group>
        <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="md" />
        <StyledDropdown isOpen={opened}>{items}</StyledDropdown>
      </Container>
    </header>
  );
}
