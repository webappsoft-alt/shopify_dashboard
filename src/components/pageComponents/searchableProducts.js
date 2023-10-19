import React, { useCallback, useEffect, useRef, useState } from 'react';
import {
    TextField,
    Icon,
    Text,
    Button,
    ChoiceList,
} from '@shopify/polaris';
import { useIndexResourceState, IndexTable } from '@shopify/polaris';
import { LegacyCard, OptionList } from '@shopify/polaris';
import { SearchMinor, FilterMajor } from '@shopify/polaris-icons';

const SearchableProducts = ({ searchValue, browse, selectedProduct, setSelectedProduct }) => {
    const [query, setQuery] = useState(searchValue);
    const [selected, setSelected] = useState(['hidden']);
    const handleChange = useCallback((value) => setSelected(value), []);
    const handleQueryChange = (query) => {
        setQuery(query);
    };
    const handleQueryClear = () => {
        handleQueryChange('');
    };
    const [openClose, setOpenClose] = useState(false)
    const listboxId = 'SearchableListboxInPopover';

    const textFieldMarkup = (
        <div className='flex gap-2' style={{ padding: '8px 12px' }}>
            <div className='w-full'>
                <StopPropagation>
                    <TextField
                        clearButton
                        labelHidden
                        label="Customer segments"
                        placeholder="Search segments"
                        autoComplete="off"
                        value={query}
                        prefix={<Icon source={SearchMinor} />}
                        ariaControls={listboxId}
                        onChange={handleQueryChange}
                        onClearButtonClick={handleQueryClear}
                    />
                </StopPropagation>
            </div>
            <div className='w-16 flex relative'>
                <Button size="medium" onClick={() => { setOpenClose(!openClose) }} ><div className='flex gap-1 items-center'><Icon source={FilterMajor} /> Filter</div></Button>
                {openClose &&
                    <div className='absolute right-0 top-9 z-50' >
                        <div className='border p-2 bg-white rounded-lg shadow w-max'>
                            <ChoiceList
                                choices={[
                                    { label: 'Barcode', value: 'Barcode' },
                                    { label: 'SKU', value: 'SKU' },
                                    { label: 'Variant ID', value: 'Variant ID' },
                                    { label: 'Variant title', value: 'Variant title' },
                                ]}
                                selected={selected}
                                onChange={handleChange}
                            />
                        </div>
                    </div>}
            </div>
        </div>
    );
    const browseTextData = (
        <div className='' style={{ padding: '8px 12px' }}>
            <div className='w-full'>
                <StopPropagation>
                    <TextField
                        clearButton
                        labelHidden
                        label="Customer segments"
                        placeholder="Search segments"
                        autoComplete="off"
                        value={query}
                        prefix={<Icon source={SearchMinor} />}
                        ariaControls={listboxId}
                        onChange={handleQueryChange}
                        onClearButtonClick={handleQueryClear}
                    />
                </StopPropagation>
            </div>
            <div className=''>
                <LegacyCard>
                    <OptionList
                        onChange={setSelectedProduct}
                        options={[
                            { value: 'all_products', label: 'All Products' },
                            { value: 'collection', label: 'Collection' },
                            { value: 'products_type', label: 'Products types' },
                            { value: 'tags', label: 'Tags' },
                            { value: 'vendor', label: 'Vendor' },
                        ]}
                        selected={selectedProduct}
                    />
                </LegacyCard>
            </div>
        </div>
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
        <div>
            {browse === true ? <>{browseTextData}</> :
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
                </div>}
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
