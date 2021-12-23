import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { styled } from '@material-ui/core/styles';
import DashboardSidebar from './DashboardSidebar';
import Prediction from '../ia/Prediction';
import Patients from './patients/Patients';
import Doctors from './doctors/Doctors';
import Profile from './profile/Profile';
import AddPatient from './patients/AddPatient';
const DashboardLayoutRoot = styled('div')(
  ({ theme }) => ({
    backgroundColor: theme.palette.background.default,
    display: 'flex',
    height: '100%',
    overflow: 'hidden',
    width: '100%'
  })
);

const DashboardLayoutWrapper = styled('div')(
  ({ theme }) => ({
    display: 'flex',
    flex: '1 1 auto',
    overflow: 'hidden',
    paddingTop: 64,
    [theme.breakpoints.up('lg')]: {
      paddingLeft: 256
    }
  })
);

const DashboardLayoutContainer = styled('div')({
  display: 'flex',
  flex: '1 1 auto',
  overflow: 'hidden'
});

const DashboardLayoutContent = styled('div')({
  flex: '1 1 auto',
  height: '100%',
  overflow: 'auto'
});

export default function DashboardLayout({ currentContent, scC }) {


  return (
    <DashboardLayoutRoot>
      <DashboardSidebar sc={scC} />
      <DashboardLayoutWrapper>
        <DashboardLayoutContainer>
          <DashboardLayoutContent>

            {currentContent === 1 && <Patients />}
            {currentContent === 2 && <Doctors />}
            {currentContent === 3 && <Profile />}
            {currentContent === 4 && <AddPatient sc={scC} />}

          </DashboardLayoutContent>
        </DashboardLayoutContainer>
      </DashboardLayoutWrapper>

    </DashboardLayoutRoot>
  );
};


