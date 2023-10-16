"use client"
import Link from "next/link";
import { Container, Form, Nav, Navbar } from "react-bootstrap";
import logos from '@/components/assests/png/shopify.png'
import Image from "next/image";
// import './navbar.css'
import { TopBar, ActionList, Icon, Frame, Text, AppProvider } from '@shopify/polaris';
import { ArrowLeftMinor, QuestionMarkMajor } from '@shopify/polaris-icons';
import { useState, useCallback } from 'react';
const NavHeader = ({setToggle, toggle}) => {
    const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
    const [isSecondaryMenuOpen, setIsSecondaryMenuOpen] = useState(false);
    const [isSearchActive, setIsSearchActive] = useState(false);
    const [searchValue, setSearchValue] = useState('');

    const toggleIsUserMenuOpen = useCallback(
        () => setIsUserMenuOpen((isUserMenuOpen) => !isUserMenuOpen),
        []
    );

    const toggleIsSecondaryMenuOpen = useCallback(
        () => setIsSecondaryMenuOpen((isSecondaryMenuOpen) => !isSecondaryMenuOpen),
        []
    );

    const handleSearchResultsDismiss = useCallback(() => {
        setIsSearchActive(false);
        setSearchValue('');
    }, []);

    const handleSearchChange = useCallback((value) => {
        setSearchValue(value);
        setIsSearchActive(value.length > 0);
    }, []);

    const handleNavigationToggle = useCallback(() => {
        console.log('toggle navigation visibility');
        setToggle(!toggle)
    }, [setToggle, toggle]);

    const logo = {
        width: 85,

        topBarSource:`https://cdn.shopify.com/static/imagery-landing/shopify_monotone_white.svg`,
            // 'https://cdn.shopify.com/s/files/1/0446/6937/files/jaded-pixel-logo-color.svg?6215648040070010999',
        url: '/home',
        // accessibilityLabel: 'Jaded Pixel',
    };

    const userMenuMarkup = (
        <TopBar.UserMenu
            actions={[
                {
                    items: [{ content: 'Back to Shopify', icon: ArrowLeftMinor }],
                },
                {
                    items: [{ content: 'Community forums' }],
                },
            ]}
            name="My Store"
            initials="MS"
            open={isUserMenuOpen}
            onToggle={toggleIsUserMenuOpen}
        />
    );

    const searchResultsMarkup = (
        <ActionList
            items={[{ content: 'Shopify help center' }, { content: 'Community forums' }]}
        />
    );

    const searchFieldMarkup = (
        <TopBar.SearchField
            onChange={handleSearchChange}
            value={searchValue}
            placeholder="Search"
            showFocusBorder
            
            
        />
    );

    const secondaryMenuMarkup = (
        <TopBar.Menu
            activatorContent={
                <span>
                    <Icon source={QuestionMarkMajor} />
                    <Text as="span" visuallyHidden>
                        Secondary menu
                    </Text>
                </span>
            }
            open={isSecondaryMenuOpen}
            onOpen={toggleIsSecondaryMenuOpen}
            onClose={toggleIsSecondaryMenuOpen}
            actions={[
                {
                    items: [{ content: 'Community forums' }],
                },
            ]}
        />
    );

    const topBarMarkup = (
        <TopBar
            showNavigationToggle 
            userMenu={userMenuMarkup}
            secondaryMenu={secondaryMenuMarkup}
            searchResultsVisible={isSearchActive}
            searchField={searchFieldMarkup}
            searchResults={searchResultsMarkup}
            onSearchResultsDismiss={handleSearchResultsDismiss}
            onNavigationToggle={handleNavigationToggle}
        />
    );
    return (
        <div>
            <AppProvider>
                <div style={{ height: '3.5rem' }}>
                    <Frame topBar={topBarMarkup} logo={logo} />
                </div>
            </AppProvider>
            {/* <Navbar expand="lg" sticky="top" className='bg-black main_nav fade-in2' id="navbar">
                <Container className='sm:px-3 px-4' fluid >
                    <Navbar.Brand className='' >
                        <Image src={logo} alt="" className="nav_img" />
                    </Navbar.Brand>
                    <Navbar.Toggle className='lg:ms-2 ms-auto border-0 text-white p-0 mb-1' style={{
                        fontSize: "13px",
                        paddingInline: "6px"
                    }} >
                        X
                    </Navbar.Toggle>
                    <Nav className='' >
                        <Form>
                            <Form.Group>
                                <Form.Control type="search" placeholder="search" className="search" />
                            </Form.Group>
                        </Form>
                    </Nav>
                </Container>
            </Navbar> */}
        </div>
    );
}

export default NavHeader;