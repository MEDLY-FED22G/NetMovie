import { Burger, Container, Group, Title } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import {
  IconBookmarks,
  IconCategory2,
  IconDeviceTvOld,
  IconHome,
} from '@tabler/icons-react';
import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Header.module.css';

const links = [
  { link: '/', label: 'Home', icon: <IconHome /> },
  { link: '/category', label: 'Categories', icon: <IconCategory2 /> },
  { link: '/bookmark', label: 'Bookmarks', icon: <IconBookmarks /> },
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
    <NavLink
      key={link.label}
      to={link.link}
      onClick={close}
      className={({ isActive }) =>
        isActive ? `${classes.link} ${classes.active}` : classes.link
      }
    >
      <Group gap={2}>
        {link.icon}
        {link.label}
      </Group>
    </NavLink>
  ));

  return (
    <header className={classes.header}>
      <Container size="xl" className={classes.inner}>
        <Group gap={2}>
          <IconDeviceTvOld />
          <Title order={3}>NetMOVIE</Title>
        </Group>
        <Group gap={15} visibleFrom="xs">
          {items}
        </Group>
        <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="md" />
        <div className={opened ? classes.dropdownOpen : classes.dropdownClosed}>
          {items}
        </div>
      </Container>
    </header>
  );
}
