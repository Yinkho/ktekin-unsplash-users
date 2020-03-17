import React, { Fragment } from 'react';
import { useHistory } from 'react-router-dom';
import { Navbar, Bar, LinkTitle } from './Header.styles';
import { connect } from 'react-redux';
import { goToTab, setTab } from '../../actions/tab';

const Header = ({ match, goToTab, setTab, tabReducer }) => {

    const history = useHistory();

    const changeTab = path => {
        setTab(path);
        goToTab(path, history);
    }

    const renderTab = array => {
        return array.tab.map((tab, i) => {
            if(array.tab.length !== i+1) {
                return (
                    <Fragment key={i}>
                        <LinkTitle 
                            onClick={() => changeTab(tab.path)} activeLink={tabReducer.activeTab === tab.path}
                        >
                            {tab.title}
                        </LinkTitle>
                        <Bar />
                    </Fragment>
                )
            } else {
                return (
                    <LinkTitle 
                        key={i}
                        onClick={() => changeTab(tab.path)}
                        activeLink={tabReducer.activeTab === tab.path}
                    >
                        {tab.title}
                    </LinkTitle>
                )
            }
        })
    }

    return (
        <Navbar>
            {renderTab(tabReducer)}
        </Navbar>
    );
}

const mapStateToProps = state => ({
    tabReducer: state.tabReducer
})

export default connect(mapStateToProps, { setTab, goToTab })(Header);