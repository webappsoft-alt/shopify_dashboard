import { AppProvider, Autocomplete, Icon, Text, TextField } from '@shopify/polaris';
import { SearchMinor, CirclePlusMinor } from '@shopify/polaris-icons';
import { useRouter } from 'next/navigation';
import { useState, useCallback, useMemo, useRef, useEffect } from 'react';
import CreateNewCustomer from './createNewCustomer';
import en from "@shopify/polaris/locales/en.json";



function AddSearchCustomer({ setOpen }) {
    const router = useRouter()
    const [active, setActive] = useState(false);
    const toggleModal = useCallback(() => setActive((active) => !active), []);
    const deselectedOptions = useMemo(
        () => [
            { value: 'rustic', label: 'Rustic' },
            { value: 'antique', label: 'Antique' },
            { value: 'vinyl', label: 'Vinyl' },
            { value: 'vintage', label: 'Vintage' },
            { value: 'refurbished', label: 'Refurbished' },
        ],
        [],
    );
    const searchInputRef = useRef(null);
    const [searchValue, setSearchValue] = useState("")
    const [focus, setFocus] = useState(false)
    const handleClickOutside = (event) => {
        if (searchInputRef.current && !searchInputRef.current.contains(event.target)) {
            // Click occurred outside the search bar, so close the "Create a new customer" div
            setFocus(false);
        }
    };

    useEffect(() => {
        if (focus) {
            // Add a click event listener when focus is true
            document.addEventListener('click', handleClickOutside);
        } else {
            // Remove the click event listener when focus is false
            document.removeEventListener('click', handleClickOutside);
        }

        return () => {
            // Clean up the event listener when the component unmounts
            document.removeEventListener('click', handleClickOutside);
        };
    }, [focus]);
    const [selectedOptions, setSelectedOptions] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [options, setOptions] = useState(deselectedOptions);
   

    const [loading, setLoading] = useState(false);
    const handleChangeSearch = useCallback(
        (newValue) => setSearchValue(newValue),
        [],
    );
    const updateText = useCallback(
        (value) => {
            setInputValue(value);

            if (!loading) {
                setLoading(true);
            }

            setTimeout(() => {
                if (value === '') {
                    setOptions(deselectedOptions);
                    setLoading(false);
                    return;
                }
                const filterRegex = new RegExp(value, 'i');
                const resultOptions = options.filter((option) =>
                    option.label.match(filterRegex),
                );
                setOptions(resultOptions);
                setLoading(false);
            }, 300);
        },
        [deselectedOptions, loading, options],
    );

    const updateSelection = useCallback(
        (selected) => {
            const selectedText = selected.map((selectedItem) => {
                const matchedOption = options.find((option) => {
                    return option.value.match(selectedItem);
                });
                return matchedOption && matchedOption.label;
            });
            setSelectedOptions(selected);
            setInputValue(selectedText[0] || '');
        },
        [options],
    );

    const textField = (
        <Autocomplete.TextField
            onChange={updateText}
            label="Customer"
            value={inputValue}
            prefix={<Icon source={SearchMinor} />}
            placeholder="Search"
            autoComplete="off"
        />
    );

    return (
        <AppProvider className='' i18n={en}>
            <CreateNewCustomer active={active} toggleModal={toggleModal} />
            <div className='w-full'>
                <Text>
                    Customer
                </Text>
                <div className='mt-2' ref={searchInputRef}>
                    <TextField
                        value={searchValue}
                        type={"search"}
                        onFocus={() => setFocus(!focus)}
                        onChange={handleChangeSearch}
                        autoComplete="off"
                        placeholder='Search or Create new Customer'
                        prefix={<Icon source={SearchMinor} tone="base" />} />
                </div>
                {focus &&
                    (<div >
                        <div className='shadow-sm rounded-lg'>
                            <div className='flex gap-2 p-3 cursor-pointer'>
                                <div>
                                    <Icon source={CirclePlusMinor} tone="base" />
                                </div>
                                <div className='' onClick={toggleModal}>
                                    Create a new customer
                                </div>
                            </div>
                        </div>
                    </div>)}
            </div>
            {/* <Autocomplete
                actionBefore={{
                    accessibilityLabel: 'Action label',
                    badge: {
                        tone: 'new',
                        content: 'New!',
                    },

                    //   content:
                    //     'Create New Customer',
                    ellipsis: true,
                    helpText: 'Create New Customer',
                    icon: CirclePlusMinor,
                    wrapOverflow: true,
                    onAction: () => {
                        toggleModal()
                    },
                }}
                
                options={options}
                selected={selectedOptions}
                onSelect={updateSelection}
                listTitle="Suggested tags"
                loading={loading}
                textField={textField}
            /> */}

        </AppProvider>
    );
}

export default AddSearchCustomer;