'use client'
import {
  TextField,
  IndexTable,
  IndexFilters,
  useSetIndexFiltersMode,
  useIndexResourceState,
  Text,
  ChoiceList,
  RangeSlider,
  Badge,
  AppProvider,
  LegacyCard,
} from '@shopify/polaris';
import content from '@/components/assests/png/content.png'
import en from "@shopify/polaris/locales/en.json";
import Image from 'next/image';
import { useState, useCallback, forwardRef } from 'react';

const DraftTable = () => {
  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  const [itemStrings, setItemStrings] = useState([
    'All',
  ]);
  const deleteView = (index) => {
    const newItemStrings = [...itemStrings];
    newItemStrings.splice(index, 1);
    setItemStrings(newItemStrings);
    setSelected(0);
  };

  const duplicateView = async (name) => {
    setItemStrings([...itemStrings, name]);
    setSelected(itemStrings.length);
    await sleep(1);
    return true;
  };

  const tabs = itemStrings.map((item, index) => ({
    content: item,
    index,
    onAction: () => { },
    id: `${item}-${index}`,
    isLocked: index === 0,
    actions:
      index === 0
        ? []
        : [
          {
            type: 'rename',
            onAction: () => { },
            onPrimaryAction: async (value) => {
              const newItemsStrings = tabs.map((item, idx) => {
                if (idx === index) {
                  return value;
                }
                return item.content;
              });
              await sleep(1);
              setItemStrings(newItemsStrings);
              return true;
            },
          },
          {
            type: 'duplicate',
            onPrimaryAction: async (value) => {
              await sleep(1);
              duplicateView(value);
              return true;
            },
          },
          {
            type: 'edit',
          },
          {
            type: 'delete',
            onPrimaryAction: async () => {
              await sleep(1);
              deleteView(index);
              return true;
            },
          },
        ],
  }));

  const [selected, setSelected] = useState(0);



  const [accountStatus, setAccountStatus] = useState(undefined);
  const [moneySpent, setMoneySpent] = useState(undefined);
  const [taggedWith, setTaggedWith] = useState('');

  const handleAccountStatusRemove = useCallback(() => setAccountStatus(undefined), []);
  const handleMoneySpentRemove = useCallback(() => setMoneySpent(undefined), []);
  const handleTaggedWithRemove = useCallback(() => setTaggedWith(''), []);



  const appliedFilters = [];
  if (accountStatus && !isEmpty(accountStatus)) {
    const key = 'accountStatus';
    appliedFilters.push({
      key,
      label: disambiguateLabel(key, accountStatus),
      onRemove: handleAccountStatusRemove,
    });
  }
  if (moneySpent) {
    const key = 'moneySpent';
    appliedFilters.push({
      key,
      label: disambiguateLabel(key, moneySpent),
      onRemove: handleMoneySpentRemove,
    });
  }
  if (!isEmpty(taggedWith)) {
    const key = 'taggedWith';
    appliedFilters.push({
      key,
      label: disambiguateLabel(key, taggedWith),
      onRemove: handleTaggedWithRemove,
    });
  }

  const orders = [
    {
      id: '1020',   
      name: 'ABC',
      email: 'email@gmial.com',
      address: 'ADSC',
      phone: '0300303000',
      title: 'HomePage',
      titleImage: content,
      product: '0',
      productCondition: '0',
    },
    {
      id: '1030',
      title: 'HomePage',
      name: 'ABC',
      email: 'email@gmial.com',
      address: 'ADSC',
      phone: '0300303000',
      titleImage: content,
      product: '0',
      productCondition: '0',
    },

  ];
  const resourceName = {
    singular: 'order',
    plural: 'orders',
  };

  const { selectedResources, allResourcesSelected, handleSelectionChange } =
    useIndexResourceState(orders);

  const rowMarkup = orders.map(
    (items, index) => (
      <IndexTable.Row
        id={items.id}
        key={items.id}
        selected={selectedResources.includes(items.id)}
        position={index}
      >
        <IndexTable.Cell className='w-10'  >
          <Image src={items.titleImage} alt='' className='w-8 object-contain' />
        </IndexTable.Cell>
        <IndexTable.Cell>
          <Text variant="bodyMd" fontWeight="bold" as="span">
            {items.name}
          </Text>
        </IndexTable.Cell>
        <IndexTable.Cell>{items.email}</IndexTable.Cell>
        <IndexTable.Cell>{items.phone}</IndexTable.Cell>
        <IndexTable.Cell>{items.address}</IndexTable.Cell>
        <IndexTable.Cell>
          <Text variant="bodyMd" fontWeight="bold" as="span">
            {items.title}
          </Text>
        </IndexTable.Cell>
        <IndexTable.Cell>
          {items.product}
        </IndexTable.Cell>
        <IndexTable.Cell>{items.productCondition}</IndexTable.Cell>
      </IndexTable.Row>
    )
  );


  return (
    <div className=''>
      <AppProvider i18n={en} >
        <LegacyCard   >
         
          <IndexTable
            selectable
            resourceName={resourceName}
            itemCount={orders.length}
            selectedItemsCount={allResourcesSelected ? 'All' : selectedResources.length}
            onSelectionChange={handleSelectionChange}
            headings={[
              { title: '' },
              { title: 'Name' },
              { title: 'Email' },
              { title: 'Phone' },
              { title: 'Address' },
              { title: 'Title' },
              { title: 'Products' },
              { title: 'Product conditions' },
            ]}
          >
            {rowMarkup}
          </IndexTable>
        </LegacyCard>
      </AppProvider>
    </div>
  );

  function disambiguateLabel(key, value) {
    switch (key) {
      case 'moneySpent':
        return `Money spent is between $${value[0]} and $${value[1]}`;
      case 'taggedWith':
        return `Tagged with ${value}`;
      case 'accountStatus':
        return value.map((val) => `Customer ${val}`).join(', ');
      default:
        return value;
    }
  }

  function isEmpty(value) {
    if (Array.isArray(value)) {
      return value.length === 0;
    } else {
      return value === '' || value == null;
    }
  }
}
export default DraftTable;


