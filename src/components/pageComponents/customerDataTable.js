'use client'
import {
  TextField,
  IndexTable,
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
import { useRouter } from 'next/navigation';

const CustomerDataTable = () => {
  const router = useRouter()
  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  const [itemStrings, setItemStrings] = useState([
    'All',
  ]);
  const [sortedRows, setSortedRows] = useState(null);
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

  const onCreateNewView = async (value) => {
    await sleep(500);
    setItemStrings([...itemStrings, value]);
    setSelected(itemStrings.length);
    return true;
  };

 
  const onHandleSave = async () => {
    await sleep(1);
    return true;
  };


  const [accountStatus, setAccountStatus] = useState(undefined);
  const [moneySpent, setMoneySpent] = useState(undefined);
  const [taggedWith, setTaggedWith] = useState('');
  const [queryValue, setQueryValue] = useState('');

  const handleAccountStatusChange = useCallback((value) => setAccountStatus(value), []);
  const handleMoneySpentChange = useCallback((value) => setMoneySpent(value), []);
  const handleTaggedWithChange = useCallback((value) => setTaggedWith(value), []);
  const handleFiltersQueryChange = useCallback((value) => setQueryValue(value), []);

  const handleAccountStatusRemove = useCallback(() => setAccountStatus(undefined), []);
  const handleMoneySpentRemove = useCallback(() => setMoneySpent(undefined), []);
  const handleTaggedWithRemove = useCallback(() => setTaggedWith(''), []);
  const handleQueryValueRemove = useCallback(() => setQueryValue(''), []);

  const handleFiltersClearAll = useCallback(() => {
    handleAccountStatusRemove();
    handleMoneySpentRemove();
    handleTaggedWithRemove();
    handleQueryValueRemove();
  }, [
    handleAccountStatusRemove,
    handleMoneySpentRemove,
    handleQueryValueRemove,
    handleTaggedWithRemove,
  ]);

  const filters = [
    {
      key: 'accountStatus',
      label: 'Account status',
      filter: (
        <ChoiceList
          title="Account status"
          titleHidden
          choices={[
            { label: 'Enabled', value: 'enabled' },
            { label: 'Not invited', value: 'not invited' },
            { label: 'Invited', value: 'invited' },
            { label: 'Declined', value: 'declined' },
          ]}
          selected={accountStatus || []}
          onChange={handleAccountStatusChange}
          allowMultiple
        />
      ),
      shortcut: true,
    },
    {
      key: 'taggedWith',
      label: 'Tagged with',
      filter: (
        <TextField
          label="Tagged with"
          value={taggedWith}
          onChange={handleTaggedWithChange}
          autoComplete="off"
          labelHidden
        />
      ),
      shortcut: true,
    },
    {
      key: 'moneySpent',
      label: 'Money spent',
      filter: (
        <RangeSlider
          label="Money spent is between"
          labelHidden
          value={moneySpent || [0, 500]}
          prefix="$"
          output
          min={0}
          max={2000}
          step={1}
          onChange={handleMoneySpentChange}
        />
      ),
    },
  ];

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
      titleImage: content,
      name: 'ABC',
      email: 'email@gmial.com',
      address: 'ADSC',
      phone: '0300303000',
    },
    {
      id: '1030',
      titleImage: content,
      name: 'ABC',
      email: 'email@gmial.com',
      address: 'ADSC',
      phone: '0300303000',
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
          <Image src={items.titleImage} alt='' className='w-10 object-contain' />
        </IndexTable.Cell>
        <IndexTable.Cell>
          <Text variant="bodyMd" fontWeight="bold" as="span">
            {items.name}
          </Text>
        </IndexTable.Cell>
        <IndexTable.Cell>{items.email}</IndexTable.Cell>
        <IndexTable.Cell>{items.phone}</IndexTable.Cell>
        <IndexTable.Cell>{items.address}</IndexTable.Cell>
      </IndexTable.Row>
    )
  );

  return (
    <div className=''>
      <AppProvider i18n={en} >
        <LegacyCard   >
         
          <IndexTable
            selectable={false}
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
export default CustomerDataTable;


