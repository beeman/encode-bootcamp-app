import {
  Anchor,
  Burger,
  Container,
  createStyles,
  Group,
  Header,
  HeaderProps,
  Paper,
  rem,
  Transition,
} from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { IconCurrencySolana } from '@tabler/icons-react'
import { ReactNode } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { UiThemeToggle } from '../theme-toggle/ui-theme-toggle'

const HEADER_HEIGHT = rem(60)

const useStyles = createStyles((theme) => ({
  root: {
    position: 'relative',
    zIndex: 1,
  },

  dropdown: {
    position: 'absolute',
    top: HEADER_HEIGHT,
    left: 0,
    right: 0,
    zIndex: 0,
    borderTopRightRadius: 0,
    borderTopLeftRadius: 0,
    borderTopWidth: 0,
    overflow: 'hidden',

    [theme.fn.largerThan('sm')]: {
      display: 'none',
    },
  },

  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '100%',
  },

  links: {
    [theme.fn.smallerThan('xs')]: {
      display: 'none',
    },
  },

  burger: {
    [theme.fn.largerThan('xs')]: {
      display: 'none',
    },
  },

  link: {
    display: 'block',
    lineHeight: 1,
    padding: `${rem(8)} ${rem(12)}`,
    borderRadius: theme.radius.sm,
    textDecoration: 'none',
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
    },

    [theme.fn.smallerThan('sm')]: {
      borderRadius: 0,
      padding: theme.spacing.md,
    },
  },

  linkActive: {
    '&, &:hover': {
      backgroundColor: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).background,
      color: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).color,
    },
  },
}))

interface AppHeaderProps extends Partial<HeaderProps> {
  links: { link: string; label: string }[]
  profile: ReactNode
}

export function UiLayoutHeader({ links, profile, ...props }: AppHeaderProps) {
  const [opened, { toggle }] = useDisclosure(false)
  const { classes, cx } = useStyles()

  const location = useLocation()

  const items = links.map((link) => (
    <Anchor
      underline={false}
      component={Link}
      key={link.label}
      to={link.link}
      className={cx(classes.link, { [classes.linkActive]: location.pathname === link.link })}
    >
      {link.label}
    </Anchor>
  ))

  return (
    <Header className={classes.root} {...props} height={HEADER_HEIGHT}>
      <Container className={classes.header}>
        <Group>
          <Link to="/" style={{ display: 'flex' }}>
            <IconCurrencySolana size={24} />
          </Link>
          <Group spacing={5} className={classes.links}>
            {items}
          </Group>
        </Group>
        <Group spacing={5} className={classes.links}>
          {profile}
          <UiThemeToggle ml={4} />
        </Group>

        <Burger opened={opened} onClick={toggle} className={classes.burger} size="sm" />

        <Transition transition="pop-top-right" duration={200} mounted={opened}>
          {(styles) => (
            <Paper className={classes.dropdown} withBorder style={styles}>
              {items}
              <Group position="apart" p="md">
                {profile}
                <UiThemeToggle />
              </Group>
            </Paper>
          )}
        </Transition>
      </Container>
    </Header>
  )
}
