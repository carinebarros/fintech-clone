import * as DropdownMenu from "zeego/dropdown-menu";

import RoundButton from "@/components/RoundButton";

const MENU_ITEMS = [
  {
    key: "statement",
    title: "Statement",
    iosIconName: "list.bullet.rectangle.fill",
    androidIconName: "ic_menu_more",
  },
  {
    key: "background",
    title: "Background",
    iosIconName: "photo.fill",
    androidIconName: "ic_menu_gallery",
  },
  {
    key: "account",
    title: "Add new account",
    iosIconName: "plus.rectangle.on.folder.fill",
    androidIconName: "ic_menu_add",
  },
];

const Dropdown = () => (
  <DropdownMenu.Root>
    <DropdownMenu.Trigger>
      <RoundButton text="More" icon="ellipsis-horizontal" onPress={() => {}} />
    </DropdownMenu.Trigger>
    <DropdownMenu.Content
      loop
      side
      align
      alignOffset
      avoidCollisions
      collisionPadding
      sideOffset
    >
      {MENU_ITEMS.map(({ key, iosIconName, title, androidIconName }) => (
        <DropdownMenu.Item key={key}>
          <DropdownMenu.ItemTitle>{title}</DropdownMenu.ItemTitle>
          <DropdownMenu.ItemIcon
            androidIconName={androidIconName}
            ios={{
              name: { iosIconName },
              pointSize: 24,
            }}
          />
        </DropdownMenu.Item>
      ))}
    </DropdownMenu.Content>
  </DropdownMenu.Root>
);

export default Dropdown;
