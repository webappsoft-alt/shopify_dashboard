import React, { useState } from 'react';
import {
    Listbox,
    TextField,
    Icon,
    Link,
    Popover,
    AutoSelection,
    Scrollable,
    EmptySearchResult,
    Text,
    Button,
} from '@shopify/polaris';
import { useIndexResourceState, IndexTable} from '@shopify/polaris';

import { SearchMinor, FilterMajor } from '@shopify/polaris-icons';


const actionValue = '__ACTION__';

const segments = [
    {
        label: 'All customers',
        id: 'gid://shopify/CustomerSegment/1',
        value: '0',
    },
    {
        label: 'VIP customers',
        id: 'gid://shopify/CustomerSegment/2',
        value: '1',
    },
    {
        label: 'New customers',
        id: 'gid://shopify/CustomerSegment/3',
        value: '2',
    },
    {
        label: 'Abandoned carts - last 30 days',
        id: 'gid://shopify/CustomerSegment/4',
        value: '3',
    },
    {
        label: 'Wholesale customers',
        id: 'gid://shopify/CustomerSegment/5',
        value: '4',
    },
    {
        label: 'Email subscribers',
        id: 'gid://shopify/CustomerSegment/6',
        value: '5',
    },
];

// const lazyLoadSegments = Array.from(Array(100)).map((_, index) => ({
//     label: `Other customers ${index + 13}`,
//     id: `gid://shopify/CustomerSegment/${index + 13}`,
//     value: `${index + 12}`,
// }));

// segments.push(...lazyLoadSegments);

const interval = 25;

const SearchableProducts = ({ searchValue }) => {
    const [pickerOpen, setPickerOpen] = useState(false);
    const [showFooterAction, setShowFooterAction] = useState(true);
    const [query, setQuery] = useState(searchValue);
    const [lazyLoading, setLazyLoading] = useState(false);
    const [willLoadMoreResults, setWillLoadMoreResults] = useState(true);
    const [visibleOptionIndex, setVisibleOptionIndex] = useState(6);
    const [activeOptionId, setActiveOptionId] = useState(segments[0].id);
    const [selectedSegmentIndex, setSelectedSegmentIndex] = useState(0);
    const [filteredSegments, setFilteredSegments] = useState([]);

    const handleClickShowAll = () => {
        setShowFooterAction(false);
        setVisibleOptionIndex(interval);
    };

    const handleFilterSegments = (query) => {
        const nextFilteredSegments = segments.filter((segment) => {
            return segment.label
                .toLocaleLowerCase()
                .includes(query.toLocaleLowerCase().trim());
        });

        setFilteredSegments(nextFilteredSegments);
    };

    const handleQueryChange = (query) => {
        setQuery(query);

        if (query.length >= 2) handleFilterSegments(query);
    };

    const handleQueryClear = () => {
        handleQueryChange('');
    };

    const handleOpenPicker = () => {
        setPickerOpen(true);
    };

    const handleClosePicker = () => {
        setPickerOpen(false);
        handleQueryChange('');
    };

    const handleSegmentSelect = (segmentIndex) => {
        if (segmentIndex === actionValue) {
            return handleClickShowAll();
        }

        setSelectedSegmentIndex(segmentIndex);
        handleClosePicker();
    };

    const handleActiveOptionChange = (_, domId) => {
        setActiveOptionId(domId);
    };

    /* This is just to illustrate lazy loading state vs loading state. This is an example, so we aren't fetching from GraphQL. You'd use `pageInfo.hasNextPage` from your GraphQL query data instead of this fake "willLoadMoreResults" state along with setting `first` your GraphQL query's variables to your app's default max edges limit (e.g., 250). */

    const handleLazyLoadSegments = () => {
        if (willLoadMoreResults && !showFooterAction) {
            setLazyLoading(true);

            const options = query ? filteredSegments : segments;

            setTimeout(() => {
                const remainingOptionCount = options.length - visibleOptionIndex;
                const nextVisibleOptionIndex =
                    remainingOptionCount >= interval
                        ? visibleOptionIndex + interval
                        : visibleOptionIndex + remainingOptionCount;

                setLazyLoading(false);
                setVisibleOptionIndex(nextVisibleOptionIndex);

                if (remainingOptionCount <= interval) {
                    setWillLoadMoreResults(false);
                }
            }, 1000);
        }
    };

    const listboxId = 'SearchableListboxInPopover';

    /* Your app's feature/context specific activator here */
    const activator = (
        <div
            style={{
                fontSize: 'var(--p-font-size-500)',
                color: 'var(--p-color-text)',
                borderBottom: '1px dashed var(--p-color-border)',
            }}
        >
            <Link monochrome removeUnderline onClick={handleOpenPicker}>
                <Text as="h1" variant="headingXl">
                    {segments[selectedSegmentIndex].label}
                </Text>
            </Link>
        </div>
    );

    const textFieldMarkup = (
        <div className='flex gap-2' style={{ padding: '8px 12px' }}>
            <div className='w-full'>
                <StopPropagation>
                    <TextField
                        focused={showFooterAction}
                        clearButton
                        labelHidden
                        label="Customer segments"
                        placeholder="Search segments"
                        autoComplete="off"
                        value={query}
                        prefix={<Icon source={SearchMinor} />}
                        ariaActiveDescendant={activeOptionId}
                        ariaControls={listboxId}
                        onChange={handleQueryChange}
                        onClearButtonClick={handleQueryClear}
                    />
                </StopPropagation>
            </div>
            <div className='w-16 inline-block'>
                <Button size="" ><div className='flex gap-1 items-center'><Icon source={FilterMajor} /> Filter</div></Button>
            </div>
        </div>
    );

    const segmentOptions = query ? filteredSegments : segments;

    const segmentList =
        segmentOptions.length > 0
            ? segmentOptions
                .slice(0, visibleOptionIndex)
                .map(({ label, id, value }) => {
                    const selected = segments[selectedSegmentIndex].id === id;

                    return (
                        <Listbox.Option key={id} value={value} selected={selected}>
                            <Listbox.TextOption selected={selected}>
                                {label}
                            </Listbox.TextOption>
                        </Listbox.Option>
                    );
                })
            : null;

    // const showAllMarkup = showFooterAction ? (
    //     <Listbox.Action value={actionValue}>
    //         <span style={{ color: 'var(--p-color-text-emphasis)' }}>
    //             Show all 111 segments
    //         </span>
    //     </Listbox.Action>
    // ) : null;

    const lazyLoadingMarkup = lazyLoading ? (
        <Listbox.Loading
            accessibilityLabel={`${query ? 'Filtering' : 'Loading'
                } customer segments`}
        />
    ) : null;

    const noResultsMarkup =
        segmentOptions.length === 0 ? (
            <EmptySearchResult
                title=""
                description={`No segments found matching "${query}"`}
            />
        ) : null;

    const listboxMarkup = (
        <Listbox
            enableKeyboardControl
            autoSelection={AutoSelection.FirstSelected}
            accessibilityLabel="Search for and select a customer segment"
            customListId={listboxId}
            onSelect={handleSegmentSelect}
            onActiveOptionChange={handleActiveOptionChange}
        >
            {segmentList}
            {/* {showAllMarkup} */}
            {noResultsMarkup}
            {lazyLoadingMarkup}
        </Listbox>
    );
    const orders = [
        {
            id: '1020',
            order: '#1020',
            date: 'Jul 20 at 4:34pm',
            customer: 'Jaydon Stanton',
            total: '$969.44',
        },
        {
            id: '1019',
            order: '#1019',
            date: 'Jul 20 at 3:46pm',
            customer: 'Ruben Westerfelt',
            total: '$701.19',
        },
        {
            id: '1018',
            order: '#1018',
            date: 'Jul 20 at 3.44pm',
            customer: 'Leo Carder',
            total: '$798.24',
        },
    ];
    const resourceName = {
        singular: 'order',
        plural: 'orders',
    };

    const { selectedResources, allResourcesSelected, handleSelectionChange } =
        useIndexResourceState(orders);

    const rowMarkup = orders.map(
        (
            { id, order, date, customer, total },
            index,
        ) => (
            <IndexTable.Row
                id={id}
                key={id}
                selected={selectedResources.includes(id)}
                position={index}
            >
                <IndexTable.Cell>
                    <Text variant="bodyMd" fontWeight="bold" as="span">
                        {order}
                    </Text>
                </IndexTable.Cell>
                <IndexTable.Cell>{date}</IndexTable.Cell>
                <IndexTable.Cell>{customer}</IndexTable.Cell>
                <IndexTable.Cell>{total}</IndexTable.Cell>
            </IndexTable.Row>
        ),
    )

    return (
        <div >
            {textFieldMarkup}
            <div className='mt-3'>
                <IndexTable
                    resourceName={resourceName}
                    itemCount={orders.length}
                    selectedItemsCount={
                        allResourcesSelected ? 'All' : selectedResources.length
                    }
                    onSelectionChange={handleSelectionChange}
                    headings={[
                        { title: 'Order' },
                        { title: 'Date' },
                        { title: 'Customer' },
                        { title: 'Total', alignment: 'end' },
                        { title: 'Payment status' },
                        { title: 'Fulfillment status' },
                    ]}
                >
                    {rowMarkup}
                </IndexTable>
            </div>
            {/* <Popover
                active={pickerOpen}
                activator={activator}
                ariaHaspopup="listbox"
                preferredAlignment="left"
                autofocusTarget="first-node"
                onClose={handleClosePicker}
            >
                <Popover.Pane fixed>
                    <div
                        style={{
                            alignItems: 'stretch',
                            borderTop: '1px solid #DFE3E8',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'stretch',
                            position: 'relative',
                            width: '100%',
                            height: '100%',
                            overflow: 'hidden',
                        }}
                    >
                        {textFieldMarkup}

                        <Scrollable
                            shadow
                            style={{
                                position: 'relative',
                                width: '310px',
                                height: '292px',
                                padding: 'var(--p-space-200) 0',
                                borderBottomLeftRadius: 'var(--p-border-radius-200)',
                                borderBottomRightRadius: 'var(--p-border-radius-200)',
                            }}
                            onScrolledToBottom={handleLazyLoadSegments}
                        >
                            {listboxMarkup}
                        </Scrollable>
                    </div>
                </Popover.Pane>
            </Popover> */}
        </div>
    );
}

const StopPropagation = ({ children }) => {
    const stopEventPropagation = (event) => {
        event.stopPropagation();
    };

    return (
        <div onClick={stopEventPropagation} onTouchStart={stopEventPropagation}>
            {children}
        </div>
    );
};
export default SearchableProducts