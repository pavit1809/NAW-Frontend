import * as React from 'react';
import { Icon } from '@iconify/react';
import fileTextFill from '@iconify/icons-eva/file-text-fill';
import { Speed } from '@mui/icons-material';
import camera from '@iconify/icons-eva/video-outline';
import graph from '@iconify/icons-eva/trending-up-outline';
import personAdd from '@iconify/icons-eva/person-add-outline';



// ----------------------------------------------------------------------

const getIcon = (name) => <Icon icon={name} width={22} height={22} />;

const sidebarConfig = [
  {
    title: 'Home',
    path: '/d/app',
    icon: <Speed />
  },
  {
    title: 'Upcoming Events',
    path: '/d/upcoming-events',
    icon: getIcon(camera)
  },
  {
    title: 'Directory',
    path: '/d/directory',
    icon: getIcon(graph)
  },
  {
    title: 'Inbox',
    path: '/d/inbox',
    icon: getIcon(fileTextFill)
  },
  {
    title: 'My Connections',
    path: '/d/connections',
    icon: getIcon(personAdd)
  },
  // {
  //   title: 'Connections',
  //   path: '/d/connections',
  //   icon: getIcon(personAdd)
  // },
];

export default sidebarConfig;
