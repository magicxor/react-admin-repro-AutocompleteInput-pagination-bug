import * as React from 'react';
import { AutocompleteInput, Edit, ReferenceInput, Show, SimpleForm, Tab, TabbedShowLayout, TabbedShowLayoutTabs } from 'react-admin';

export const createSearchFilter = (searchText: string) => ({ q: searchText });

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function valueToId(value: any): number {
    if (value === null || value === undefined) {
        return value;
    }
    if (typeof value === 'number') {
        return value;
    }
    if (typeof value === 'string') {
        return Number(value);
    }
    if (typeof value === 'object' && Object.hasOwn(value, 'id')) {
        return value.id;
    }
    // eslint-disable-next-line no-console
    console.error(`Can not transform this value to id: ${value}`);
    return -1;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function valueToIdObject(value: any) {
    if (value === null || value === undefined) {
        return value;
    }
    if (typeof value === 'number') {
        return { id: value };
    }
    if (typeof value === 'string') {
        return { id: Number(value) };
    }
    if (typeof value === 'object' && Object.hasOwn(value, 'id')) {
        return { id: value.id };
    }
    // eslint-disable-next-line no-console
    console.error(`Can not transform this value to object: ${value}`);
    return { id: -1 };
}

export const UserEdit = () => {
  return (
      <Edit>
          <SimpleForm>
              <ReferenceInput label="Country" source="country" reference="country" sort={{ field: 'name', order: 'ASC' }} required fullWidth>
                  <AutocompleteInput optionText="name" filterToQuery={createSearchFilter} parse={valueToIdObject} format={valueToId} fullWidth />
              </ReferenceInput>
          </SimpleForm>
      </Edit>
  );
};
