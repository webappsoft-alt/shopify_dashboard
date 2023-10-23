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
  BlockStack,
  InlineStack,
} from '@shopify/polaris';
import content from '@/components/assests/png/content.png'
import en from "@shopify/polaris/locales/en.json";
import Image from 'next/image';
import { useState, useCallback, forwardRef, useEffect } from 'react';
import { useRouter } from 'next/navigation'

const AbandonedCheckouts = () => {
  const [showTable, setShowTable] = useState(false);

  useEffect(() => {
    function handleResize() {

      if (window.innerWidth <= 500) {
        setShowTable(true);
      } else {
        setShowTable(false);
      }
    }
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
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

  const sortOptions = [
    { label: 'Order', value: 'order asc', directionLabel: 'Ascending' },
    { label: 'Order', value: 'order desc', directionLabel: 'Descending' },
    { label: 'Customer', value: 'customer asc', directionLabel: 'A-Z' },
    { label: 'Customer', value: 'customer desc', directionLabel: 'Z-A' },
    { label: 'Date', value: 'date asc', directionLabel: 'A-Z' },
    { label: 'Date', value: 'date desc', directionLabel: 'Z-A' },
    { label: 'Total', value: 'total asc', directionLabel: 'Ascending' },
    { label: 'Total', value: 'total desc', directionLabel: 'Descending' },
  ];

  const [sortSelected, setSortSelected] = useState(['order asc']);
  const { mode, setMode } = useSetIndexFiltersMode();

  const onHandleCancel = () => { };

  const onHandleSave = async () => {
    await sleep(1);
    return true;
  };

  const primaryAction =
    selected === 0
      ? {
        type: 'save-as',
        onAction: onCreateNewView,
        disabled: false,
        loading: false,
      }
      : {
        type: 'save',
        onAction: onHandleSave,
        disabled: false,
        loading: false,
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
      checkout: '#3391020',
      date: '2/2/2000',
      placedBy: 'No placedBy',
      recoveryStatus: '0',
      total: '$30',
    },
    {
      id: '1030',
      checkout: '#3391020',
      date: '3/3/30000',
      placedBy: 'No DS',
      recoveryStatus: '0',
      total: '$10',
    },

  ];
  const resourceName = {
    singular: 'order',
    plural: 'orders',
  };

  const { selectedResources, allResourcesSelected, handleSelectionChange } = useIndexResourceState(orders);


  const rowMarkup = orders.map(
    (items, index) => (
      <IndexTable.Row
        id={items.id}
        key={items.id}
        selected={selectedResources.includes(items.id)}
        position={index}
        onClick={() => router.push("/order/abandoned-checkouts/detail")}
      >
        <IndexTable.Cell>
          <Text variant="bodyMd" fontWeight="bold" as="span">
            {items.checkout}
          </Text>
        </IndexTable.Cell>
        <IndexTable.Cell>{items.date}</IndexTable.Cell>
        <IndexTable.Cell>{items.placedBy}</IndexTable.Cell>
        <IndexTable.Cell>{items.recoveryStatus}</IndexTable.Cell>
        <IndexTable.Cell>{items.total}</IndexTable.Cell>
      </IndexTable.Row>
    )
  );
  const ResponsiveRow = orders.map(
    (items, index,) => (
      <IndexTable.Row
        id={items.id}
        onClick={() => router.push("/abandoned-checkouts/detail")}
        key={items.id}
        selected={selectedResources.includes(items.id)}
        position={index}
      >
        <div style={{ padding: '12px 16px', width: '100%' }}>
          <BlockStack gap="100">
            <Text as="span" variant="bodySm" tone="subdued">
              {items.product}
            </Text>

            <InlineStack align="space-between">
              <Text as="span" variant="bodyMd" fontWeight="semibold">
                {items.sku}
              </Text>
            </InlineStack>
            <InlineStack align="start" gap="100">
              {items.unavailable}  •  {items.commited}
            </InlineStack>
            <InlineStack align="start" gap="100">
              {items.available}
            </InlineStack>
          </BlockStack>
        </div>
      </IndexTable.Row>
    ),
  );
  const promotedBulkActions = [
    {
      content: 'Archive checkouts',
      onAction: () => console.log('Todo: implement create shipping labels'),
    },
    {
      content: 'Unarchive checkouts',
      onAction: () => console.log('Todo: implement mark as fulfilled'),
    },
  ];

  return (
    <div className=''>
      <AppProvider i18n={en} >
        <LegacyCard   >
          <IndexFilters
            sortOptions={sortOptions}
            sortSelected={sortSelected}
            queryValue={queryValue}
            queryPlaceholder="Searching in all"
            onQueryChange={handleFiltersQueryChange}
            onQueryClear={() => { }}
            onSort={setSortSelected}
            primaryAction={primaryAction}
            cancelAction={{
              onAction: onHandleCancel,
              disabled: false,
              loading: false,
            }}
            tabs={tabs}
            selected={selected}
            onSelect={setSelected}
            canCreateNewView
            onCreateNewView={onCreateNewView}
            filters={filters}
            appliedFilters={appliedFilters}
            onClearAll={handleFiltersClearAll}
            mode={mode}
            setMode={setMode}
            loading={false}
          />
          <IndexTable
            // selectable
            resourceName={resourceName}
            itemCount={orders.length}
            selectedItemsCount={allResourcesSelected ? 'All' : selectedResources.length}
            onSelectionChange={handleSelectionChange}
            // hasMoreItems
            condensed={showTable}
            promotedBulkActions={promotedBulkActions}
            headings={[
              { title: 'Checkout' },
              { title: 'Date' },
              { title: 'Placed By' },
              { title: 'Recovery Status' },
              { title: 'Total' },
            ]}
          >
            {showTable ? ResponsiveRow : rowMarkup}
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
export default AbandonedCheckouts;


