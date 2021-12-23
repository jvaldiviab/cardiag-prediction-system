import { useEffect } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  Avatar,
  Box,
  Button,
  Divider,
  Drawer,
  Hidden,
  List,
  Typography
} from '@material-ui/core';
import {
  AlertCircle as AlertCircleIcon,
  BarChart as BarChartIcon,
  Lock as LockIcon,
  Settings as SettingsIcon,
  ShoppingBag as ShoppingBagIcon,
  User as UserIcon,
  UserPlus as UserPlusIcon,
  Users as UsersIcon
} from 'react-feather';

import NavItem from './NavItem'
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useAuthContext } from '../../hooks/useAuthContext';

const items = [
  {
    href: '/service',
    icon: BarChartIcon,
    title: 'Patients',
    val: 1
  },
  {
    href: '/dashboard/doctors',
    icon: UsersIcon,
    title: 'Doctors',
    val: 2
  },
  {
    href: '/dashboard/profile',
    icon: SettingsIcon,
    title: 'Profile',
    val: 3
  },
  {
    href: '/dashboard/addPatient',
    icon: UserPlusIcon,
    title: 'Add Patient',
    val: 4
  }
];

const user = {
  avatar: '',
  jobTitle: 'Senior Developer',
  name: 'Katarina Smith'
};



export default function DashboardSidebar({ sc }) {

  const { user, authIsReady } = useAuthContext()

  console.log(user)


  const content = (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%'
      }}
    >
      <Box
        sx={{
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'column',
          p: 2
        }}
      >
        <Avatar
          component={RouterLink}
          src={user.avatar}
          sx={{
            cursor: 'pointer',
            width: 64,
            height: 64
          }}
          to="/dashboard/profile"
        />
        <Typography
          color="textPrimary"
          variant="h5"
        >
          {user.name}
        </Typography>
        <Typography
          color="textSecondary"
          variant="body2"
        >
          {user.jobTitle}
        </Typography>
      </Box>
      <Divider />
      <Box sx={{ p: 2 }}>
        <List>
          {items.map((item) => (
            <NavItem
              sc={sc}
              href={item.href}
              key={item.title}
              title={item.title}
              icon={item.icon}
              val={item.val}
            />
          ))}
        </List>
      </Box>
      <Box sx={{ flexGrow: 1 }} />
      <Box
        sx={{
          backgroundColor: 'background.default',
          m: 2,
          p: 2
        }}
      >
        <Typography
          align="center"
          gutterBottom
          variant="h4"
        >
          Predicction System
        </Typography>

      </Box>
    </Box>
  );

  return (
    <>
      <Hidden lgUp>
        <Drawer
          anchor="left"
          variant="temporary"
          PaperProps={{
            sx: {
              width: 256
            }
          }}
        >
          {content}
        </Drawer>
      </Hidden>
      <Hidden xlDown>
        <Drawer
          anchor="left"
          open
          variant="persistent"
          PaperProps={{
            sx: {
              width: 256,
              top: 60,
              height: 'calc(100% - 64px)'
            }
          }}
        >
          {content}
        </Drawer>
      </Hidden>
    </>
  );
};

