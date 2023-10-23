'use client'
import {
  TextField,
  IndexTable,
  LegacyCard,
  IndexFilters,
  useSetIndexFiltersMode,
  useIndexResourceState,
  Text,
  ChoiceList,
  RangeSlider,
  Badge,
  AppProvider,
  BlockStack,
  InlineStack,
} from '@shopify/polaris';
import en from "@shopify/polaris/locales/en.json";
import { useRouter } from 'next/navigation';
import { useState, useCallback, useEffect } from 'react';

const DraftTable = () => {
  const sleep = (ms) =>
    new Promise((resolve) => setTimeout(resolve, ms));
  const [itemStrings, setItemStrings] = useState([
    'All',
    'Unfulfilled',
    'Unpaid',
    'Open',
    'Closed',
  ]);
  const [showTable, setShowTable] = useState(false);
  const router = useRouter()
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

  const handleAccountStatusChange = useCallback(
    (value) => setAccountStatus(value),
    [],
  );
  const handleMoneySpentChange = useCallback(
    (value) => setMoneySpent(value),
    [],
  );
  const handleTaggedWithChange = useCallback(
    (value) => setTaggedWith(value),
    [],
  );
  const handleFiltersQueryChange = useCallback(
    (value) => setQueryValue(value),
    [],
  );
  const handleAccountStatusRemove = useCallback(
    () => setAccountStatus(undefined),
    [],
  );
  const handleMoneySpentRemove = useCallback(
    () => setMoneySpent(undefined),
    [],
  );
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
      order: (
        <Text as="span" variant="bodyMd" fontWeight="semibold">
          #1020
        </Text>
      ),
      date: 'Jul 20 at 4:34pm',
      customer: 'Jaydon Stanton',
      total: '$969.44',
      paymentStatus: <Badge progress="complete">open</Badge>,
      fulfillmentStatus: <Badge progress="incomplete">Unfulfilled</Badge>,
    },
    {
      id: '1019',
      order: (
        <Text as="span" variant="bodyMd" fontWeight="semibold">
          #1019
        </Text>
      ),
      date: 'Jul 20 at 3:46pm',
      customer: 'Ruben Westerfelt',
      total: '$701.19',
      paymentStatus: <Badge progress="partiallyComplete">Partially paid</Badge>,
      fulfillmentStatus: <Badge progress="incomplete">Unfulfilled</Badge>,
    },
    {
      id: '1018',
      order: (
        <Text as="span" variant="bodyMd" fontWeight="semibold">
          #1018
        </Text>
      ),
      date: 'Jul 20 at 3.44pm',
      customer: 'Leo Carder',
      total: '$798.24',
      paymentStatus: <Badge progress="complete">Paid</Badge>,
      fulfillmentStatus: <Badge progress="incomplete">Unfulfilled</Badge>,
    },
  ];
  const resourceName = {
    singular: 'order',
    plural: 'orders',
  };

  const { selectedResources, allResourcesSelected, handleSelectionChange } =
    useIndexResourceState(orders);

  const rowMarkup = orders.map(
    (items, index,) => (
      <IndexTable.Row
        id={items.id}
        key={items.id}
        selected={selectedResources.includes(items.id)}
        position={index}
        onClick={() => router.push('/order/create-order')}
      >
        <IndexTable.Cell>
          <Text variant="bodyMd" fontWeight="bold" as="span">
            {items.order}
          </Text>
        </IndexTable.Cell>
        <IndexTable.Cell>{items.date}</IndexTable.Cell>
        <IndexTable.Cell>{items.customer}</IndexTable.Cell>
        <IndexTable.Cell> {items.paymentStatus}</IndexTable.Cell>
        <IndexTable.Cell>{items.total}</IndexTable.Cell>
      </IndexTable.Row>
    ),
  );
  const promotedBulkActions = [
    {
      content: 'Add tags',
      onAction: () => console.log('Todo: implement create shipping labels'),
    },
    {
      content: 'Remove tags',
      onAction: () => console.log('Todo: implement mark as fulfilled'),
    },
  ];
  const bulkActions = [
    {
      content: 'Delete draft orders',
      onAction: () => console.log('Todo: implement bulk add tags'),
    },
  ];
  const ResponsiveRow = orders.map(
    (items, index,) => (
      <IndexTable.Row
        id={items.id}
        key={items.id}
        selected={selectedResources.includes(items.id)}
        position={index}
      >
        <div style={{ padding: '12px 16px', width: '100%' }}>
          <BlockStack gap="100">
            <Text as="span" variant="bodySm" tone="subdued">
              {items.order} • {items.date}
            </Text>
            <InlineStack align="space-between">
              <Text as="span" variant="bodyMd" fontWeight="semibold">
                {items.customer}
              </Text>
              <Text as="span" variant="bodyMd">
                {items.paymentStatus}
              </Text>
            </InlineStack>
            <InlineStack align="start" gap="100">
              <Text as="span" variant="bodyMd">
                {items.total}
              </Text>
            </InlineStack>
          </BlockStack>
        </div>
      </IndexTable.Row>
    ),
  );
  return (
    <AppProvider i18n={en}>
      <LegacyCard>
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
          resourceName={resourceName}
          itemCount={orders.length}
          selectedItemsCount={
            allResourcesSelected ? 'All' : selectedResources.length
          }
          promotedBulkActions={promotedBulkActions}
          condensed={showTable}
          onSelectionChange={handleSelectionChange}
          bulkActions={bulkActions}
          headings={[
            { title: 'Draft Order' },
            { title: 'Date' },
            { title: 'Customer' },
            { title: 'Status' },
            { title: 'Total' },
          ]}
        >
          {showTable ? ResponsiveRow : rowMarkup}
        </IndexTable>
      </LegacyCard>
    </AppProvider>
  );

  function disambiguateLabel(key, value) {
    switch (key) {
      case 'moneySpent':
        return `Money spent is between $${value[0]} and $${value[1]}`;
      case 'taggedWith':
        return `Tagged with ${value}`;
      case 'accountStatus':
        return (value).map((val) => `Customer ${val}`).join(', ');
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

export default DraftTable