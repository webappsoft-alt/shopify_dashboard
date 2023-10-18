import { LegacyStack, Modal, Scrollable, Select, Text } from "@shopify/polaris";

import { Form, FormLayout, Checkbox, TextField, Button } from '@shopify/polaris';
import { useState, useCallback } from 'react';

const CreateNewCustomer = ({ active, toggleModal }) => {
    const [newsletter, setNewsletter] = useState(false);
    const [email, setEmail] = useState('');

    const handleSubmit = useCallback(() => {
        setEmail('');
        setNewsletter(false);
    }, []);

    const handleNewsLetterChange = useCallback(
        (value) => setNewsletter(value),
        [],
    );
    const [selected, setSelected] = useState('today');

    const handleSelectChange = useCallback(
        (value) => setSelected(value),
        [],
    );

    const options = [
        { label: 'English[default]', value: 'english' },
    ];
    const handleEmailChange = useCallback((value) => setEmail(value), []);

    return (
        <div>
            <Modal
                // activator={active}
                open={active}
                onClose={toggleModal}
                title="Create New Customer"
                primaryAction={{
                    content: 'Save customer',
                    onAction: toggleModal,
                }}
                secondaryActions={{
                    content: 'Cancel',
                    onAction: toggleModal,
                }}>
                <Modal.Section>
                    <LegacyStack vertical>
                        <LegacyStack.Item>
                            <Form onSubmit={handleSubmit}>
                                <FormLayout>
                                    <div className="pb-2 grid gap-3 border-b">
                                        <div className="flex gap-2">
                                            <div className="w-full">
                                                <TextField
                                                    value={email}
                                                    onChange={handleEmailChange}
                                                    label="First Name"
                                                    type="text"
                                                />
                                            </div>
                                            <div className="w-full">
                                                <TextField
                                                    value={email}
                                                    onChange={handleEmailChange}
                                                    label="Last Name"
                                                    type="text"
                                                />
                                            </div>
                                        </div>
                                        <Select
                                            label="Language"
                                            options={options}
                                            onChange={handleSelectChange}
                                            value={selected}
                                            helpText={'This customer will receive notifications in this language.'}
                                        />
                                        <TextField
                                            value={email}
                                            onChange={handleEmailChange}
                                            label="Email"
                                            type="email"
                                            autoComplete="email"

                                        />
                                        <div className="grid">
                                            <Checkbox
                                                label="Customer accepts email marketing"
                                                checked={newsletter}
                                                onChange={handleNewsLetterChange}
                                            />
                                            <Checkbox
                                                label="Customer is tax exempt"
                                                checked={newsletter}
                                                onChange={handleNewsLetterChange}
                                            />
                                        </div>
                                    </div>
                                    <div className="grid gap-3">
                                        <div>
                                            <Text>
                                                Shipping address
                                            </Text>
                                            <Select
                                                label="Country/region"
                                                options={[{ value: "pk", label: "Pakistan" }]}
                                                onChange={handleSelectChange}
                                                value={selected}
                                            />
                                        </div>
                                        <TextField
                                            value={email}
                                            onChange={handleEmailChange}
                                            label="Company"
                                            type="text"
                                        />
                                        <TextField
                                            value={email}
                                            onChange={handleEmailChange}
                                            label="Address"
                                            type="text"
                                        />
                                        <TextField
                                            value={email}
                                            onChange={handleEmailChange}
                                            label="Apartment, suite, etc."
                                            type="text"
                                        />
                                        <div className="flex gap-2">
                                            <div className="w-full">
                                                <TextField
                                                    value={email}
                                                    onChange={handleEmailChange}
                                                    label="City"
                                                    type="text"
                                                />
                                            </div>
                                            <div className="w-full">
                                                <TextField
                                                    value={email}
                                                    onChange={handleEmailChange}
                                                    label="Postal code"
                                                    type="text"
                                                />
                                            </div>
                                        </div>
                                        <TextField
                                            value={email}
                                            onChange={handleEmailChange}
                                            label="Phone"
                                            type="text"
                                        />
                                    </div>
                                </FormLayout>
                            </Form>
                        </LegacyStack.Item>
                    </LegacyStack>
                </Modal.Section>
            </Modal>
        </div>
    );
}

export default CreateNewCustomer;

