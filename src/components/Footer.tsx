import { ActionIcon, Anchor, Container, Group, rem } from '@mantine/core';
import {
  IconBrandInstagram,
  IconBrandTwitter,
  IconBrandYoutube,
} from '@tabler/icons-react';

const links = [
  { link: '#', label: 'Contact' },
  { link: '#', label: 'Privacy' },
  { link: '#', label: 'Careers' },
];

export function Footer() {
  const items = links.map((link) => (
    <Anchor
      c="dimmed"
      key={link.label}
      href={link.link}
      lh={1}
      onClick={(event) => event.preventDefault()}
      size="sm"
    >
      {link.label}
    </Anchor>
  ));

  return (
    <Container
      size="xl"
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '1rem',
      }}
    >
      <Group>{items}</Group>

      <Group gap="xs" justify="flex-end" wrap="nowrap">
        <ActionIcon size="lg" variant="default" radius="xl">
          <IconBrandTwitter
            style={{ width: rem(18), height: rem(18) }}
            stroke={1.5}
          />
        </ActionIcon>
        <ActionIcon size="lg" variant="default" radius="xl">
          <IconBrandYoutube
            style={{ width: rem(18), height: rem(18) }}
            stroke={1.5}
          />
        </ActionIcon>
        <ActionIcon size="lg" variant="default" radius="xl">
          <IconBrandInstagram
            style={{ width: rem(18), height: rem(18) }}
            stroke={1.5}
          />
        </ActionIcon>
      </Group>
    </Container>
  );
}
