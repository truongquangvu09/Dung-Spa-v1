import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import classNames from 'classnames/bind';
import styles from './Main.module.scss';
import DataTableProducts from '../ProductsManagement';
import DataTableNews from '../NewsManagement';
import DataTableUsers from '../UsersManagement';
import TabsNews from './../NewsManagement/TabNews';
import TabProducts from './../ProductsManagement/TabProducts';
const cx = classNames.bind(styles);

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}

function VerticalTabs() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box
            className={cx('tab-wrapper')}
            sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: 700 }}
        >
            <Tabs
                orientation="vertical"
                variant="scrollable"
                value={value}
                onChange={handleChange}
                aria-label="Vertical tabs example"
                sx={{ borderRight: 1, borderColor: 'divider' }}
            >
                <Tab className={cx('tab')} label="Quản lý sản phẩm" {...a11yProps(0)} />
                <Tab className={cx('tab')} label="Quản lý tin tức" {...a11yProps(1)} />
                <Tab className={cx('tab')} label="Quản lý tài khoản" {...a11yProps(2)} />
            </Tabs>
            <TabPanel value={value} index={0}>
                <TabProducts />
            </TabPanel>
            <TabPanel value={value} index={1}>
                <TabsNews />
            </TabPanel>
            <TabPanel value={value} index={2}>
                <DataTableUsers />
            </TabPanel>
        </Box>
    );
}

export default VerticalTabs;