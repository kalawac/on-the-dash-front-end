# Adding a Field to a Group

**Quick Links**
- [Adding a Field to a Group](#adding-a-field-to-a-group)
  - [Relevant Files](#relevant-files)
  - [Steps for adding a field that should never be displayed to the user (no view, no add, no edit)](#steps-for-adding-a-field-that-should-never-be-displayed-to-the-user-no-view-no-add-no-edit)
  - [Steps for adding a view-only field (no add, no edit)](#steps-for-adding-a-view-only-field-no-add-no-edit)
  - [Steps for adding a text field (single or multiline), a date field or a number field](#steps-for-adding-a-text-field-single-or-multiline-a-date-field-or-a-number-field)
  - [Steps for adding a field that displays multiple options (e.g., `<select>`, radio buttons, etc.) from which the user can select only one](#steps-for-adding-a-field-that-displays-multiple-options-eg-select-radio-buttons-etc-from-which-the-user-can-select-only-one)
  - [Steps for adding a field that contains an array of values for view or a field that should be added/edited using a form field that allows the user to select multiple options (e.g., `<select>`, checkboxes, etc.)](#steps-for-adding-a-field-that-contains-an-array-of-values-for-view-or-a-field-that-should-be-addededited-using-a-form-field-that-allows-the-user-to-select-multiple-options-eg-select-checkboxes-etc)


## Relevant Files
- GroupDetail.js
- Utils.js

## Steps for adding a field that should never be displayed to the user (no view, no add, no edit)
1. Include the relevant field in the database and ensure that it is being exported in a route.
2. In [ HELPER FUNCTION THAT IS DOING THE RENAMING OF THE KEYS FROM THE BACKEND], figure out what the key will be named in the front end. These instructions will refer to this as the 'field name' in the steps below. 
3. In `Utils`, find the relevant model object in `modelColumns` (e.g., `contacts`, `events`, etc.). Make a new key using the field name (see step #2). The value should be `nullFunc`.

## Steps for adding a view-only field (no add, no edit)
1. Include the relevant field in the database and ensure that it is being exported in a route.
2. In [ HELPER FUNCTION THAT IS DOING THE RENAMING OF THE KEYS FROM THE BACKEND], figure out what the key will be named in the front end. These instructions will refer to this as the 'field name' in the steps below. 
3. In `Utils`, find the relevant model object in `modelColumns` (e.g., `contacts`, `events`, etc.). Make a new key using the field name (see step #2). Choose one of the following values to indicate how the field should be handled for 'add', 'edit' and 'view' features:
    - `viewOnlySingle`: the user should only be able to view the associated data (no add, no edit). The data will be displayed in one `<p>` element.
    - `viewOnlyMulti`: the user should only be able to view the associated data (no add, no edit). The data will be displayed as an unordered list (`<ul>`), with each element in the data array mapped to a `<li>` element.
4. In `Utils`, add a key to `formLabels` using the field name. The value should be the label associated with the field in view components.

## Steps for adding a text field (single or multiline), a date field or a number field
1. Include the relevant field in the database and ensure that it is being exported in a route.
2. In [ HELPER FUNCTION THAT IS DOING THE RENAMING OF THE KEYS FROM THE BACKEND], figure out what the key will be named in the front end. These instructions will refer to this as the 'field name' in the steps below. 
3. In `Utils`, find the relevant model object in `modelColumns` (e.g., `contacts`, `events`, etc.). Make a new key using the field name (see step #2). Choose one of the following values to indicate how the field should be handled for 'add', 'edit' and 'view' features:
    - `InputDate`: in add and edit components, the user should see an `<input type=date>` field. In view component, the data will be displayed in one `<p>` element.
    - `InputNumber`: in add and edit components, the user should see an `<input type=number>` field. In view component, the data will be displayed in one `<p>` element.
    - `InputText`: in add and edit components, the user should see an `<input type=text>` field. In view component, the data will be displayed in one `<p>` element.
4. In `Utils`, find the relevant model object in `modelColumnsRequired`. Make a new key within the relevant model object using the relevant field name. Choose the appropriate value:
    - `true`: The user will be required to complete this field before submitting the form.
    - `false`: The user will not be required to complete this field before submitting the form.
5. In `Utils`, add a key to `formLabels` using the field name. The value should be the label associated with the field in add, edit and view components.
6. In `GroupDetail`, include the field name in `modelDisplay`, as a key in the relevant model object. The value should be `displayField`, unless the item requires special transformation before display. If special transformation is needed, write an anonymous function with two parameters, `(thisItem, field)`, that returns an expression indicating how the item should be displayed. e.g., `(thisItem, field) => [thisItem.fname, thisItem.lname].join(" ")`.


## Steps for adding a field that displays multiple options (e.g., `<select>`, radio buttons, etc.) from which the user can select only one
1. Include the relevant field in the database and ensure that it is being exported in a route.
2. In [ HELPER FUNCTION THAT IS DOING THE RENAMING OF THE KEYS FROM THE BACKEND], figure out what the key will be named in the front end. These instructions will refer to this as the 'field name' in the steps below.
3. In `Utils`, find the relevant model object in `modelColumns` (e.g., `contacts`, `events`, etc.). Make a new key using the field name (see step #2). The value should be `SingleSelectField`.
4. In `Utils`, find the relevant model object in `modelColumnsRequired`. Make a new key within the relevant model object using the relevant field name. Choose the appropriate value:
    - `true`: The user will be required to complete this field before submitting the form.
    - `false`: The user will not be required to complete this field before submitting the form.
5. In `Utils`, add a key to `formLabels` using the field name. The value should be the label associated with the field in add, edit and view components.
6. In `Utils`, add a key that corresponds to the field name, with options for the field to `selectOptions` in the form of an array of objects. Each object should represent one option and should contain the following key-value pairs:
   - `id`: value to be transmitted by the option if selected (that is, value to be bundled and sent back to the database)
   - `name`: label to be viewed by the user (for the respective option)
7. If the `id` and `name` values in the step above are the same: In `GroupDetail`, include the field name in `modelDisplay`, as a key in the relevant model object. The value should be `displayField`, unless the item requires special transformation before display. If special transformation is needed, write an anonymous function with two parameters, `(thisItem, field)`, that returns an expression indicating how the item should be displayed. e.g., `(thisItem, field) => [thisItem.fname, thisItem.lname].join(" ")`. Skip all remaining steps in this list of instructions: you're done!
8. If the `id` and `name` values created in step #6 differ: in `Utils`, below `getIdNameObj`, create and export an object of the options created in step #6 (possibly by using `getIdNameObj`). The variable name should start with a reference to the relevant model (contact, event, ind), followed by the field name.
9.  In `Utils`,  in the comments at the top ("Quick list of exports"), add the variable created in step #8, above, with an appropriate summary.
10. In `GroupDetail`, import the variable created in step #8 to the import list starting on line 7.
11. In `GroupDetail`, include the field in `modelDisplay`, as a key in the relevant model object. Uunless the item requires special transformation before display, the value should be `(thisItem, field) => displayAssociatedName(thisItem, field, ###)`, where ### should be the associated imported variable in the import statement that starts on line 7.

## Steps for adding a field that contains an array of values for view or a field that should be added/edited using a form field that allows the user to select multiple options (e.g., `<select>`, checkboxes, etc.)
1. Include the relevant field in the database and ensure that it is being exported in a route.
2. In [ HELPER FUNCTION THAT IS DOING THE RENAMING OF THE KEYS FROM THE BACKEND], figure out what the key will be named in the front end. These instructions will refer to this as the 'field name' in the steps below. 
3. In `Utils`, find the relevant model object in `modelColumns` (e.g., `contacts`, `events`, etc.). Make a new key using the field name (see step #2). Choose one of the following values to indicate how the field should be handled for 'add', 'edit' and 'view' features:
    - `viewOnlyMulti`: the user should only be able to view the associated data (no add, no edit). The data will be displayed as an unordered list (`<ul>`), with each element in the data array mapped to a `<li>` element.
    - `MultiSelectField`: in add and edit menus, the user should see a `<select>` field that allows for the selection of multiple options at the same time. The data will be displayed as an unordered list (`<ul>`), with each element in the data array mapped to a `<li>` element.
4. In `Utils`, find the relevant model object in `modelColumnsRequired`. Make a new key within the relevant model object using the relevant field name. Choose the appropriate value:
    - `true`: The user will be required to complete this field before submitting the form.
    - `false`: The user will not be required to complete this field before submitting the form.
5. In `Utils`, add a key to `formLabels` using the field name. The value should be the label associated with the field in add, edit and view components.
6. In `Utils`, add a key that corresponds to the field name, with options for the field to `selectOptions` in the form of an array of objects. Each object should represent one option and should contain the following key-value pairs:
   - `id`: value to be transmitted by the option if selected (that is, value to be bundled and sent back to the database)
   - `name`: label to be viewed by the user (for the respective option)
7. In `Utils`, below `getIdNameObj`, create and export the array of objects created in step #6, above. The variable name should start with a reference to the relevant model (contact, event, ind), followed by the field name, followed by "Arr": e.g. `eventSubjectsArr`. This should be done regardless of whether the `id` and `name` values match or differ.
8. In `Utils`,  in the comments at the top ("Quick list of exports"), add the variable created in step #6, above, with an appropriate summary.
9. In `GroupDetail`, import the variable created in step #6, above, to the import list starting on line 7.
10. In `GroupDetail`, include the field in `modelDisplay`, as a key in the relevant model object. Unless the item requires special transformation before display, the value should be `(thisItem, field) => displayItemMap(thisItem, field, ###)`, where ### should be the associated imported variable in the import statement that starts on line 7. If special transformation is needed, write a helper function or anonymous function that takes two parameters, `(thisItem, field)`, and returns an expression indicating how the item should be displayed. For an example, see `displayItemMap` in `GroupDetail`.