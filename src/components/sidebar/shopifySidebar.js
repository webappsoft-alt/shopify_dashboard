'use client'
import { AppProvider, Frame, Navigation } from '@shopify/polaris';
import { HomeMinor, OrdersMinor, ProductsMinor } from '@shopify/polaris-icons';

import React from 'react'

const ShopifySidebar2 = () => {
    return (
        <div>
            <AppProvider>
                <Frame>
                    <Navigation location="/">
                        <Navigation.Section
                            items={[
                                {
                                    url: '/',
                                    excludePaths: ['#'],
                                    label: 'Home',
                                    icon: HomeMinor,
                                },
                                {
                                    url: '/order',
                                    excludePaths: ['#'],
                                    label: 'Orders',
                                    icon: OrdersMinor,
                                    // badge: '15',
                                },
                                {
                                    url: '/products',
                                    label: 'Products',
                                    icon: ProductsMinor,
                                    subNavigationItems: [
                                        {
                                            url: '/products/add-product',
                                            excludePaths: ['#'],
                                            disabled: false,
                                            label: 'Collections',
                                    selected: true,

                                        },
                                        {
                                            url: '/',
                                            excludePaths: ['#'],
                                            disabled: false,
                                            label: 'Inventory',
                                        },
                                    ],
                                },
                            ]}
                        />
                    </Navigation>
                </Frame>
            </AppProvider>
        </div>
    )
}

export default ShopifySidebar2
