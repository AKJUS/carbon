/**
 * Copyright IBM Corp. 2016, 2025
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

// TODO: What's the purpose of having both this file and
// packages/react/src/index.ts?

import './feature-flags';

export { Accordion } from './components/Accordion';
export { AccordionItem } from './components/AccordionItem';
export { AspectRatio } from './components/AspectRatio';
export { Breadcrumb, BreadcrumbItem } from './components/Breadcrumb';
export { Button } from './components/Button';
export { ButtonSet } from './components/ButtonSet';
export { Checkbox } from './components/Checkbox';
export { CheckboxGroup } from './components/CheckboxGroup';
export { ClassPrefix } from './components/ClassPrefix';
export { CodeSnippet } from './components/CodeSnippet';
export { ComboBox } from './components/ComboBox';
export { ComboButton } from './components/ComboButton';
export {
  ComposedModal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from './components/ComposedModal';
export { ContainedList, ContainedListItem } from './components/ContainedList';
export { ContentSwitcher } from './components/ContentSwitcher';
export { useContextMenu } from './components/ContextMenu';
export { Copy } from './components/Copy';
export { CopyButton } from './components/CopyButton';
export { DangerButton } from './components/DangerButton';
export {
  default as DataTable,
  Table,
  TableActionList,
  TableBatchAction,
  TableBatchActions,
  TableBody,
  TableCell,
  TableContainer,
  TableExpandHeader,
  TableExpandRow,
  TableExpandedRow,
  TableHead,
  TableHeader,
  TableRow,
  TableSelectAll,
  TableSelectRow,
  TableSlugRow,
  TableToolbar,
  TableToolbarAction,
  TableToolbarContent,
  TableToolbarSearch,
  TableToolbarMenu,
} from './components/DataTable';
export { DatePicker } from './components/DatePicker';
export { DatePickerInput } from './components/DatePickerInput';
export { Dropdown } from './components/Dropdown';
export {
  ErrorBoundary,
  ErrorBoundaryContext,
} from './components/ErrorBoundary';
export {
  FeatureFlags,
  useFeatureFlag,
  useFeatureFlags,
  FeatureFlags as unstable_FeatureFlags, // this export can be removed in v12
  useFeatureFlag as unstable_useFeatureFlag, // this export can be removed in v12
  useFeatureFlags as unstable_useFeatureFlags, // this export can be removed in v12
} from './components/FeatureFlags';
export {
  FileUploader,
  Filename,
  FileUploaderButton,
  FileUploaderDropContainer,
  FileUploaderItem,
} from './components/FileUploader';
export { Form } from './components/Form';
export { FluidForm } from './components/FluidForm';
export { FormGroup } from './components/FormGroup';
export { FormItem } from './components/FormItem';
export { FormLabel } from './components/FormLabel';
export {
  Grid,
  Row,
  Column,
  ColumnHang,
  FlexGrid,
  GridSettings,
} from './components/Grid';
export { IdPrefix } from './components/IdPrefix';
export { InlineLoading } from './components/InlineLoading';
export { Link } from './components/Link';
export { ListItem } from './components/ListItem';
export { Loading } from './components/Loading';
export {
  Menu,
  MenuItem,
  MenuItemDivider,
  MenuItemGroup,
  MenuItemRadioGroup,
  MenuItemSelectable,
} from './components/Menu';
export { MenuButton } from './components/MenuButton';
export { Modal } from './components/Modal';
export { ModalWrapper } from './components/ModalWrapper';
export { FilterableMultiSelect, MultiSelect } from './components/MultiSelect';
export {
  ActionableNotification,
  ToastNotification,
  InlineNotification,
  NotificationActionButton,
  NotificationButton,
  Callout,
  Callout as unstable__Callout, // TODO remove when telemetry shows zero usage, or in v12
  Callout as unstable__StaticNotification, // TODO remove when telemetry shows zero usage, or in v12
} from './components/Notification';
export { NumberInput, NumberInputSkeleton } from './components/NumberInput';
export { OrderedList } from './components/OrderedList';
export { OverflowMenu } from './components/OverflowMenu';
export { OverflowMenuItem } from './components/OverflowMenuItem';
export * as unstable__PageHeader from './components/PageHeader';
export { Pagination } from './components/Pagination';
export { PaginationNav } from './components/PaginationNav';
export {
  ControlledPasswordInput,
  PasswordInput,
} from './components/PasswordInput';
export { PrimaryButton } from './components/PrimaryButton';
export {
  ProgressIndicator,
  ProgressStep,
} from './components/ProgressIndicator';
export { RadioButton } from './components/RadioButton';
export { RadioButtonGroup } from './components/RadioButtonGroup';
export { Search } from './components/Search';
export { ExpandableSearch } from './components/ExpandableSearch';
export { SecondaryButton } from './components/SecondaryButton';
export { Select } from './components/Select';
export { SelectItem } from './components/SelectItem';
export { SelectItemGroup } from './components/SelectItemGroup';
export { Switch, IconSwitch } from './components/Switch';
export { Slider } from './components/Slider';
export {
  StructuredListWrapper,
  StructuredListHead,
  StructuredListBody,
  StructuredListRow,
  StructuredListInput,
  StructuredListCell,
  StructuredListSkeleton,
} from './components/StructuredList';
export { Tab } from './components/Tab';
export { TabContent } from './components/TabContent';
export { Tabs } from './components/Tabs';
export { TabPanel, TabPanels, TabList, IconTab } from './components/Tabs';
export { Tag } from './components/Tag';
export { DismissibleTag } from './components/Tag';
export { OperationalTag } from './components/Tag';
export { SelectableTag } from './components/Tag';
export { TextArea } from './components/TextArea';
export { TextInput } from './components/TextInput';
export {
  Tile,
  ClickableTile,
  SelectableTile,
  ExpandableTile,
  TileAboveTheFoldContent,
  TileBelowTheFoldContent,
} from './components/Tile';
export { RadioTile } from './components/RadioTile';
export { TileGroup } from './components/TileGroup';
export { TimePicker } from './components/TimePicker';
export { TimePickerSelect } from './components/TimePickerSelect';
export { Toggle } from './components/Toggle';
export {
  ToggletipLabel,
  Toggletip,
  ToggletipButton,
  ToggletipContent,
  ToggletipActions,
} from './components/Toggletip';
export { TreeView, TreeNode } from './components/TreeView';
export { UnorderedList } from './components/UnorderedList';
export { SkeletonText } from './components/SkeletonText';
export { SkeletonPlaceholder } from './components/SkeletonPlaceholder';
export { SkeletonIcon } from './components/SkeletonIcon';
export { DataTableSkeleton } from './components/DataTableSkeleton';
export { AccordionSkeleton } from './components/Accordion/Accordion.Skeleton';
export { BreadcrumbSkeleton } from './components/Breadcrumb/Breadcrumb.Skeleton';
export { ButtonSkeleton } from './components/Button/Button.Skeleton';
export { CheckboxSkeleton } from './components/Checkbox/Checkbox.Skeleton';
export { CodeSnippetSkeleton } from './components/CodeSnippet/CodeSnippet.Skeleton';
export { DropdownSkeleton } from './components/Dropdown/Dropdown.Skeleton';
export { FileUploaderSkeleton } from './components/FileUploader/FileUploader.Skeleton';
export { PaginationSkeleton } from './components/Pagination/Pagination.Skeleton';
export { ProgressIndicatorSkeleton } from './components/ProgressIndicator/ProgressIndicator.Skeleton';
export { RadioButtonSkeleton } from './components/RadioButton/RadioButton.Skeleton';
export { SearchSkeleton } from './components/Search/Search.Skeleton';
export { SelectSkeleton } from './components/Select/Select.Skeleton';
export { SliderSkeleton } from './components/Slider/Slider.Skeleton';
export { TabsSkeleton } from './components/Tabs/Tabs.Skeleton';
export { TagSkeleton } from './components/Tag/Tag.Skeleton';
export { TextAreaSkeleton } from './components/TextArea/TextArea.Skeleton';
export { TextInputSkeleton } from './components/TextInput/TextInput.Skeleton';
export { ToggleSkeleton } from './components/Toggle/Toggle.Skeleton';
export { ToggleSmallSkeleton } from './components/ToggleSmall/ToggleSmall.Skeleton';
export { IconSkeleton } from './components/Icon/Icon.Skeleton';
export { DatePickerSkeleton } from './components/DatePicker/DatePicker.Skeleton';
export {
  Content,
  Header,
  HeaderContainer,
  HeaderGlobalAction,
  HeaderGlobalBar,
  HeaderMenu,
  HeaderMenuButton,
  HeaderMenuItem,
  HeaderName,
  HeaderNavigation,
  HeaderPanel,
  HeaderSideNavItems,
  Switcher,
  SwitcherItem,
  SwitcherDivider,
  SkipToContent,
  SideNav,
  SideNavDetails,
  SideNavDivider,
  SideNavFooter,
  SideNavHeader,
  SideNavIcon,
  SideNavItem,
  SideNavItems,
  SideNavLink,
  SideNavLinkText,
  SideNavMenu,
  SideNavMenuItem,
  SideNavSwitcher,
} from './components/UIShell';

// Experimental
export {
  FluidComboBox as unstable__FluidComboBox,
  FluidComboBoxSkeleton as unstable__FluidComboBoxSkeleton,
} from './components/FluidComboBox';
export {
  FluidDatePicker as unstable__FluidDatePicker,
  FluidDatePickerSkeleton as unstable__FluidDatePickerSkeleton,
} from './components/FluidDatePicker';
export { FluidDatePickerInput as unstable__FluidDatePickerInput } from './components/FluidDatePickerInput';
export {
  FluidDropdown as unstable__FluidDropdown,
  FluidDropdownSkeleton as unstable__FluidDropdownSkeleton,
} from './components/FluidDropdown';
export {
  FluidMultiSelect as unstable__FluidMultiSelect,
  FluidMultiSelectSkeleton as unstable__FluidMultiSelectSkeleton,
} from './components/FluidMultiSelect';
export {
  FluidNumberInput as unstable__FluidNumberInput,
  FluidNumberInputSkeleton as unstable__FluidNumberInputSkeleton,
} from './components/FluidNumberInput';
export {
  FluidSearch as unstable__FluidSearch,
  FluidSearchSkeleton as unstable__FluidSearchSkeleton,
} from './components/FluidSearch';
export {
  FluidSelect as unstable__FluidSelect,
  FluidSelectSkeleton as unstable__FluidSelectSkeleton,
} from './components/FluidSelect';
export {
  FluidTextArea as unstable__FluidTextArea,
  FluidTextAreaSkeleton as unstable__FluidTextAreaSkeleton,
} from './components/FluidTextArea';
export {
  FluidTextInput as unstable__FluidTextInput,
  FluidTextInputSkeleton as unstable__FluidTextInputSkeleton,
} from './components/FluidTextInput';
export {
  FluidTimePicker as unstable__FluidTimePicker,
  FluidTimePickerSkeleton as unstable__FluidTimePickerSkeleton,
} from './components/FluidTimePicker';
export { FluidTimePickerSelect as unstable__FluidTimePickerSelect } from './components/FluidTimePickerSelect';
export { Heading, Section } from './components/Heading';
export { IconButton } from './components/IconButton';
export { Layer, useLayer } from './components/Layer';
export { Layout as unstable_Layout } from './components/Layout';
export {
  LayoutDirection as unstable_LayoutDirection,
  useLayoutDirection as unstable_useLayoutDirection,
} from './components/LayoutDirection';
export { OverflowMenuV2 as unstable_OverflowMenuV2 } from './components/OverflowMenuV2';
export {
  PageSelector as unstable_PageSelector,
  Pagination as unstable_Pagination,
} from './components/Pagination/experimental';
export { Popover, PopoverContent } from './components/Popover';
export { default as ProgressBar } from './components/ProgressBar';
export { HStack, Stack, VStack } from './components/Stack';
export { Tooltip } from './components/Tooltip';
export {
  Text as unstable_Text,
  TextDirection as unstable_TextDirection,
} from './components/Text';
export { DefinitionTooltip } from './components/Tooltip/DefinitionTooltip';
export {
  GlobalTheme,
  Theme,
  usePrefersDarkScheme,
  useTheme,
} from './components/Theme';
export { usePrefix } from './internal/usePrefix';
export { useIdPrefix } from './internal/useIdPrefix';

export { AILabel, AILabelContent, AILabelActions } from './components/AILabel';
// Keep until V12
export {
  AILabel as unstable__Slug,
  AILabelContent as unstable__SlugContent,
  AILabelActions as unstable__SlugActions,
} from './components/AILabel';

export {
  AISkeletonText,
  AISkeletonIcon,
  AISkeletonPlaceholder,
} from './components/AISkeleton';
// Keep until V12
export {
  AISkeletonText as unstable__AiSkeletonText,
  AISkeletonIcon as unstable__AiSkeletonIcon,
  AISkeletonPlaceholder as unstable__AiSkeletonPlaceholder,
} from './components/AISkeleton';

export {
  ChatButton as unstable__ChatButton,
  ChatButtonSkeleton as unstable__ChatButtonSkeleton,
} from './components/ChatButton';

export { IconIndicator as unstable__IconIndicator } from './components/IconIndicator';
export { ShapeIndicator as unstable__ShapeIndicator } from './components/ShapeIndicator';
